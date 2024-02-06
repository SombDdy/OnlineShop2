import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function MainBody() {

    const colors = [
        {
            id: 0,
            img: 'images/appleWatchLightBlue.svg',
            color: '#A1BFD0',
        },
        {
            id: 1,
            img: 'images/appleWatchDark.svg',
            color: '#79818F',
        },
        {
            id: 2,
            img: 'images/appleWatchGreen.svg',
            color: '#92DDD6',
        },
        {
            id: 3,
            img: 'images/appleWatchPink.svg',
            color: '#E9D5D3',
        }
    ]
    const [pickedColor, setPickedColor] = useState<number>(0);

    return (
        <div className="flex pt-16 lg:pt-12 px-2 sm:px-4 lg:px-14">
            <div className="grid w-full grid-cols-6">
                <div className="text-text text-3xl lg:text-5xl xl:text-6xl lg:pt-20 xl:pt-16 col-span-8 lg:col-span-3 row-start-1 row-end-2">
                    <p className="font-bold leading-normal">Unlock All The</p>
                    <p className="font-normal leading-tight">Possibilities Of Your Gadget</p>
                    <div className='w-fit pt-36'>
                        <Link href={'/product/Iphone13'}>
                            <button className="lg:text-lg lg:px-12 lg:py-3 xl:text-3xl rounded-full border-text border lg:mt-32 xl:mt-24 hidden lg:flex">Buy Now</button>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-10 lg:grid-cols-8 col-span-6 row-start-2 sm-row-end-3 lg:col-span-3 lg:row-start-1 lg:row-end-2 pt-6">
                    <div className="col-span-7 lg:col-span-6">
                        <Image width={0} height={0} alt="color" src={colors[pickedColor].img} className="w-5/6 xl:w-5/6 lg:ml-20 xl:ml-52" />
                        <div className= "w-full h-20 -ml-7 lg:ml-12 xl:ml-8"></div>
                    </div>
                    <div className="pt-8 sm:pt-24 lg:pt-20 lg:pl-24 xl:pt-32 xl:pl-36 col-span-1" >
                        {
                            colors.map((c) => {
                                return <div className='flex flex-col items-center' key={c.id}>
                                    <div
                                        className={`cursor-pointer mb-1 rounded-full ${c.id === pickedColor ? 'w-4 h-4 xs2:w-6 xs2:h-6 md:w-8 md:h-8 xl:w-7 xl:h-7' : 'w-3 h-3 xs2:w-5 xs2:h-5 md:w-7 md:h-7 xl:w-6 xl:h-6'} border-text border`}
                                        onClick={() => setPickedColor(c.id)}
                                        style={{ backgroundColor: c.color }}
                                    />
                                    {
                                        c.id + 1 !== colors.length
                                        && (
                                            <div className='flex flex-col items-center'>
                                                <div className="bg-text mb-1 w-0.5 h-0.5 xs2:w-1 xs2:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                                <div className="hidden lg:flex mb-1 bg-text xs2:w-1 xs2:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                                <div className="bg-text mb-1 w-0.5 h-0.5 xs2:w-1 xs2:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                                <div className="bg-text mb-1 w-0.5 h-0.5 xs2:w-1 xs2:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                            </div>)
                                    }
                                </div>
                            }
                            )
                        }
                    </div>
                </div>
                <div className="w-full pt-10 lg:pr-1 xl:pr-12 col-span-6 row-start-3 row-end-4 grid grid-cols-10 ">
                    <div className=" text-stone-50 lg:text-2xl xl:text-3xl font-medium lg:pt-16 xl:pt-16 mb-16 opacity-80 hidden lg:flex flex-row">
                        <Icon icon="cil:arrow-top" className="inline-flex -rotate-90" />
                        <div className="inline-flex px-4">1</div>
                        <Icon icon="cil:arrow-top" className="inline-flex rotate-90" />
                    </div>
                    <div className="flex flex-row justify-between col-span-10 lg:col-span-5 xl:col-span-4 col-start-1 lg:col-start-6 xl:col-start-7 lg:pt-6 xl:pt-6">
                        {colors.map((e) => (
                            e.id !== pickedColor && (
                                <div
                                    key={e.id}
                                    onClick={() => setPickedColor(e.id)}
                                    style={{ backgroundColor: e.color }}
                                    className={`flex cursor-pointer w-20 h-12 xs2:w-28 xs2:h-16 sm:w-36 sm:h-20 md:w-44 md:h-20 lg:w-40 lg:h-3/5 xl:w-44 xl:h-3/5 rounded-2xl relative`}
                                >
                                    <div className='w-4 h-4 md:w-8 md:h-8 border-4 my-auto border-white ml-2'></div>
                                    <Image width={0} height={0} alt='product' src={e.img} className="w-3/6 xs2:w-3/6 md:w-4/6 lg:w-4/6 absolute bottom-4 left-8 xs2:bottom-5 xs2:left-14" />
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <Link href={'/product/Iphone13'} className = "row-start-4 row-end-5 pt-8 col-start-1 items-end flex lg:hidden">
                            <button className="text-sm xs2:text-base md:text-lg text-text whitespace-nowrap px-3 py-2 sm:px-6 sm:py-2 lg:px-12 lg:py-3 xl:text-3xl rounded-full border-text border lg:mt-32 xl:mt-24">Buy Now</button>
                </Link>
            </div>
        </div>
    )
}