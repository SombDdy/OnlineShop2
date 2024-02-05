import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";

interface Modification {
    name: string;
    price: string;
  }

interface Image {
    name: string,
    color: string,
    main: boolean
}

interface ProductCardProps {
    item: {
        name: string,
        category: string,
        modifications: Modification[],
        images: Image[]

    }
}


export default function ProductCard({ item }: ProductCardProps) {
    const router = useRouter();
    const path = router.asPath;
    const firstPrice = item.modifications && item.modifications.length > 0 && item.modifications[0].price ? item.modifications[0].price : "no price";
    const itemType = item.name && item.name.split && item.name.split(' ')[0] ? item.name.split(' ')[0] : '';
    
    return (
        <div className={`w-full ${itemType == 'MacBook' ? 'col-span-2' : 'col-span-2'}`}>
            <div className="flex rounded-3xl flex-col w-full mx-auto">
            <Link href={item.name ? `/product/${item.name.replace(/\s/g, '')}` : '#'} className="rounded-3xl bg-text shadow-lg px-5 py-6 sm:px-16 sm:py-12 h-56 sm:h-80 ">
            {item.images && item.images.length > 0 && (
        <img alt='product' src={`/images${item.images[0].name}`} className="w-full h-full object-contain" />
    )}
                </Link>
                <div className="flex flex-col justify-between h-28 mt-10">
                    <div className="text-black text-start text-xs sm:text-base lg:text-xl font-medium">{item.name}</div>
                    <div className="text-zinc-600 text-start text-sm lg:text-lg font-regular">{item.category}</div>
                    <div className="flex flex-row items-center justify-between w-full">
                            <div className="text-black text-center text-xs lg:text-xl font-bold">{firstPrice} $</div>
                        <div className="inline-flex items-center bg-black rounded-xl px-1 py-1">
                            <img src="/images/bag.svg"
                                className="cursor-pointer items-center lg:w-6 lg:h-6 lg:px-0.5"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    toast.success('Added to Cart');
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}