import { useState } from "react"

export const PromocodeButton = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={`${isActive? "pb-5" : ""} flex flex-col gap-5 pb-5`}>
             <div 
                onClick={()=>setIsActive(prev => !prev)}
                className="bg-[#80AAEF] flex items-center justify-between p-4 rounded cursor-pointer"
             >
                <h5 className="text-[20px] leading-[130%] opacity-60">
                    Have a promocode?
                </h5>
                <span className="text-[22px] opacity-60">+</span>
            </div>

            {isActive && (
                <div className="bg-[#80AAEF] p-4 rounded">
                    <form action="submit">
                        <h5 className="text-[22px] leading-[120%] pb-4">Promocode</h5>
                        <input 
                            type="text" 
                            placeholder="Enter your code here"
                            className="py-5 px-3 bg-white w-full"
                        />
                    </form>
                </div>
            )}
        </div>
    )
}