import { Link } from "react-router-dom"
import "../../styles/index.css"
import { HeaderCompanyLogo } from "../UI/Icons/HeaderCompanyLogo"

const Header = () => {
    return (
        <>
            <header id="header" className="flex items-center justify-between px-10 leading-[130%] bg-white w-full">
                <div className="text-[#2E78E5]">
                    <Link to="/">
                       <HeaderCompanyLogo/>
                    </Link>
                </div>
                <nav >
                    <ul className="flex gap-6">
                        <Link to="/#our-instructors">
                            <li className="cursor-pointer hover:text-blue-400">Our instructors</li>    
                        </Link>
                        <Link to="/#how-to-book">
                            <li className="cursor-pointer hover:text-blue-400">How to book</li>
                        </Link>
                        <Link to="/#partners">
                            <li className="cursor-pointer hover:text-blue-400">Partners</li>
                        </Link>
                        <Link to="/#reviews">
                            <li className="cursor-pointer hover:text-blue-400">Reviews</li>
                        </Link>
                    </ul>
                </nav>
                <div className="flex items-center justify-end gap-2">
                    <a className="hover:text-blue-400" href="tel:+4408762122213">+44 (0) 876 2122213</a>
                </div>
             </header>
        </>
    )
}

export default Header;