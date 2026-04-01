import "../../styles/index.css"
import { Link } from "react-router-dom"
import { HeaderCompanyLogo } from "../UI/Icons/HeaderCompanyLogo"
import { BurgerMenuIcon } from "../UI/Icons/BurgerMenuIcon"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { PersonIcon } from "../UI/Icons/PersonIcon"
import { useState } from "react"
import RegisterForm from "../../pages/Auth/components/RegisterForm"
import LoginForm from "../../pages/Auth/components/LogInForm"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState<"login" | "register" | null>(null)

    const closeModal = () => setModalType(null)

    return (
        <header id="header" className="flex items-center justify-between px-4 md:px-10 leading-[130%] bg-white w-full relative">
            <div className="block md:hidden">
                <div className="block md:hidden">
                    <button 
                        className={`${isOpen ? "text-[#2E78E5]" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}>
                        <BurgerMenuIcon />
                    </button>
                </div>
                <BurgerMenu
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </div>
            <div className="text-[#2E78E5]">
                <Link to="/">
                    <HeaderCompanyLogo/>
                </Link>
            </div>
            
            {/* Мобільна іконка */}
            <div 
                className="block md:hidden text-black cursor-pointer"
                onClick={() => setModalType("register")}
            >
                <PersonIcon
                    height="25px"
                    width="25px"
                    viewBox="0 0 20 20"
                />
            </div>
            
            <nav className="hidden md:flex" >
                <ul className="flex gap-6">
                    <Link to="/#our-instructors">
                        <li className="cursor-pointer hover:text-[#2E78E5]">Our instructors</li>    
                    </Link>
                    <Link to="/#how-to-book">
                        <li className="cursor-pointer hover:text-[#2E78E5]">How to book</li>
                    </Link>
                    <Link to="/#partners">
                        <li className="cursor-pointer hover:text-[#2E78E5]">Partners</li>
                    </Link>
                    <Link to="/#reviews">
                        <li className="cursor-pointer hover:text-[#2E78E5]">Reviews</li>
                    </Link>
                </ul>
            </nav>
            
            {/* Десктопна права частина */}
            <div className="hidden md:flex items-center justify-end gap-10">
                <a className="hover:text-blue-400" href="tel:+4408762122213">+44 (0) 876 2122213</a>
                <button
                    type="button" 
                    onClick={() => setModalType("register")}
                    className="hidden md:block text-black cursor-pointer">
                    <PersonIcon
                        height="25px"
                        width="25px"
                        viewBox="0 0 20 20"
                    />
                </button>
            </div>

            {/* ВИНЕСЛИ МОДАЛКИ СЮДИ — тепер вони не приховані класом hidden! */}
            {modalType === "register" && (
                <RegisterForm 
                    onSuccess={(email) => {
                        console.log("Registered:", email)
                        closeModal()
                    }}
                    onClose={closeModal}
                    onSwitchMode={() => setModalType("login")}
                />
            )}

            {modalType === "login" && (
                <LoginForm 
                    onSuccess={(email) => {
                        console.log("Logged in:", email)
                        closeModal()
                    }}
                    onClose={closeModal}
                    onSwitchMode={() => setModalType("register")}
                />
            )}
        </header>
    )
}

export default Header;