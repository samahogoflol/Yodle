import { Link } from "react-router-dom";
import { useWindowWidth } from "../../utilities/customHooks/useWindowWidth";

import page404BG from "../../assets/images/404BG.png"
import { Digit4 } from "../../components/UI/Icons/Digit4";
import { Snow404 } from "../../components/UI/Icons/Snow404";
import Header from "../../components/Header/Header";
import ButtonSearchInstruktor from "../../components/UI/ButtonSearchInstructor";


const Page404 = () => {

    const {isMobile} = useWindowWidth()

    return (
        <>  
            {isMobile && (<div className="mt-6.5"><Header/></div>)}
            <div className="relative flex justify-center text-center leading-[130%]">
                <img src={page404BG} className="w-full h-screen object-cover" alt="That 404 page z-0" />
                <div className="px-3.5 flex flex-col justify-center items-center absolute mt-[170px]"> 
                    <div className="flex items-center gap-1">
                        <div>
                            <Digit4
                                className="w-15 md:w-35"
                            />
                        </div>
                        <div>
                            <Snow404 
                                className="w-25 md:w-65"    
                            />
                        </div>
                        <div>
                            <Digit4
                                className="w-15 md:w-35"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-6">
                        <span className="md:hidden text-[38px] leading-[100%] mt-5">Oops!</span>
                        <span className="md:hidden text-[38px] leading-[100%] mb-5">You've gone off-piste!</span>
                        <span className="hidden md:block text-[56px] font-semibold leading-[100%]">Oops! You've gone off-piste!</span>
                        <span className="text-[22px] mb-5 md:mb-0 md:text-[26px] md:font-semibold leading-[120%]">Looks like this trail doesn't exist...</span>
                        <span className="px-9 md:px-0 text-[16px] md:text-[20px] leading-[120%]">The page you're looking for took a wrong turn down the mountain.</span>
                    </div>
                   <Link to="/" className="w-full md:w-auto mt-7.5 block">
                        <ButtonSearchInstruktor
                            name="Back to Home"
                            onClick={() => null}
                            className="w-full"
                        />
                    </Link>
                </div>
            </div>
        </>
       
    )
}

export default Page404;