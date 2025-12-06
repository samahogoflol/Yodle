import footerLogo from "../../assets/icons/logo_footer.png"

const Footer = () => {
return (
    <div className="bg-white grid grid-cols-3 w-full leading-[130%]">
        <div className="mt-[150px] mb-[150px] container">
            <a href="#">
                <img width={168} src={footerLogo} alt="Yodle logo" />
            </a>
        </div>
        <div className="mt-30">
            <nav>
                <ul className="flex flex-col gap-2">
                    <a href="#our-instructors">
                        <li className="hover:text-[#2E78E5]">Our instructors </li>
                    </a>
                    <a href="#how-to-book">
                        <li className="hover:text-[#2E78E5]">How to book</li>
                    </a>
                    <a href="#partners">
                        <li className="hover:text-[#2E78E5]">Partners</li>
                    </a>
                    <a href="#reviews">
                        <li className="hover:text-[#2E78E5]">Reviews</li>
                    </a>
                </ul>
            </nav>
        </div>
        <div className="mt-30">
            <nav>
                <ul>
                    <a href="tel:+4408762122213">
                        <li className="mb-[29px] hover:text-[#2E78E5]">+44 (0) 876 2122213</li>
                    </a>
                    <a href="#">
                        <li className="hover:text-[#2E78E5]">Privacy Policy</li>
                    </a>
                    <a href="#">
                        <li className="hover:text-[#2E78E5] mt-2">Public Offer </li>
                    </a>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Footer;