import { Layout } from "@/components";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import { useState } from "react";
import { ProductCard } from '@ui';
import data from '../../data/DB.json';
import Image from "next/image";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import React from "react";
import StarIcon from '@mui/icons-material/Star';

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

export default function Product() {
    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[2];
    const { colors, product } = data;

    const [pickedColor, setPickedColor] = useState<number>(0);
    const [value, setValue] = useState<string>('3.5')
    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        if (newValue !== null) {
          setValue(newValue);
        }
      }
    return (
        <Layout>
            <div className="xl:pt-10 w-full">
                <div className = "px-4 sm:px-8 flex md2:hidden flex-row items-center gap-x-2 sm:gap-x-3">
                <Icon icon="cil:arrow-top" rotate={3} className="text-black text-xl xs2:text-2xl sm:text-4xl font-medium" />
                    <p className = "text-lg xs2:text-xl sm:text-3xl font-medium">Back</p>
                </div>
                <div className=" pt-8 md2:pt-0 grid grid-cols-10 w-full pr-2 sm:pr-4 lg:pr-14 px-2 sm:px-4 lg:px-14">
                    <div className="col-span-10 md2:col-span-4 row-start-1 row-end-2 mr-4">
                        <div className="h-fit">
                            <div className="grid grid-cols-6 rounded-3xl">
                                <div className="col-span-1 flex lg:justify-start flex-col gap-y-3 sm:gap-y-6 lg:gap-y-8 xl:gap-y-10 h-fit md2:h-96">
                                    <div className="flex justify-center rounded-lg sm:rounded-2xl bg-text w-[60%] md2:w-full px-1 py-1 sm:px-3 sm:py-3">
                                        <Image width={0} height={0} alt='product' src='/images/appleWatchDark.svg' className="w-[90%] md2:w-full" />
                                    </div>
                                    <div className="flex justify-center rounded-lg sm:rounded-2xl bg-text w-[60%] md2:w-full px-1 py-1 sm:px-3 sm:py-3">
                                        <Image width={0} height={0} alt='product' src='/images/appleWatchLightBlue.svg' className="w-[90%] md2:w-full" />
                                    </div>
                                    <div className="flex justify-center rounded-lg sm:rounded-2xl bg-text w-[60%] md2:w-full px-1 py-1 sm:px-3 sm:py-3">
                                        <Image width={0} height={0} alt='product' src='/images/appleWatchPink.svg' className="w-[90%] md2:w-full" />
                                    </div>
                                </div>
                                <div className="flex items-start lg:items-center col-span-5 h-fit">
                                    <div className="flex rounded-3xl justify-center items-center bg-text w-[50%] md2:w-full mx-4">
                                        <Image width={0} height={0} alt='product' src='/images/appleWatchGreen.svg' className="w-[90%] md2:w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-10 md2:col-span-6 row-start-2 row-end-3 md2:row-start-1 pt-4 md2:pt-0">
                        <div className="flex flex-col">
                            <p className="text-black text-xl xl:text-3xl font-bold font-['Poppins']">Apple Watch</p>
                            <p className="text-black text-opacity-50 text-base xl:text-xl font-medium font-['Poppins'] pt-2 lg:pt-3">Series 5 SE</p>
                            <div className = "pt-2 lg:pt-4">
                            <Box
                                sx={{
                                    width: 200,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Rating
                                    name="text-feedback"
                                    value={value}
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    icon={<StarIcon style={{ color: 'green' }} fontSize="inherit" />}
                                    onChange={handleRatingChange}
                                />
                                <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                            </Box>
                            </div>
                            <p className="text-black text-base lg:text-xl font-bold font-['Poppins'] pt-3 lg:pt-5">$ 529.99</p>
                            <p className="text-black text-opacity-50 text-base lg:text-xl font-medium font-['Poppins'] pt-3 lg:pt-5">Dial Size</p>
                            <div className="flex flex-row gap-x-4 pt-3 lg:pt-4">
                                <button className="px-1.5 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 bg-slate-400 rounded-xl sm:rounded-2xl">4.0</button>
                                <button className="px-1.5 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 border-black rounded-xl sm:rounded-2xl border">4.5</button>
                            </div>
                            <p className="text-black text-opacity-50 text-base lg:text-xl font-medium font-['Poppins'] pt-5 lg:pt-8">Color</p>
                            <div className="flex flex-row gap-x-1 xs2:gap-x-5 sm:gap-x-10 md:gap-x-10 md2:gap-x-0 md2:justify-around pt-3 lg:pt-4">
                                <button className=" px-1.5 py-1.5 sm:px-4 sm:py-1.5 md2:px-2 md2:py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-2 bg-slate-400 text-xs md:text-base rounded-xl sm:rounded-2xl">Midnight</button>
                                <button className="px-1.5 py-1.5 sm:px-4 sm:py-1.5 md2:px-2 md2:py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-2 border-black text-xs md:text-base rounded-xl sm:rounded-2xl border">Starlight</button>
                                <button className="px-1.5 py-1.5 sm:px-4 sm:py-1.5 md2:px-2 md2:py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-2 border-black text-xs md:text-base rounded-xl sm:rounded-2xl border">Red</button>
                                <button className=" px-1.5 py-1.5 sm:px-4 sm:py-1.5 md2:px-2 md2:py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-2 border-black text-xs md:text-base rounded-xl sm:rounded-2xl border">Graphite</button>
                                <button className=" px-1.5 py-1.5 sm:px-4 sm:py-1.5 md2:px-2 md2:py-1 lg:px-4 lg:py-2 2xl:px-6 2xl:py-2 border-black text-xs md:text-base rounded-xl sm:rounded-2xl border">Silver</button>
                            </div>
                            <div className="flex items-center justify-center pt-8 text-xl">
                                <button className="bg-black items-center px-2 py-1.5 md:px-5 md:py-2 lg:px-10 lg:py-3 rounded-2xl text-text font-medium whitespace-nowrap flex flex-row gap-x-2">
                                    <img src="/images/bag.svg"
                                        className="cursor-pointer items-center lg:w-6 lg:h-6 lg:px-0.5" />
                                    Add to bag</button>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-8 mt-8 col-span-10 border-t-2 border-black border-opacity-50 order-3">
                        <p className="text-black text-2xl lg:text-4xl font-bold font-['Poppins']">Description</p>
                        <p className="text-zinc-600 text-lg lg:text-2xl font-medium font-['Poppins'] pt-8">Apple's recent presentation is certainly an interesting event. It can be perceived as a kind of answer to critics and the beginning of the fight against stagnation, which captured not only Cupertino, but also most of the technological giants.

                            The announcement of the new AirPods, Watch Ultra and the rejection of the usual classification of new iPhone generations (saying goodbye to the Mini and the return of the Plus) fills the souls of fans of the Californian brand with hope for exciting future presentations and, as a result, more interesting gadgets.

                            Today we will take a closer look at the brand's new smartwatch — the Watch Ultra. A premium gadget that probably few people expected to see, but which will definitely be the new achievement of the apple franchise called Watch.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
