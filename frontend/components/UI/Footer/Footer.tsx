import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import data from '../../../data/DB.json';
import { useState } from "react";
import Link from "next/link";


export default function Footer() {
  const router = useRouter()
  const path = router.asPath
  const isCategory = router.asPath.split('/')[2];
  const categoryNameInPath = path.split('/')[2];
  const { links } = data;


  const [productState, setProductState] = useState<boolean>(false)
  const [socialState, setSocialState] = useState<boolean>(false)
  return (
    <div className={`w-full bg-text flex md2:hidden`}>
      <div className="text-text-light justify-center items-center flex flex-row w-full">
                    <div className="flex flex-row my-8  items-center">
                        {links.map((k) =>
                            <Link
                                key={k.id}
                                href={k.href}
                                className={`flex gap-6 px-3 xs2:px-4 sm:px-6 py-1 rounded-lg items-center ${categoryNameInPath === k.name ? 'bg-text-lightblue text-text' : ''}`}>

                                <Icon icon={k.icon} className="w-6 h-6" />
                            </Link>
                        )}
                    </div>
                </div>
    </div>
  )
}