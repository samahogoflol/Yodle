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
        <div className="bg-[#80AAEF] rounded p-7">
            <h2 className="text-[26px] font-semibold pb-6 leading-[130%]">Payment Details</h2>
            <div className=" flex flex-col">
                <h2>Please enter your credit card information to complete the booking</h2>
                <form 
                onSubmit={handleSubmit((data) => console.log(data))}
                className=''
                >
            <div className='gap-6 flex flex-col pt-6'>
                <div>
                    <div className="relative">
                        <input
                        {...register("nameACard")}
                        placeholder=" "
                        className=" peer bg-white pl-3 pr-21 py-5 border-[0.5px] border-none"
                        />
                        <label className="absolute left-3 top-2.5 text-gray-400 transition-all
                        peer-placeholder-shown:top-5
                        peer-placeholder-shown:text-base
                        peer-focus:top-2
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
                        className=' peer bg-white pl-3 pr-21 py-5 border-[0.5px] border-none'
                        placeholder=' '
                        {...register("cardNumber")} 
                        />
                        <label className="absolute left-3 top-2.5 text-gray-400 transition-all
                        peer-placeholder-shown:top-5
                        peer-placeholder-shown:text-base
                        peer-focus:top-2
                        peer-focus:text-sm
                        peer-focus:opacity-100
                        peer-not-placeholder-shown:opacity-0
                        ">
                        Card number
                        </label>
                        {errors.cardNumber && (
                            <p className='text-red-600'>{errors.cardNumber.message}</p>
                        )}
                        </div>
                    </div>
                <div className="flex">
                    <div className="relative">
                        <Controller
                        name="expirationDate"
                        control={control}
                        render={({ field }) => (
                            <PatternFormat
                            {...field}
                            format="##/##"
                            placeholder=" "
                            className="peer bg-white pl-3 py-5 border-[0.5px] border-none w-4/5"
                            />
                        )}
                        />

                        <label
                        className="
                            absolute left-3 top-1/2 -translate-y-1/2
                            text-gray-400 pointer-events-none
                            transition-all
                            peer-placeholder-shown:top-1/3
                            peer-placeholder-shown:text-base
                            peer-focus:top-2
                            peer-focus:text-sm
                            peer-focus:opacity-100
                            peer-not-placeholder-shown:opacity-0
                        "
                        >
                        MM / YY
                        </label>

                        {errors.expirationDate && (
                        <p className="text-red-600 mt-1 max-w-[200px]">
                            {errors.expirationDate.message}
                        </p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                        {...register("cvv")}
                        placeholder=" "
                        className="peer bg-white pl-3 py-5 border-[0.5px] border-none w-4/10"
                        maxLength={4}
                        />
                        <label
                        className="
                            absolute left-3 top-1/2 -translate-y-1/2
                            text-gray-400 pointer-events-none
                            transition-all
                            peer-placeholder-shown:top-1/3
                            peer-placeholder-shown:text-base
                            peer-focus:top-2
                            peer-focus:text-sm
                            peer-focus:opacity-100
                            peer-not-placeholder-shown:opacity-0
                        "
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