import { Link } from "react-router-dom";

import page404BG from "../../assets/images/404BG.png"
import { Digit4 } from "../../components/UI/Icons/Digit4";
import { Snow404 } from "../../components/UI/Icons/Snow404";
import ButtonSearchInstruktor from "../../components/UI/ButtonSearchInstructor";


const Page404 = () => {
    return (
        <>  
            <div className="relative flex justify-center text-center leading-[130%]">
                <div className="pt-4">
                </div>
                <img src={page404BG} alt="That 404 page z-0" />
                <div className="flex flex-col justify-center items-center absolute mt-[170px]"> 
                    <div className="flex items-center">
                        <div>
                            <Digit4/>
                        </div>
                        <div>
                            <Snow404/>
                        </div>
                        <div>
                            <Digit4/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-[56px] font-semibold leading-[100%]">Oops! You've gone off-piste!</p>
                        <p className="text-[26px] font-semibold">Looks like this trail doesn't exist...</p>
                        <p className="text-[20px]">The page you're looking for took a wrong turn down the mountain.</p>
                    </div>
                    <Link to="/">
                        <div className="flex justify-center">
                            <ButtonSearchInstruktor
                            name="Back to Home"
                            onClick={() => null}
                            className="mt-6"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </>
       
    )
}

export default Page404;