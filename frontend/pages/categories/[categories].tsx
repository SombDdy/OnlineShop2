import { useRouter } from "next/router"
import { Layout } from "@/components"
import data from '../../data/data.json';
import { ProductCard } from '@ui';
import { Search } from '@ui';
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";

export default function ProductCategory() {

    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[2];
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredSearch, setFilteredSearch] = useState('');
    const [filterProccessors, setFilterProccessors] = useState<{ name: string, value: string, type: string }[]>([])
    const [filterMemory, setFilterMemory] = useState<{ name: string, price: string }[]>([])
    const [filterColor, setFilterColor] = useState<{ name: string, color: string, main: boolean}[]>([])
    const [filterPrice, setFilterPrice] = useState<string | undefined>()
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilteredSearch(e.currentTarget.value);
    };
    function comporatorByPrice(a : number, b : number){
        return a - b;
    } 
    useEffect(() => {
        let filteredData =
            isCategory.toLowerCase() !== 'all'
                ? data.filter((item) => item.category.toLowerCase() === isCategory.toLowerCase())
                : data;
    
            filteredData = filteredData.filter((item) =>
            item.name.replace(/\s/g, '').toLowerCase().includes(filteredSearch.replace(/\s/g, '').toLowerCase())
        );
    
        //filter by proccessor
        console.log(filteredData)
        if(filterProccessors.length > 0){
            console.log()
            filteredData = filteredData.filter((item) =>
                item.characteristics.some((char) =>
                    filterProccessors.some((filter) =>
                        char.name === filter.name && char.value === filter.value
                    )
                )
            );
        }
        //filter by memory
        if(filterMemory.length > 0){
            filteredData = filteredData.filter((item) =>
                item.modifications.some((char) =>
                    'name' in char && char.name !== undefined &&
                    filterMemory.some((filter) => char.name === filter.name)
                )
            );
        }
        
        //filter by color
        if(filterColor.length > 0){
            filteredData = filteredData.filter((item) =>
                item.images.some((char) =>
                    'name' in char && char.name !== undefined &&
                    filterColor.some((filter) => {
                        const extractedValue = char.name.split('/')[3];
                        return extractedValue && extractedValue === filter.name;
                    })
                )
            )
        }
        //filter by price
        if(filterPrice === 'lower'){
            filteredData = filteredData.sort((a , b) => Number(a.modifications[0].price) - Number(b.modifications[0].price))
        }
        if(filterPrice === 'higher'){
            filteredData = filteredData.sort((a , b) => Number(b.modifications[0].price) - Number(a.modifications[0].price))
        }
        
        setFilteredProducts(filteredData);
        console.log(filteredData);
        setCurrentPage(1);
        console.log(filteredData, filterColor, filterMemory, filterProccessors);
    }, [isCategory, filteredSearch, filterProccessors, filterMemory, filterColor, filterPrice]);

    const productsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const productsPagination = (newPage: SetStateAction<number>) => {
        setCurrentPage(newPage);
    };
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentItems = filteredProducts.slice(startIndex, endIndex);
    console.log(filteredProducts)
    return (
        <Layout>
            <div className="w-full px-2 sm:px-4 lg:px-10">
                <Search handleSearch={handleSearchChange} filterProccessors={filterProccessors} setFilterProccessors={setFilterProccessors} filterMemory={filterMemory} setFilterMemory={setFilterMemory} filterColor={filterColor} setFilterColor = {setFilterColor} setFilterPrice = {setFilterPrice}/>
                <div className="w-full grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-8 xl:gap-y-12 xl:gap-x-12 pt-16">
                    {currentItems.map((item) => (
                        <ProductCard item={item} />
                    ))}
                </div>
                {filteredProducts.length > productsPerPage && (
                    <div className="flex justify-center mt-12">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={`mx-2 px-4 py-2 border ${index + 1 === currentPage
                                        ? 'bg-text rounded-2xl'
                                        : 'bg-text-lightblue rounded-2xl'
                                    }`}
                                onClick={() => productsPagination(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}