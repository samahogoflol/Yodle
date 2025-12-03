import companyLogo from "../../assets/icons/yolde-logo.png"
import phoneIcon from "../../assets/icons/phone-icone.png"

import "../../styles/index.css"

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between px-10">
                <div>
                    <img src={companyLogo} alt="Our Company logotype" />
                </div>
                <nav>
                    <ul className="flex gap-6">
                        <li className="cursor-pointer hover:text-blue-400">Our instructors</li>
                        <li className="cursor-pointer hover:text-blue-400">How to book</li>
                        <li className="cursor-pointer hover:text-blue-400">Partners</li>
                        <li className="cursor-pointer hover:text-blue-400">Reviews</li>
                    </ul>
                </nav>
                <div className="flex items-center justify-end gap-2">
                    <img src={phoneIcon} alt="Contact with us" />
                    <span>+44 (0) 876 2122213</span>
                </div>
             </header>
        </>
    )
}

export default Header;