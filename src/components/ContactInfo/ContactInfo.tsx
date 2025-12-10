
import { useForm } from 'react-hook-form';
import { contactInfoSchema } from '../validation/schmas';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactInfo = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver : zodResolver(contactInfoSchema),
    mode : 'onBlur'
  });

    return (
         <div className="col-span-2 bg-[#80AAEF] rounded p-7">
                    <h2 className="text-[26px] font-semibold">Contact Info</h2>
                    <form 
                    onSubmit={handleSubmit((data) => console.log(data))}
                    className='pt-7 flex flex-col'
                    >
                        <div className='grid grid-cols-2 gap-7 pb-7 leading-[130%]'>
                            <div>
                                <input 
                                {...register('firstName')} 
                                className='bg-white px-3 py-4 w-full'
                                placeholder='First Name'
                                />
                                {errors.firstName && (
                                    <p className='text-red-600'>{errors.firstName.message}</p>
                                )}
                            </div>
                           <div>
                                <input
                                {...register('lastName')}
                                className='bg-white px-3 py-4 w-full'
                                placeholder='Last Name'
                                />
                                {errors.lastName && (
                                    <p className='text-red-600 mt-1'>{errors.lastName.message}</p>
                                )}
                           </div> 
                        </div>

                        <div className=' flex flex-col gap-7'>
                            <input 
                            {...register('phoneNumber')} 
                            className='bg-white px-3 py-4'
                            placeholder='Phone Number'
                            />
                            {errors.phoneNumber && (
                                <p className='text-red-600 mt-1'>{errors.phoneNumber.message}</p>
                            )}
                            <input 
                            {...register('email')} 
                            className='bg-white px-3 py-4'
                            placeholder='Email'
                            />
                             {errors.email && (
                                <p className='text-red-600 mt-1'>{errors.email.message}</p>
                            )}
                        </div>
                    </form>       
                </div>
    )
}

export default ContactInfo;