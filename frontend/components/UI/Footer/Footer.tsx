import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import data from '../../../data/DB.json';
import { useState } from "react";
import Link from "next/link";


export default function Footer() {
  const router = useRouter()
  const path = router.asPath
  const categoryNameInPath = path.split('/')[2];
  const icons = [
    {
      icon: "mi:computer",
      href: "/categories/iMac",
      name: 'iMac'
    },
    {
      icon: "ri:macbook-line",
      href: "/categories/MacBook",
      name: 'MacBook'
    },
    {
      icon: "pepicons-pop:smartphone-notch",
      href: "/categories/iPhone",
      name: 'iPhone'
    },
    {
      icon: "raphael:ipad",
      href: "/categories/iPad",
      name: 'iPad'
    },
    {
      icon: "tdesign:watch",
      href: "/categories/AppleWatch",
      name: 'AppleWatch'
    },
    {
      icon: "solar:airbuds-case-open-broken",
      href: "/categories/AirPods",
      name: 'AirPods'
    },
    {
      icon: "arcticons:my-dyson",
      href: "/categories/Dyson",
      name: 'Dyson'
    },
  ]
  return (
    <div className={`w-full bg-text flex md2:hidden`}>
      <div className="text-text-light justify-center items-center flex flex-row w-full">
        <div className="flex flex-row my-8  items-center">
          {icons.map((k) =>
            <Link
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