import Link from "next/link"
import { Icon } from '@iconify/react';
import { useRouter } from "next/router"
import { Layout } from "@/components"
import data from '../../data/DB.json';
import { ProductCard } from '@ui';

export default function ProductCategory() {
    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[2];
    const { links, product } = data;
    return (
        <Layout>
            <div className="pt-12 w-full px-2 sm:px-4 lg:px-10">
                <div className="w-full md2:pl-16 lg:pl-7 xl:pl-16 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-8 xl:gap-y-12 xl:gap-x-12 pt-16">
                    {product.map(item => <ProductCard item={item}/>)}
                </div>
            </div>
        </Layout>

    )
}