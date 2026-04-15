import { useState } from "react";
import { MinusIcon, PlusIcon } from "../UI/Icons/MinusAndPlus";
import { ButtonApply } from "../UI/ButtonApply";
import { promocodeSchema } from "../validation/promocodeSchema";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SuccessIcon } from "../UI/Icons/SuccessIcon";
import z from "zod";

type PromocodeFormValues = z.infer<typeof promocodeSchema>;

export const PromocodeButton = () => {

    const [isActive, setIsActive] = useState(false);
    const [promoIsSuccess, setPromoIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(promocodeSchema),
        mode: "onSubmit" 
    });

    const onSubmit = (data: PromocodeFormValues) => {
        console.log("Валідний промокод введено:", data.promocode)
        setPromoIsSuccess(true)
    };

    const handleCancelPromo = () => {
        setPromoIsSuccess(false);
        resetField("promocode")
    }

    const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    void handleSubmit(onSubmit)(e);
    };

    return (
        <div className={`${isActive ? "pb-5 " : "block"} flex flex-col gap-5 pb-5`}>
             <div 
                onClick={() => {
                    setIsActive(prev => !prev)
                }}
                className={`${isActive ? "hidden" : "block"} bg-[#80AAEF] flex items-center justify-between p-4 md:p-7 rounded cursor-pointer transition-all`}
             >
                <h5 className={`text-[20px] leading-[130%] opacity-60`}>
                    Have a promo code?
                </h5>
                <PlusIcon className="opacity-60"/>
            </div>

            {isActive && (
                <div className="bg-[#80AAEF] p-4 md:p-7 rounded">
                    <div>
                        <div className="flex items-baseline justify-between">
                            <h5 className="text-[22px] leading-[120%] pb-4 md:pb-5">Promo code</h5>
                            <div className="pb-1 cursor-pointer" onClick={() => setIsActive(false)}>
                                <MinusIcon/>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-5 relative">
                                <input
                                    disabled={promoIsSuccess}
                                    {...register("promocode")}
                                    id="promoCode"
                                    type="text" 
                                    placeholder=" "
                                    className=" peer bg-white pl-3 pr-21 py-5 border-[0.5px] border-none w-full"
                                />
                                {promoIsSuccess && (
                                        <div  className="absolute top-5 right-30 ">
                                            <SuccessIcon/>
                                        </div>
                                    )}
                                <label 
                                    htmlFor="promoCode"
                                    className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                                    peer-placeholder-shown:top-5
                                    peer-placeholder-shown:text-base
                                    peer-focus:top-0
                                    peer-focus:text-sm
                                    peer-focus:opacity-100
                                    peer-not-placeholder-shown:opacity-0"
                                >
                                    Enter your promo code
                                </label>
                                {!promoIsSuccess ? (
                                    <ButtonApply
                                        name="Apply"
                                        type="button" 
                                        onClick={handleApplyClick} 
                                    />
                                ) : (
                                    <ButtonApply
                                        name="Cancel"
                                        type="button" 
                                        onClick={handleCancelPromo}
                                    />
                                )}
                               
                            </div>
                            {errors.promocode && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.promocode.message as string}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}