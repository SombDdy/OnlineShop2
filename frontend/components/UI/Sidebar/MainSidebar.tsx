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
    return (
        <div className={`w-full bg-text hidden md2:flex`}>
                <div className="text-text-light items-center flex flex-col w-32">
                    <Link href='/'>
                        <Image alt="logo" src="/images/smallApple.svg" className="w-12 h-16 mt-8 text-black" width={0} height={0} />
                    </Link>
                    <div className="flex flex-col mt-8 justify-center gap-y-6">
                        {links.map((k) =>
                            <Link
                                key={k.id}
                                href={k.href}
                                className={`flex gap-6 px-4 py-1 rounded-lg items-center ${categoryNameInPath === k.name ? 'bg-text-lightblue text-text' : ''}`}>

                                <Icon icon={k.icon} className="w-6 h-6" />
                            </Link>
                        )}
                    </div>
                </div>
        </div>
    )
}