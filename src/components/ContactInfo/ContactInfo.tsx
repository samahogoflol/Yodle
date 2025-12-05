
import { useForm } from 'react-hook-form';

const ContactInfo = () => {

    const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

    return (
         <div className="col-span-2 bg-[#80AAEF] rounded p-7">
                    <h2 className="text-[26px] font-semibold">Contact Info</h2>
                    <form 
                    onSubmit={handleSubmit((data) => console.log(data))}
                    className='pt-7 flex flex-col'
                    >
                        <div className='flex gap-[50px] pb-7 leading-[130%]'>
                            <input 
                            {...register('firstName')} 
                            className='bg-white px-3 py-4 w-full'
                            placeholder='First Name'
                            />
                            <input
                            {...register('lastName', { required: true })} 
                            className='bg-white px-3 py-4'
                            placeholder='Last Name'
                            />
                        </div>

                        <div className=' flex flex-col gap-7'>
                            <input 
                            {...register('phone number', { pattern: /\d+/ })} 
                            className='bg-white px-3 py-4'
                            placeholder='Phone Number'
                            />
                            <input 
                            {...register('email', { pattern: /\d+/ })} 
                            className='bg-white px-3 py-4'
                            placeholder='Email'
                            />
                        </div>
                    </form>       
                </div>
    )
}

export default ContactInfo;