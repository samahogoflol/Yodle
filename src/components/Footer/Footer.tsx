import footerLogo from "../../assets/icons/logo_footer.png"
import { Link } from "react-router-dom";

const Footer = () => {
return (
    <div className="bg-white grid grid-cols-3 w-full leading-[130%]" >
        <div id="header" className= "mt-[150px] mb-[150px] container">
            <Link to="/#header">
                <img width={168} src={footerLogo} alt="Yodle logo" />
            </Link>
        </div>
        <div className="mt-30">
            <nav>
                <ul className="flex flex-col gap-2">
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
        </div>
        <div className="mt-30">
            <nav>
                <ul>
                    <a href="tel:+4408762122213">
                        <li className="mb-[29px] hover:text-[#2E78E5]">+44 (0) 876 2122213</li>
                    </a>
                    <Link to="privacyPolicy">
                        <li className="hover:text-[#2E78E5]">Privacy Policy</li>
                    </Link>
                    <Link to="publicOffer">
                        <li className="hover:text-[#2E78E5] mt-2">Public Offer </li>
                    </Link>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Footer;