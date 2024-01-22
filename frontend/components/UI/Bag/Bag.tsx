import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import data from '../../../data/DB.json';
import { useState } from 'react';
import Link from 'next/link';

export default function Bag() {
    const [isFormVisible, setIsFormVisible] = useState(true);
    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[2];
    const isBasket: boolean = path.split('/')[1] === 'basket';
    const handleButtonClick = () => {
        setIsFormVisible(!isFormVisible);
    };
    const { colors } = data;
    return (
        <div className={`${isBasket ? 'flex justify-center w-full md2:w-3/12' : 'w-full md2:w-2/12'} ${!!isCategory || isBasket ? 'md2:fixed' : 'md2:hidden'} md2:top-32 md2:right-4 mb-6 mx-2 md2:mx-0 md2:mb-0 pt-4 md2:0 border-t-2 md2:border-t-0 border-black border-opacity-50`}>
            {isBasket ? (
                <><div className={`bg-text rounded-3xl w-full xs2:w-4/5 sm:w-3/5 md2:w-full h-fit p-10 ${isFormVisible ? 'block' : 'hidden'}`}>
                    <p className="text-black text-3xl font-medium">Contact information</p>
                    <div className="pt-10">
                        <input type="text" placeholder="First name" className="bg-text border border-black text-lg placeholder-black rounded-3xl pl-10 w-full py-2 focus:outline-none" />
                        <input type="text" placeholder="Last Name" className="bg-text border border-black text-lg placeholder-black rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                        <input type="text" placeholder="Phone number" className="bg-text border border-black text-lg placeholder-black rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                        <input type="text" placeholder="Email" className="bg-text border border-black text-lg placeholder-black rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                    </div>
                    <div className="flex justify-center pt-10">
                        <button onClick={handleButtonClick} className="bg-black text-text py-2 w-4/5 rounded-3xl">Make an order</button>
                    </div>
                </div><div className={`col-span-3 bg-text rounded-3xl w-full xs2:w-4/5 sm:w-3/5 h-full p-10 ${isFormVisible ? 'hidden' : 'flex flex-col'}`}>
                        <div className="flex flex-row justify-between">
                            <p className="text-black sm:text-3xl font-medium">Card detail</p>
                            <button onClick={handleButtonClick}>
                                <Icon icon="cil:arrow-top" rotate={3} className="text-black sm:text-xl font-medium" />
                            </button>
                        </div>
                        <p className="text-black opacity-60 sm:text-lg font-medium pt-5">Select card Type</p>
                        <div className="flex gap-3 text-black pt-5">
                            <Icon icon="cib:cc-visa" className="sm:text-5xl" />
                            <Icon icon="fa-brands:cc-mastercard" className="sm:text-5xl" />
                            <Icon icon="simple-icons:applepay" className="sm:text-5xl" />
                        </div>
                        <input type="text" placeholder="Card Number" className="bg-black border border-text sm:text-lg placeholder-text rounded-3xl pl-4 sm:pl-10 w-full py-2 mt-5 focus:outline-none" />
                        <div className="flex flex-row justify-between pt-5">
                            <p className="text-black sm:text-lg font-medium">Explore Date</p>
                            <p className="text-black sm:text-lg font-medium">CVV</p>
                        </div>
                        <div className="flex flex-row justify-between pt-5">
                            <div className="flex flex-row items-end gap-x-1">
                                <div className="flex flex-row items-end">
                                    <input type="text" placeholder="" className="bg-text border-b border-black text-sm text-bottom placeholder-text w-6 sm:w-10 focus:outline-none" />
                                    <div className="w-0.5 h-4 bg-black transform -skew-x-6 "></div>
                                </div>
                                <div className="flex flex-row items-end">
                                    <input type="text" placeholder="" className="bg-text border-b border-black text-sm text-bottom placeholder-text w-6 sm:w-10 focus:outline-none" />
                                    <div className="w-0.5 h-4 bg-black transform -skew-x-6 "></div>
                                </div>
                                <div className="flex flex-row items-end">
                                    <input type="text" placeholder="" className="bg-text border-b border-black text-sm text-bottom placeholder-text w-6 sm:w-10 focus:outline-none" />
                                    <div className="w-0.5 h-4 bg-black transform -skew-x-6 "></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row items-end">
                                    <input type="text" placeholder="" className="bg-text border-b border-black sm:text-sm text-bottom placeholder-text w-10 sm:w-16 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pt-10">
                            <button className="bg-black text-text py-2 w-3/5 sm:w-4/5 rounded-3xl">CHECKOUT</button>
                        </div>
                    </div></>
            ) : (
                <><div className="flex flex-col text-start md2:text-center items-start md2:items-center w-full">
                    <p className="text-black text-2xl md2:text-4xl lg:text-5xl font-medium w-full">Bag</p>
                    <div className="flex md2:grid grid-cols-3 gap-2 lg:gap-5 mt-10 mx-1 md2:mx-0">
                        {colors.map((k) => <div className="bg-text w-full md2:w-5/6 h-auto py-3 lg:py-3 flex items-center justify-center rounded-2xl">
                            <img src={k.img} className="w-1/2" />
                        </div>)}
                    </div>
                    <Link href={'/basket'} className="">
                        <button className="hidden md2:flex md2:text-lg lg:text-xl font-medium whitespace-nowrap mt-10 md2:px-4 lg:px-6 xl:px-10 py-2 gap-x-2 lg:w-40 xl:w-48 bg-black text-text rounded-2xl items-center">
                            <img src="/images/bagV2.svg" />
                            View Bag
                        </button>
                    </Link>
                </div>
                    <div className="flex md2:hidden justify-center w-full">
                        <Link href={'/basket'} className="">
                            <button className="flex md2:text-lg lg:text-xl font-medium whitespace-nowrap mt-10 px-3 md2:px-4 lg:px-6 xl:px-10 py-2 gap-x-2 lg:w-40 xl:w-48 bg-black text-text rounded-2xl items-center">
                                <img src="/images/bagV2.svg" />
                                View Bag
                            </button>
                        </Link>
                    </div></>
            )}
        </div>
    )
}