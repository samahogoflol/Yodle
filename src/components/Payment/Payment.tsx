import { useForm } from 'react-hook-form';
import { paymentInfoSchema } from '../validation/schmas';
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
            <h2 className="text-[26px] font-semibold pb-6">Payment</h2>
            <div className="bg-white flex flex-col p-4">
                <h2>Add new card</h2>
                <form 
                onSubmit={handleSubmit((data) => console.log(data))}
                className='p-4'
                >
                    <div className='gap-3 flex flex-col'>
                        <div>
                            <input 
                            {...register("nameACard")} 
                            className='bg-white pl-3 pr-21 py-5 border-[0.5px] border-[#727272]' 
                            placeholder='Name a card'
                            />
                            {errors.nameACard && (
                                <p className='text-red-600'>{errors.nameACard.message}</p>
                            )}
                        </div>
                        <div>
                            <input 
                            className='bg-white pl-3 pr-21 py-5 border-[0.5px] border-[#727272]'
                            placeholder='Card number'
                            {...register("cardNumber")} 
                            />
                            {errors.cardNumber && (
                                <p className='text-red-600'>{errors.cardNumber.message}</p>
                            )}
                        </div>
                        <div className='flex'>
                            <div>
                                <Controller
                                    name="expirationDate"
                                    control={control}
                                    render={({ field }) => (
                                        <PatternFormat
                                            {...field}
                                            format="##/##" 
                                            className='bg-white pl-3 py-5 border-[0.5px] border-[#727272] w-4/5' 
                                            placeholder='MM / YY' 
                                        />
                                    )}
                                />
                                {errors.expirationDate && (
                                    <p className='text-red-600 mt-1 text-sm'>{errors.expirationDate.message}</p>
                                )}
                            </div>
                            <div>
                                <input
                                className='bg-white pl-3 py-5 border-[0.5px] border-[#727272] w-4/10' 
                                placeholder='CVV' 
                                {...register("cvv")} 
                                /> 
                                {errors.cvv && (
                                    <p className='text-red-600'>{errors.cvv.message}</p>
                                )}
                            </div> 
                        </div>
                    </div>
                    
                        {/* Поки тут видалив кнопку, можливо потім буде додана */}
                        
                    {/* <div>
                        <button
                        className='px-5 py-1.5 bg-[#EA4300] text-white'
                        type='button'
                        >
                            Add
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Payment;