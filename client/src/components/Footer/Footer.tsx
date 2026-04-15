import { Link } from "react-router-dom";
import { FooterCompanyLogo } from "../UI/Icons/FooterCompanyLogo";

const Footer = () => {
return (
    <div className="pb-15 md:pb-0 text-center md:text-left bg-white flex flex-col md:grid md:grid-cols-4 w-full leading-[130%]" >
        <div id="header" className= "flex justify-center md:justify-start mt-15.5 md:mt-[150px] mb-5 md:mb-[150px] md:pl-12 text-[#2E78E5]">
            <Link to="/#header">
               <FooterCompanyLogo/>
            </Link>
        </div>
        <div className="md:hidden">
            <a href="tel:+4408762122213" className="block mb-5 hover:text-[#2E78E5]">
                +1 916 690 1778
            </a>
        </div>  
        <div className="md:mt-30">
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
        <div className="mt-5 md:mt-30 flex justify-center md:justify-start">
            <nav className="">
                <ul>
                     <Link to="privacyPolicy">
                        <li className="hover:text-[#2E78E5]">Privacy Policy</li>
                    </Link>
                    <Link to="publicOffer">
                        <li className="hover:text-[#2E78E5] mt-2">Public Offer </li>
                    </Link>
                </ul>
            </nav>
        </div>
        <div className="hidden md:block mt-30">
            <nav>
                <ul>
                    <a href="tel:+4408762122213">
                        <li className="mb-[29px] hover:text-[#2E78E5]">+1 916 690 1778</li>
                    </a>
                </ul>
            </nav>
        </div>     
    </div>
    )
}

export default Footer;