import "../../styles/index.css"
import { Link, useLocation, useNavigate } from "react-router-dom" // 👈 ДОДАЛИ ХУКИ
import { HeaderCompanyLogo } from "../UI/Icons/HeaderCompanyLogo"
import { BurgerMenuIcon } from "../UI/Icons/BurgerMenuIcon"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { PersonIcon } from "../UI/Icons/PersonIcon"
import { useState } from "react"
import RegisterForm from "../../pages/Auth/components/RegisterForm"
import LoginForm from "../../pages/Auth/components/LogInForm"
import { ArrowBack } from "../UI/Icons/ArrowBack"


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState<"login" | "register" | null>(null)
    const location = useLocation()
    const navigate = useNavigate()
    
    const isMainPage = location.pathname === "/"

    const closeModal = () => setModalType(null)

    return (
        <header id="header" className="flex items-center justify-between px-4 md:px-10 leading-[130%] bg-white w-full relative">
            <div className="block md:hidden">
                {isMainPage ? (
                    <>
                        <button 
                            className={`${isOpen ? "text-[#2E78E5]" : ""}`}
                            onClick={() => setIsOpen(!isOpen)}>
                            <BurgerMenuIcon />
                        </button>
                        <BurgerMenu
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                        />
                    </>
                ) : (
                    <button 
                        className="flex items-center justify-center p-1 cursor-pointer"
                        onClick={() => void navigate(-1)} 
                    >
                        <ArrowBack 
                            width="30" 
                            height="30"
                        />
                    </button>
                )}
            </div>

            <div className="text-[#2E78E5]">
                <Link to="/">
                    <HeaderCompanyLogo/>
                </Link>
            </div>
            
            <div 
                className="block md:hidden text-black cursor-pointer"
                onClick={() => {
                    setModalType("register");
                    setIsOpen(false);
                }}
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
            
            <div className="hidden md:flex items-center justify-end gap-10">
                <a className="hover:text-blue-400" href="tel:+4408762122213">+1 916 690 1778</a>
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