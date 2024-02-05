import Link from "next/link"
import { Icon } from '@iconify/react';
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
    const handleSearchChange = (e : ChangeEvent<HTMLInputElement>) => {
        setFilteredSearch(e.currentTarget.value);
        console.log(filteredSearch)
      };
    
      useEffect(() => {
        const filteredByCategory =
          isCategory.toLowerCase() !== 'all'
            ? data.filter((item) => item.category.toLowerCase() === isCategory.toLowerCase())
            : data;
        const filteredBySearch =
          filteredByCategory.filter((item) =>
            item.name.replace(/\s/g, '').toLowerCase().includes(filteredSearch.replace(/\s/g, '').toLowerCase())
          ) || [];
    
        setFilteredProducts(filteredBySearch);
        setCurrentPage(1);
      }, [isCategory, filteredSearch]);
    
      const productsPerPage = 8;
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
      const productsPagination = (newPage: SetStateAction<number>) => {
        setCurrentPage(newPage);
      };
    
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const currentItems = filteredProducts.slice(startIndex, endIndex);
    
      return (
        <Layout>
          <div className="w-full px-2 sm:px-4 lg:px-10">
            <Search handleSearch ={handleSearchChange}/>
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
                    className={`mx-2 px-4 py-2 border ${
                      index + 1 === currentPage
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