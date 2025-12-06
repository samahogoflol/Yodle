import companyLogo from "../../assets/icons/yolde-logo.png"

import "../../styles/index.css"

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between px-10">
                <div>
                    <a href="#">
                        <img src={companyLogo} alt="Our Company logotype" />
                    </a>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        <a href="#our-instructors">
                            <li className="cursor-pointer hover:text-blue-400 font-urbanist">Our instructors</li>    
                        </a>
                        <a href="#how-to-book">
                            <li className="cursor-pointer hover:text-blue-400">How to book</li>
                        </a>
                        <a href="#partners">
                            <li className="cursor-pointer hover:text-blue-400">Partners</li>
                        </a>
                        <a href="#reviews">
                            <li className="cursor-pointer hover:text-blue-400">Reviews</li>
                        </a>
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