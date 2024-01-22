import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from "react-toastify";

interface ProductCardProps {
    item: {
        id: string,
        name: string,
        price: string,
        images: string[],
        description: string,

    }
}

export default function ProductCard({ item }: ProductCardProps) {
    return (
        <div className={`w-fit ${item.name === 'MacBook' ? 'col-span-2' : 'col-span-1'}`}>
            <div className="flex rounded-3xl justify-start flex-col w-fit">
                <div className=" rounded-3xl bg-text px-10 py-6 sm:px-16 sm:py-12">
                <Link href={`/product/${item.name}`} className="">
                    <Image width={0} height={0} alt='product' src={item.images[0]} className="w-full" />
                </Link>
                </div>
                <div className="mt-10 flex flex-col items-start">
                    <div className="text-black text-center text-xs sm:text-base lg:text-xl font-medium">{item.name}</div>
                    <div className="py-2 text-zinc-600 text-center text-sm lg:text-lg font-regular">{item.description}</div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="text-black text-center text-xs lg:text-xl font-bold">{item.price} $</div>
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