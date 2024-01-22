import Link from "next/link";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import data from '../../../data/DB.json';
import { useState } from "react";

export default function AdvancedSideBar() {
    const [processorState, setProcessorState] = useState<boolean>(false);
    const [priceState, setPriceState] = useState<boolean>(false);
    const [colorState, setColorState] = useState<boolean>(false);
    const [displayState, setDisplayState] = useState<boolean>(false);
    const [memoryState, setMemoryState] = useState<boolean>(false);
    const [videoCardState, setVideoCardState] = useState<boolean>(false);
    const [ssdState, setSSDState] = useState<boolean>(false);
    const router = useRouter();
    const path = router.asPath;
    const categoryNameInPath = path.split('/')[2];
    const isCategory : boolean = path.split('/')[1] === 'categories';
    const { links } = data
    return (
        <div className={`text-text ${!!isCategory ? 'w-full bg-bg-body hidden md2:block' : 'hidden'} items-end`}>
            <div className="pb-5 pt-8 pr-7 bg-violet">
                <div className="flex text-text text-lg font-medium bg-purple py-1 w-44 rounded-r-xl justify-end pr-10">
                    CATEGORY
                </div>
                <div className='flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg'>
                    {links.map((k) => 
                    <Link href={k.href} className = {`${categoryNameInPath === k.name ? 'text-black' : 'text-text'}`}>{k.name}</Link>
                    )}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7 border-b border-bg-black">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-44 rounded-r-xl justify-end pr-7 items-center">
                    <button className="w-5 h-5 p-1 bg-text-light mr-5 rounded-full opacity-75" onClick={() => setProcessorState(!processorState)}>
                        <Icon icon={`${processorState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    PROCESSOR
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {processorState && (
                        <><label>
                            <input type="checkbox" />
                            M1 Pro
                        </label><label>
                                <input type="checkbox" />
                                M2 Max
                            </label><label>
                                <input type="checkbox" />
                                M1
                            </label><label>
                                <input type="checkbox" />
                                M2
                            </label><label>
                                <input type="checkbox" />
                                M2 Pro
                            </label><label>
                                <input type="checkbox" />
                                M2 Max
                            </label><label>
                                <input type="checkbox" />
                                M3
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7 border-b border-bg-black">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-36 rounded-r-xl justify-end pr-7 items-center" >
                    <button className="w-5 h-5 p-1 bg-text-light mr-10 rounded-full opacity-75" onClick={() => setPriceState(!priceState)}>
                        <Icon icon={`${priceState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    PRICE
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {priceState && (
                        <><label>
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7 border-b border-bg-black">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-36 rounded-r-xl justify-end pr-7 items-center">
                    <button className="w-5 h-5 p-1 bg-text-light mr-7 rounded-full opacity-75" onClick={() => setColorState(!colorState)}>
                        <Icon icon={`${colorState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    COLOR
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {colorState && (
                        <><label>
                            
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7 border-b border-bg-black">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-40 rounded-r-xl justify-end pr-7 items-center">
                    <button className="w-5 h-5 p-1 bg-text-light mr-8 rounded-full opacity-75" onClick={() => setDisplayState(!displayState)}>
                        <Icon icon={`${displayState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    DISPLAY
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {displayState && (
                        <><label>
                            
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7 border-b border-bg-black">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-40 rounded-r-xl justify-end pr-7 items-center">
                    <button className="w-5 h-5 p-1 bg-text-light mr-6 rounded-full opacity-75" onClick={() => setMemoryState(!memoryState)}>
                        <Icon icon={`${memoryState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    MEMORY
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {memoryState && (
                        <><label>
                            
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7 border-b border-bg-black">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-44 rounded-r-xl justify-end pr-7 items-center">
                    <button className="w-5 h-5 p-1 bg-text-light mr-3 rounded-full opacity-75" onClick={() => setVideoCardState(!videoCardState)}>
                        <Icon icon={`${videoCardState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    VIDEO CARD
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {videoCardState && (
                        <><label>
                            
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-light pb-5 pt-8 pr-7">
                <div className="flex text-text text-lg font-medium bg-neutral-700 py-1 w-32 rounded-r-xl justify-end pr-7 items-center">
                    <button className="w-5 h-5 p-1 bg-text-light mr-9 rounded-full opacity-75" onClick={() => setSSDState(!ssdState)}>
                        <Icon icon={`${ssdState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
                    </button>
                    SSD
                </div>
                <div className="flex flex-col pl-12 gap-y-3 pt-4 text-text text-lg">
                    {ssdState && (
                        <><label>
                            
                            </label></>)}
                </div>
            </div>
            <div className="bg-bg-body text-text-light flex justify-center items-center p-6">
                <Icon icon="ic:round-cancel" />
                <p>Clear Filters</p>
            </div>
        </div>
    )
}