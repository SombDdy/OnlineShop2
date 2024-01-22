import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import Bag from "../Bag/Bag";
import { useRouter } from "next/router";
interface LayoutProps {
    children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[1];
    const isBasket: boolean = path.split('/')[1] === 'basket';
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className={`w-full md2:h-screen md2:overflow-y-scroll ${isBasket ? 'md2:mr-[28vw]' : !!isCategory ? 'mr-0 md2:mr-[19vw]' : 'mr-0'} lg:w-full bg-bg-body`}>
                    <div className = "my-10">
                    <Search />
                    {children}
                    </div>
                </div>
                <div className = {`${!!isCategory ? `hidden md2:flex fixed` : `hidden`} w-1/5`}>
                <Bag/>
                </div>
            </div>
            <div className = "flex md2:hidden">
                <Bag/>
            </div>
            <Footer />
        </>
        
    )
}