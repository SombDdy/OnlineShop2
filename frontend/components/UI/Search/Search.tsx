import { Icon } from '@iconify/react';
import Link from 'next/link';
import data from '../../../data/data.json';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

interface Modification {
    name?: string;
    price: string;
}

interface Characteristic {
    name: string;
    value: string;
    type: string;
}

interface ImageInfo {
    name: string,
    color: string,
    main?: boolean
}

interface ProductInfo {
    phones: any;
    name: string;
    description: string;
    modifications: Modification[];
    category: string;
    characteristics: Characteristic[];
    images: ImageInfo[];
}

interface Props {
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ handleSearch }: Props) {
    const router = useRouter();
    const path = router.asPath;
    const categoryNameInPath = path.split('/')[2];
    const isHomePage: boolean = router.pathname === '/';
    const isCategory: boolean = path.split('/')[1] === 'categories';
    const [isFilterMenuVisible, setFilterMenuVisibility] = useState(false);
    const [isMoreButtonMenuVisible, setMoreButtonMenuVisibility] = useState(false);
    const [menuMoreHeight, setMenuMoreHeight] = useState('0');
    const [menuFilterHeight, setMenuFilterHeight] = useState('0');
    const [activeMoreButton, setActiveMoreButton] = useState('');
    const [activeFilterButton, setActiveFilterButton] = useState('');

    const categoryType = router.query.categories;

    const getAllUniqueCharacteristics = () => {
        const uniqueTypes = new Set<string>();
        const typeValueMap: { [key: string]: string[] } = {};

        item?.characteristics.forEach((char) => {
            uniqueTypes.add(char.type);

            if (!typeValueMap[char.type]) {
                typeValueMap[char.type] = [];
            }

            typeValueMap[char.type].push(char.value);
        });

        return { uniqueTypes: Array.from(uniqueTypes), typeValueMap };
    };

    const item: ProductInfo | undefined = data.find((category) => {
        const categoryName = category.name.split(' ')[0];
        return categoryName.replace(/\s/g, '') === categoryType;
    });
    const { uniqueTypes, typeValueMap } = getAllUniqueCharacteristics();

    useEffect(() => {
        setMenuMoreHeight(isMoreButtonMenuVisible ? '17vh' : '0');
        setMenuFilterHeight(isFilterMenuVisible ? '587px' : '0');
    }, [isMoreButtonMenuVisible, isFilterMenuVisible]);

    const filterButton = () => {
        setFilterMenuVisibility(!isFilterMenuVisible);
        if (activeFilterButton === 'filter') {
            setActiveFilterButton('')
        } else {
            setActiveFilterButton('filter')
        }

    };

    const moreButton = () => {
        setMoreButtonMenuVisibility(!isMoreButtonMenuVisible);
        if (activeMoreButton === 'more') {
            setActiveMoreButton('')
        } else {
            setActiveMoreButton('more')
        }

    }

    const getUniqueCharacteristicTypes = (characteristics: any[]) => {
        const uniqueTypes = new Set();

        const uniqueCharacteristics = characteristics.filter((characteristic) => {
            const { type } = characteristic;

            if (!uniqueTypes.has(type)) {
                uniqueTypes.add(type);
                return true;
            }

            return false;
        });

        return uniqueCharacteristics;
    };

    const characteristics = item?.characteristics || [];
    const uniqueCharacteristicTypes = getUniqueCharacteristicTypes(characteristics);

    const categoryName = [
        {
            name: 'iMac'
        },
        {
            name: 'MacBook'
        },
        {
            name: 'iPhone'
        },
        {
            name: 'iPad'
        },
        {
            name: 'Apple Watch'
        },
        {
            name: 'AirPods'
        },
        {
            name: 'Dyson'
        }
    ]

    return (

        <div className={`w-full text-black ${(isCategory || isHomePage) ? 'grid' : 'hidden'} grid-cols-11 items-center justify-between px-2 sm:px-4 lg:px-10`}>
            <><div className="col-span-5 flex flex-col md2:hidden">
                <p className="mb-3 text-zinc-600 font-normal pl-4">Search items</p>
                <input type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." className="truncate bg-text pl-4 text-xs rounded-lg w-full py-2 placeholder-black text-opacity-50 font-medium" />
            </div><div className="text-text-light relative hidden md2:flex col-span-1">
                    <Link href='/'>
                        <img src="/images/logoV1.svg" />
                    </Link>
                </div><div className={`hidden md2:flex ${!!isCategory ? 'gap-x-0 lg:gap-x-2 xl:gap-x-6 2xl:gap-x-6' : 'gap-x-5 md2:gap-x-2 lg:gap-x-5 xl:gap-x-12 2xl:gap-x-12'} items-center col-span-7`}>
                    {categoryName.slice(0, 5).map((k) =>
                        <Link href={`/categories/${k.name.replace(/\s/g, '')}`}>
                            <button className={`${categoryNameInPath === k.name.replace(/\s/g, '') ? 'text-text-lightblue bg-text rounded-3xl' : 'text-text'} ${!!isCategory ? 'md2:ml-2 xl:ml-0 md2:text-sm lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1.5 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} whitespace-nowrap py-2`}>{k.name}</button>
                        </Link>
                    )}
                    <div>
                        <button onClick={moreButton} className={` ${activeMoreButton === 'more' ? 'text-text-lightblue bg-white rounded-3xl' : 'text-text '} ${!!isCategory ? 'md2:ml-2 xl:ml-0 md2:text-sm lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1.5 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} py-2`}>More</button>
                    </div>
                    {isMoreButtonMenuVisible && (
                        <div className={`absolute flex top-28 left-[48vw]`} style={{ maxHeight: menuMoreHeight, overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                            <div className="ml-6 md2:px-3 lg:px-4 px-8 py-8 rounded-3xl bg-white border border-gray-300 p-4 w-full border-b border-t border-transparent transition-all duration-400">
                                <div className="flex flex-col items-center text-zinc-500 xl:text-lg font-medium font-['Poppins']">
                                    {categoryName.slice(5).map((k) =>
                                        <Link href={`/categories/${k.name.replace(/\s/g, '')}`}>
                                            <button className={`${categoryNameInPath === k.name.replace(/\s/g, '') ? 'bg-text-lightblue text-zinc-500 rounded-3xl' : 'text-zinc-400'} ${!!isCategory ? 'md2:ml-2 xl:ml-0 md2:text-sm lg:text-medium xl:text-xl 2xl:text-2xl md2:px-1.5 lg:px-2 2xl:px-4' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5'} whitespace-nowrap py-2`}>{k.name}</button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <Link href='/categories/All'>
                        <button className={`${categoryNameInPath === 'All' ? 'text-text-lightblue bg-text rounded-3xl' : 'text-text'} ${!!isCategory ? 'md2:text-base md2:ml-2 xl:ml-0 lg:text-medium xl:text-xl 2xl:text-2xl md2:px-2 lg:px-3 2xl:px-6' : 'md2:text-base md2:ml-2 xl:ml-0 lg:text-xl 2xl:text-3xl md2:px-2 lg:px-3 2xl:px-5 '} py-2  text-text`}>All</button>
                    </Link>
                </div><div className="hidden md2:flex col-span-2 col-start-10 items-center justify-end flex-row ">
                    <div className="flex flex-row">
                        <div className={`text-text-light flex items-center justify-between rounded-3xl px-2 bg-text ${!!isCategory ? 'w-20 lg:w-28 2xl:w-32' : 'w-28 lg:w-28 2xl:w-52'}`}>
                            <Icon icon="iconamoon:search" className={`${!!isCategory ? 'text-medium 2xl:text-xl' : 'text-lg 2xl:text-3xl'} text-text-lightblue`} />
                            <input type="text" placeholder="Search" className={`bg-text ${isCategory ? 'text-sm 2xl:text-xl w-12 lg:w-16 2xl:w-20' : 'text-lg 2xl:text-3xl w-16 lg:w-16 2xl:w-32'} rounded-3xl  py-1.5 placeholder-text-lightblue focus:outline-none`}
                                onChange={handleSearch}
                            />
                        </div>

                        <button onClick={filterButton} className="relative border-l-2 border-text pl-4 ml-4">
                            <Icon icon="bi:filter-left" className={` ${activeFilterButton === 'filter' ? 'bg-slate-400 text-text' : 'bg-text text-zinc-400'} rounded-xl ${!!isCategory ? 'text-3xl lg:text-4xl' : 'text-3xl lg:text-5xl'} px-1`} />
                        </button>

                        {isFilterMenuVisible && (
                            <div className={`absolute flex flex-row top-28 right-1/4`} style={{ maxHeight: menuFilterHeight, overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                                {uniqueCharacteristicTypes.slice(0, 4).map((uniqueType) => (
                                    <div
                                        key={uniqueType.type}
                                        className="bg-white rounded-b-3xl rounded-l-3xl border border-gray-300 mb-4"
                                    >
                                        <p className="text-zinc-600 text-lg font-medium px-8 py-4">{uniqueType.type}</p>
                                        <div className="flex flex-col gap-y-1 px-8 pb-4">
                                            {characteristics
                                                .filter((char) => char.type === uniqueType.type)
                                                .map((char) => (
                                                    <div key={char.name} className="flex justify-between">
                                                        <span className="text-zinc-600 text-base font-normal">{char.name}:</span>
                                                        <span className="text-black text-base font-normal">{char.value}</span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        )}
                    </div>
                </div></>
        </div>
    )
}