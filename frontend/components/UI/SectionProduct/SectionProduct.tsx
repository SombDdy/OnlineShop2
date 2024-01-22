import { Icon } from '@iconify/react';
import data from '../../../data/DB.json';
import { ProductCard } from '@ui';

export default function SectProduct() {
    const { product } = data;
    return (
        <div className="pt-10 lg:pt-28 xl:pt-24 px-2 sm:px-4 lg:px-14">
            <div className="grid grid-cols-5 items-center gap-y-1 sm:gap-y-5">
                <div className="text-xl whitespace-nowrap sm:text-2xl lg:text-3xl text-text items-center col-span-3 lg:col-span-1 col-start-1 col-end-2 lg:row-start-1 lg:row-end-1">Our Product</div>
                <div className="text-3xl text-text w-full col-span-4 col-start-1 col-end-6 lg:col-start-2 lg:col-end-5 row-start-2 row-end-3 lg:row-start-1 lg:row-end-1">
                    <button className="px-2 py-0.5 sm:px-6 sm:py-2 lg:px-9 lg:py-3 bg-violet rounded-3xl text-sm lg:text-lg font-medium">Top</button>
                    <button className="px-2 py-0.5 sm:px-6 sm:py-2 lg:px-9 lg:py-3 mx-4 border border-white rounded-3xl text-sm lg:text-lg font-medium">Popular</button>
                    <button className="px-2 py-0.5 sm:px-6 sm:py-2 lg:px-9 lg:py-3 border border-white rounded-3xl text-sm lg:text-lg font-medium">Most sold</button>
                </div>
                <div className="text-[#666666] text-base lg:text-lg font-medium col-span-1 col-start-5 col-end-7 text-end lg:row-start-1 lg:row-end-1">Categories</div>
            </div>
            <div className="pt-20 w-full">
                <div className="grid justify-between grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-8 xl:gap-y-12 xl:gap-x-12">
                    {product.slice(0, 8).map(item => <ProductCard item={item} />)}
                </div>

            </div>
        </div>
    )
}