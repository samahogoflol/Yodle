import "../../styles/index.css"
import { Link } from "react-router-dom"
import { HeaderCompanyLogo } from "../UI/Icons/HeaderCompanyLogo"
import { BurgerMenuIcon } from "../UI/Icons/BurgerMenuIcon"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { PersonIcon } from "../UI/Icons/PersonIcon"
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header id="header" className="flex items-center justify-between px-4 md:px-10 leading-[130%] bg-white w-full">
            <div className="block md:hidden">
                <div
                    onClick={() =>setIsOpen(true)}
                    
                >
                    <BurgerMenu
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                    />
                    <div className={`${isOpen ? "text-blue-400" : "text-black"}`}>
                        <BurgerMenuIcon/>
                    </div>
                </div>
            </div>
            <div className="text-[#2E78E5]">
                <Link to="/">
                    <HeaderCompanyLogo/>
                </Link>
            </div>
            <div className="block md:hidden text-black">
                <PersonIcon
                    height="25px"
                    width="25px"
                    viewBox="0 0 20 20"
                />
            </div>
            <nav className="hidden md:flex" >
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
                    {/* <Link to="/login">
                        <li>Log In</li>
                    </Link>
                    <Link to="/register">
                        <li>Sign In</li>
                    </Link> */}
                </ul>
            </nav>
            <div className="hidden md:flex items-center justify-end gap-10">
                <a className="hover:text-blue-400" href="tel:+4408762122213">+44 (0) 876 2122213</a>
                <div className="hidden md:block text-black">
                    <PersonIcon
                    height="25px"
                    width="25px"
                    viewBox="0 0 20 20"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;