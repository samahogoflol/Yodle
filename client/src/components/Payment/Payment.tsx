import { useForm } from 'react-hook-form';
import { paymentInfoSchema } from '../validation/secureChekoutSchmas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

const Payment = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver : zodResolver(paymentInfoSchema),
    mode : "onBlur"
  });

    return (
        <div className="bg-[#80AAEF] rounded p-4 md:p-7">
            <h2 className="text-[22px] md:text-[26px] md:font-semibold pb-4 md:pb-6 leading-[130%]">Payment Details</h2>
            <div className="flex flex-col">
                <h2 className='font-normal text-[18px] leading-[120%]'>Please enter your credit card information to complete the booking</h2>
                <form 
                onSubmit={handleSubmit((data) => console.log(data))}
                className=''
                >
            <div className='gap-5 md:gap-6 flex flex-col pt-4 md:pt-6 '>
                <div>
                    <div className="relative">
                        <input
                        id='cardName'
                        {...register("nameACard")}
                        placeholder=" "
                        className=" peer bg-white pl-3 pr-21 py-5 border-[0.5px] border-none w-full"
                        />
                        <label 
                        htmlFor='cardName'
                        className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                        peer-placeholder-shown:top-5
                        peer-placeholder-shown:text-base
                        peer-focus:top-0
                        peer-focus:text-sm
                        peer-focus:opacity-100
                        peer-not-placeholder-shown:opacity-0
                        ">
                        Name on card
                        </label>
                    </div>

                    {errors.nameACard && (
                        <p className="text-red-600 text-sm mt-1">
                        {errors.nameACard.message}
                        </p>
                    )}
                </div>
                    <div>
                        <div className='relative'>
                        <input 
                        id='cardNumber'
                        className=' peer bg-white pl-3 pr-21 py-5 border-[0.5px] border-none w-full'
                        placeholder=' '
                        {...register("cardNumber")} 
                        />
                        <label 
                            htmlFor='cardNumber'
                            className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                            peer-placeholder-shown:top-5
                            peer-placeholder-shown:text-base
                            peer-focus:top-0
                            peer-focus:text-sm
                            peer-focus:opacity-100
                            peer-not-placeholder-shown:opacity-0
                            "
                        >
                        Card number
                        </label>
                        {errors.cardNumber && (
                            <p className='text-red-600'>{errors.cardNumber.message}</p>
                        )}
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="relative w-1/2">
                            <Controller
                            name="expirationDate"
                            control={control}
                            render={({ field }) => (
                                <PatternFormat
                                {...field}
                                id='date'
                                format="##/##"
                                placeholder=" "
                                className="peer bg-white px-3 py-5 w-full"
                                />
                            )}
                            />

                        <label
                            htmlFor='date'
                            className="absolute left-3 top-1/2 -translate-y-1/2 md:text-gray-400 pointer-events-none
                                transition-all
                                peer-placeholder-shown:top-1/3
                                peer-placeholder-shown:text-base
                                peer-focus:top-2
                                peer-focus:text-sm
                                peer-focus:opacity-100
                                peer-not-placeholder-shown:opacity-0"
                        >
                        MM / YY
                        </label>
                        {errors.expirationDate && (
                        <p className="text-red-600 mt-1 max-w-[200px]">
                            {errors.expirationDate.message}
                        </p>
                        )}
                        </div>
                        <div className="relative w-1/3">
                            <input
                            id='cvv'
                            {...register("cvv")}
                            placeholder=" "
                            className="peer bg-white pl-3 py-5 border-[0.5px] border-none w-full"
                            maxLength={4}
                            />
                            <label
                                htmlFor='cvv'
                                className="absolute left-3 top-1/2 -translate-y-1/2 md:text-gray-400 pointer-events-none
                                transition-all
                                peer-placeholder-shown:top-1/3
                                peer-placeholder-shown:text-base
                                peer-focus:top-2
                                peer-focus:text-sm
                                peer-focus:opacity-100
                                peer-not-placeholder-shown:opacity-0"
                            >
                                CVV
                            </label>
                        {errors.cvv && (
                            <p className="text-red-600 max-w-[100px] mt-1">
                                {errors.cvv.message}
                            </p>
                        )}
                        </div>
                </div>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Payment;