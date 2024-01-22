import { Layout } from "@/components";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import React, { useState } from "react";
import data from '../data/DB.json';
import Link from "next/link";
import Image from "next/image";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

interface Product {
    name: string;
    category: string;
    description: string;
    pricePerItem: number;
    quantity: number;
    rating: number
}

const labels: { [index: string]: string } = {
    0.5: '0.5 / 5',
    1: '1 / 5',
    1.5: '1.5 / 5',
    2: '2 / 5',
    2.5: '2.5 / 5',
    3: '3 / 5',
    3.5: '3.5 / 5',
    4: '4 / 5',
    4.5: '4.5 / 5',
    5: '5 / 5',
};

export default function Basket() {
    const router = useRouter()
    const path = router.asPath
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [clickedButtonPlus, setClickButtonPlus] = useState<number | null>(null);
    const [clickedButtonMinus, setClickButtonMinus] = useState<number | null>(null);
    const [products, setProducts] = useState<Product[]>([
        { name: 'iPhone13', category: 'Light', description: 'An excellent solution for users who have long dreamed of updating an Apple smartphone.', pricePerItem: 1050, quantity: 1, rating: 3.5 },
        { name: 'iPhone 8', category: 'Dark', description: 'An excellent solution for users who have long dreamed of updating an Apple smartphone.', pricePerItem: 1200, quantity: 2, rating: 4.5 },
    ]);

    const [subtotal, setSubtotal] = useState(() => calculateSubtotal(products));

    function calculateSubtotal(products: Product[]): number {
        return products.reduce((total, product) => total + product.pricePerItem * product.quantity, 0);
    }

    const backButton = () => {
        router.back();
    }

    const addProduct = (index: number) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity += 1;
        setProducts(updatedProducts);
        setSubtotal(calculateSubtotal(updatedProducts));
        setClickButtonPlus(index);
        setClickButtonMinus(null);
    };

    const removeProduct = (index: number) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 0) {
            updatedProducts[index].quantity -= 1;
            setProducts(updatedProducts);
            setSubtotal(calculateSubtotal(updatedProducts));
        }
        setClickButtonMinus(index);
        setClickButtonPlus(null);
    };

    const handleRatingChange = (index: number, newValue: number | null) => {
        if (newValue !== null) {
            const updatedProducts = [...products];
            updatedProducts[index].rating = newValue;
            setProducts(updatedProducts);
        }
    };


    return (
        <Layout>
            <div className="pt-5 pb-12 w-full px-2 sm:px-4 lg:px-14">
                <div className="">
                    <div className="flex flex-col">
                        <button onClick = {backButton} className="pb-10 flex md2:hidden flex-row items-center gap-x-2 sm:gap-x-3">
                            <Icon icon="cil:arrow-top" rotate={3} className="text-black text-xl xs2:text-2xl sm:text-4xl font-medium" />
                            <p className="text-lg xs2:text-xl sm:text-3xl font-medium">Back</p>
                        </button>
                        <p className="text-black text-2xl xs2:text-3xl sm:text-5xl md2:text-4xl lg:text-5xl xl:text-7xl">Check your Bag items</p>
                        {products.map((product, index) => (
                            <div className="mt-10 flex justify-center">
                                <div key={index} className="flex w-fit px-8 sm:px-10 md2:pl-10 items-center bg-text rounded-2xl h-fit">
                                    <div className="flex flex-col items-start">
                                        <div className="flex flex-col md2:flex-row py-4 md2:py-0">
                                            <Link href={'/product/Apple'} className="flex justify-center md2:w-fit">
                                                <Image width={0} height={0} alt="product" src="/images/iphoneLight.svg" className="w-3/5 md2:w-96 lg:w-60 xl:w-72" />
                                            </Link>
                                            <div className="">
                                                <p className="text-black text-base lg:text-lg xl:text-4xl font-medium mb-4 mt-4">{product.name}</p>
                                                <p className="text-neutral-400 text-sm lg:text-base xl:text-1xl font-medium">{product.category}</p>
                                                <p className="mt-4 mb-8 text-sm lg:text-base xl:text-2xl font-medium">{product.description}</p>
                                                <Box
                                                    sx={{
                                                        width: 'fit-content',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: 'green'
                                                    }}
                                                >
                                                    <Rating
                                                        name="text-feedback"
                                                        value={product.rating}
                                                        precision={0.5}
                                                        readOnly
                                                        size="large"
                                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                        icon={<StarIcon style={{ color: 'green' }} fontSize="inherit" />}
                                                        onChange={(event: any, newValue: number | null) => handleRatingChange(index, newValue)}
                                                    />
                                                    <Box sx={{ ml: 2 }}>{labels[product.rating]}</Box>
                                                </Box>
                                                <div className="flex justify-between md2:pr-4 pb-2 mt-10 md2:mt-20">
                                                    <div className="flex flex-row">
                                                        <p className="text-black text-sm lg:text-base xl:text-3xl  font-medium mr-2">$ {product.pricePerItem * product.quantity}</p>
                                                        <p className="text-black text-sm lg:text-base xl:text-3xl font-medium">x {product.quantity}</p>
                                                    </div>
                                                    <div className="flex flex-row items-center">
                                                        <button onClick={() => removeProduct(index)}>
                                                            <Icon icon="ic:sharp-minus" className="items-center lg:w-10 lg:h-10 lg:px-0.5 text-text-red" />
                                                        </button>
                                                        <p className="text-dark text-base lg:text-lg xl:text-3xl font-medium px-6">{product.quantity}</p>
                                                        <button onClick={() => addProduct(index)}>
                                                            <Icon icon="ic:sharp-plus" className="items-center lg:w-10 lg:h-10 lg:px-0.5 text-text-green" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Layout>
    )
}