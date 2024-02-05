import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import data from '../../../data/DB.json';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import Image from "next/image";

export default function MainSidebar() {
    const router = useRouter();
    const path = router.asPath;
    const categoryNameInPath = path.split('/')[2];
    const isCategory: boolean = path.split('/')[1] === 'categories' || path.split('/')[1] === 'basket';
    const [menuState, setMenuState] = useState<boolean>(true);
    const { links } = data

    const icons = [
        {
            icon: "mi:computer",
            name: 'iMac'
        },
        {
            icon: "ri:macbook-line",
            name: 'MacBook'
        },
        {
            icon: "pepicons-pop:smartphone-notch",
            name: 'iPhone'
        },
        {
            icon: "raphael:ipad",
            name: 'iPad'
        },
        {
            icon: "tdesign:watch",
            name: 'Apple Watch'
        },
        {
            icon: "solar:airbuds-case-open-broken",
            name: 'AirPods'
        },
        {
            icon: "arcticons:my-dyson",
            name: 'Dyson'
        },
    ]

    return (
        <div className={`w-full bg-text hidden md2:flex`}>
            <div className="text-text-light items-center flex flex-col w-32">
                <Link href='/'>
                    <Image alt="logo" src="/images/smallApple.svg" className="w-12 h-16 mt-8 text-black" width={0} height={0} />
                </Link>
                <div className="flex flex-col mt-8 justify-center gap-y-6">
                    {icons.map((k) =>
                        <Link       
                            href={`/categories/${k.name.replace(/\s/g, '')}`}
                            className={`flex gap-6 px-4 py-1 rounded-lg items-center ${categoryNameInPath === k.name.replace(/\s/g, '') ? 'bg-text-lightblue' : ''}`}>
                            <Icon icon={k.icon} className = {`w-6 h-6 ${categoryNameInPath === k.name.replace(/\s/g, '') ? 'text-black' : 'text-text-light'}`} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}