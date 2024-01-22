import { Icon } from '@iconify/react';
import Link from 'next/link';
import data from '../../../data/DB.json';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Search() {
    const router = useRouter();
    const path = router.asPath;
    const categoryNameInPath = path.split('/')[2];
    const isHomePage: boolean = router.pathname === '/';
    const isCategory: boolean = path.split('/')[1] === 'categories';
    const [isFilterMenuVisible, setFilterMenuVisibility] = useState(false);

    const { links } = data

    const filterButton = () => {
        setFilterMenuVisibility(!isFilterMenuVisible);
    }

    return (

        <div className={`w-full text-black ${(isCategory || isHomePage) ? 'grid' : 'hidden'} grid-cols-11 items-center justify-between px-2 sm:px-4 lg:px-10`}>
            {isCategory ? (
                <><div className="col-span-5 flex flex-col md2:hidden">
                    <p className="mb-3 text-zinc-600 font-normal pl-4">Search items</p>
                    <input type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." className="truncate bg-text pl-4 text-xs rounded-lg w-full py-2 placeholder-black text-opacity-50 font-medium" />
                </div><div className="text-text-light relative hidden md2:flex col-span-1">
                        <Link href='/'>
                            <img src="/images/logoV1.svg" />
                        </Link>
                    </div><div className={`hidden md2:flex ${!!isCategory ? 'gap-x-0 lg:gap-x-3 xl:gap-x-8 2xl:gap-x-8' : 'gap-x-5 md2:gap-x-2 lg:gap-x-5 xl:gap-x-12 2xl:gap-x-12'} items-center col-span-7`}>
                        {links.map((k) =>
                            <Link href={k.href}>
                                <button className={`${categoryNameInPath === k.name ? 'text-text-lightblue bg-text rounded-3xl' : 'text-text'} ${!!isCategory ? 'md2:ml-2 xl:ml-0 md2:text-sm lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1.5 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} py-2`}>{k.name}</button>
                            </Link>
                        )}
                        <button className={`${!!isCategory ? 'md2:text-base md2:ml-2 xl:ml-0 lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} py-2 text-text`}>All</button>
                    </div><div className="hidden md2:flex col-span-2 col-start-10 items-center justify-end flex-row ">
                        <div className="flex flex-row">
                            <div className={`text-text-light flex items-center justify-between rounded-3xl px-2 bg-text ${!!isCategory ? 'w-20 lg:w-28 2xl:w-32' : 'w-28 lg:w-28 2xl:w-52'}`}>
                                <Icon icon="iconamoon:search" className={`${!!isCategory ? 'text-medium 2xl:text-xl' : 'text-lg 2xl:text-3xl'} text-text-lightblue`} />
                                <input type="text" placeholder="Search" className={`bg-text ${isCategory ? 'text-sm 2xl:text-xl w-12 lg:w-16 2xl:w-20' : 'text-lg 2xl:text-3xl w-16 lg:w-16 2xl:w-32'} rounded-3xl  py-1.5 placeholder-text-lightblue focus:outline-none`} />
                            </div>

                            <button onClick={filterButton} className="relative border-l-2 border-text pl-4 ml-4">
                                <Icon icon="bi:filter-left" className={`text-zinc-400 bg-text rounded-xl ${!!isCategory ? 'text-3xl lg:text-4xl' : 'text-3xl lg:text-5xl'} mr-4 px-1`} />
                            </button>

                            {isFilterMenuVisible && (
                                <div className="absolute flex flex-row top-28 right-1/4">
                                    <div className="ml-6 md2:px-3 lg:px-4 px-8 py-8 rounded-b-3xl rounded-l-3xl bg-white border border-gray-300 p-4 w-full border-b border-t border-transparent">
                                        <div className="flex flex-col items-center">
                                            <div className="bg-text-lightblue text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center px-8 py-2 rounded-3xl">
                                                Processor
                                            </div>
                                            <div className="flex flex-col gap-y-3 pt-6 text-zinc-500 xl:text-lg font-medium font-['Poppins']">
                                                <label className="flex gap-x-2 ">
                                                    <input type="checkbox" />
                                                    M1 Pro
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    M2 Max
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    M1
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    M2
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    M2 Pro
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    M2 Max
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    M3
                                                </label>
                                            </div>
                                        </div>
                                        <div className="pt-4">
                                            <div className="bg-text-lightblue text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center px-8 py-2 rounded-3xl">
                                                Diagonal
                                            </div>
                                            <div className="flex flex-col ml-6 gap-y-4 pt-4 text-zinc-500 xl:text-lg font-medium font-['Poppins']">
                                                <label className="flex gap-x-2 ">
                                                    <input type="checkbox" />
                                                    13,3
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    14,6
                                                </label>
                                                <label className="flex gap-x-2">
                                                    <input type="checkbox" />
                                                    15,3
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md2:px-3 lg:px-4 xl:px-6 py-8 gap-y-6 rounded-b-3xl bg-white border border-b border-t border-transparent h-fit -mx-1 items-center">
                                        <div className="bg-text-lightblue text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center px-8 py-2 rounded-3xl w-32">
                                            Price
                                        </div>
                                        <div className="flex flex-col gap-y-4 items-center">
                                            <button className="border border-zinc-500 text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center xl:px-8 py-2 rounded-3xl w-32 xl:w-44">Higher</button>
                                            <Icon icon="icon-park-outline:change" className="text-zinc-500 text-2xl" />
                                            <button className="border border-zinc-500 text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center xl:px-8 py-2 rounded-3xl w-32 xl:w-44">Lower</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center  md2:px-3 lg:px-4 xl:px-10 py-8 rounded-b-3xl bg-white border-gray-300 p-4 w-full h-fit -mr-1 border-b border-t border-transparent">
                                        <div className="bg-text-lightblue text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center px-8 py-2 rounded-3xl">
                                            Color
                                        </div>
                                        <div className="flex flex-col gap-y-3 pt-6 text-zinc-500 xl:text-lg font-medium font-['Poppins']">
                                            <label className="flex gap-x-2 ">
                                                <input type="checkbox" />
                                                M1 Pro
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                M2 Max
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                M1
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                M2
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                M2 Pro
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                M2 Max
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                M3
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center  md2:px-3 lg:px-4 px-8 py-8 rounded-b-3xl bg-white border border-gray-300 p-4 border-b border-t border-transparent w-full h-fit">
                                        <div className="bg-text-lightblue text-zinc-500 xl:text-lg font-medium font-['Poppins'] text-center px-8 py-2 rounded-3xl whitespace-nowrap">
                                            Storage (GB)
                                        </div>
                                        <div className="flex flex-col gap-y-3 pt-6 text-zinc-500 xl:text-lg font-medium font-['Poppins']">
                                            <label className="flex gap-x-2 ">
                                                <input type="checkbox" />
                                                128
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                256
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                512
                                            </label>
                                            <label className="flex gap-x-2">
                                                <input type="checkbox" />
                                                100
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div></>
            ) : (
                <><div className="text-text-light relative hidden md2:flex col-span-1">
                    <img src="/images/logoV1.svg" />
                </div><div className={`hidden md2:flex ${!!isCategory ? 'gap-x-0 lg:gap-x-3 xl:gap-x-8 2xl:gap-x-8' : 'gap-x-5 md2:gap-x-2 lg:gap-x-5 xl:gap-x-12 2xl:gap-x-12'} items-center col-span-7`}>
                        {links.map((k) =>
                            <Link href={k.href}>
                                <button className={`${categoryNameInPath === k.name ? 'text-text-lightblue bg-text rounded-3xl' : 'text-text'} ${!!isCategory ? 'md2:ml-2 xl:ml-0 md2:text-sm lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1.5 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} py-2`}>{k.name}</button>
                            </Link>
                        )}
                        <button className={`${!!isCategory ? 'md2:text-base md2:ml-2 xl:ml-0 lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} py-2 text-text`}>All</button>
                    </div><div className="hidden md2:flex col-span-2 col-start-10 items-center justify-end flex-row ">
                        <div className="flex flex-row">
                            <div className={`text-text-light flex items-center justify-between rounded-3xl px-2 bg-text ${!!isCategory ? 'w-20 lg:w-28 2xl:w-32' : 'w-28 lg:w-28 2xl:w-52'}`}>
                                <Icon icon="iconamoon:search" className={`${!!isCategory ? 'text-medium 2xl:text-xl' : 'text-lg 2xl:text-3xl'} text-text-lightblue`} />
                                <input type="text" placeholder="Search" className={`bg-text ${isCategory ? 'text-sm 2xl:text-xl w-12 lg:w-16 2xl:w-20' : 'text-lg 2xl:text-3xl w-16 lg:w-16 2xl:w-32'} rounded-3xl  py-1.5 placeholder-text-lightblue focus:outline-none`} />
                            </div>
                            <button className="border-l-2 border-text pl-4 ml-4">
                                <Icon icon="bi:filter-left" className={`text-zinc-400 bg-text rounded-xl ${!!isCategory ? 'text-3xl lg:text-4xl' : 'text-3xl lg:text-5xl'} px-1 mr-4`} />
                            </button>
                        </div>
                    </div>
                    <div className="flex md2:hidden col-span-11 justify-between items-center">
                        <Icon icon="eva:menu-fill" className="text-text text-3xl ml-4 flex md2:hidden" />
                        <Link href={'/'} className="flex md2:hidden col-span-1 col-start-6 items-center">
                            <Icon icon="bi:apple" className="text-text text-3xl flex md2:hidden" />
                        </Link>
                        <div className="flex flex-row items-center">
                            <div className="text-text-light flex items-center justify-between rounded-3xl ">
                                <Icon icon="iconamoon:search" className="text-xl text-text" />
                                <input type="text" placeholder="Search" className="bg-text text-xs rounded-3xl w-10 py-1.5 placeholder-text-lightblue hidden" />
                            </div>
                            <Link href={'/basket'} className="border-l-2 border-text pl-2 ml-2">
                                <Icon icon="lucide:shopping-bag" className="text-text text-xl lg:text-4xl mr-4" />
                            </Link>
                        </div>
                    </div></>
            )}
        </div>
    )
}