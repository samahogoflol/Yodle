import { useForm } from 'react-hook-form';

const Payment = () => {

    const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

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
                            className='bg-white px-3 py-4 border-[0.5px] border-[#727272] w-full' 
                            placeholder='Name a card'
                            {...register('firstName')} 
                            />
                        </div>
                        <div>
                            <input 
                            className='bg-white px-3 py-4 border-[0.5px] border-[#727272] w-full' 
                            placeholder='Card number'
                            {...register('lastName', { required: true })} />
                        </div>
                    </div>
                    
                    <div className='flex gap-12 py-3'>
                        <input
                        className='bg-white px-3 py-4 border-[0.5px] border-[#727272] w-full' 
                        placeholder='MM / YY' 
                        {...register('age', { pattern: /\d+/ })} /> 
                        <input
                        className='bg-white px-3 py-4 border-[0.5px] border-[#727272] w-full' 
                        placeholder='CVV' 
                        {...register('age', { pattern: /\d+/ })} /> 
                    </div>

                    <div>
                        <button
                        className='px-5 py-1.5 bg-[#EA4300] text-white'
                        type='button'
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment;