
import { useForm } from 'react-hook-form';
import { contactInfoSchema } from '../validation/secureChekoutSchmas';
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
         <div className="col-span-2  bg-[#80AAEF] rounded p-4 md:p-7">
            <h2 className="text-[22px] md:text-[26px] md:font-semibold leading-[120%]">Contact Info</h2>
            <form 
                onSubmit={handleSubmit((data) => console.log(data))}
                className='pt-4 md:pt-7 flex flex-col'
            >
            <div className='flex flex-col md:grid md:grid-cols-2 gap-7 pb-7 leading-[130%]'>
                <div>
                    <div className='relative'>
                        <input
                            id='firstName'
                            {...register('firstName')} 
                            className='peer bg-white px-3 py-4 w-full'
                            placeholder=' '
                        />
                            <label 
                                htmlFor='firstName'
                                className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                                peer-placeholder-shown:top-4
                                peer-placeholder-shown:text-base
                                peer-focus:top-0
                                peer-focus:text-sm
                                peer-focus:opacity-100
                                peer-not-placeholder-shown:opacity-0
                                "
                            >
                                First Name
                            </label>
                    </div>
                    {errors.firstName && (
                        <p className='text-red-600'>{errors.firstName.message}</p>
                    )}
                </div>
                <div>
                    <div className='relative'>
                        <input
                            id='lastName'
                            {...register('lastName')}
                            className='peer bg-white px-3 py-4 w-full'
                            placeholder=' '
                        />
                            <label 
                                htmlFor='lastName'
                                className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                                peer-placeholder-shown:top-4
                                peer-placeholder-shown:text-base
                                peer-focus:top-0
                                peer-focus:text-sm
                                peer-focus:opacity-100
                                peer-not-placeholder-shown:opacity-0
                                "
                            >
                                Last Name
                            </label>
                    </div>
                    {errors.lastName && (
                        <p className='text-red-600 mt-1'>{errors.lastName.message}</p>
                    )}
                           </div> 
                        </div>
                    <div className=' flex flex-col gap-7'>
                        <div className='relative'>
                            <input
                                id='phoneNumber'
                                {...register('phoneNumber')} 
                                className='peer bg-white px-3 py-4 w-full'
                                placeholder=' '
                            />
                                <label 
                                    htmlFor='phoneNumber'
                                    className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                                    peer-placeholder-shown:top-4
                                    peer-placeholder-shown:text-base
                                    peer-focus:top-0
                                    peer-focus:text-sm
                                    peer-focus:opacity-100
                                    peer-not-placeholder-shown:opacity-0"
                                >
                                        Phone Number
                                </label>
                        </div>
                        {errors.phoneNumber && (
                            <p className='text-red-600 mt-1'>{errors.phoneNumber.message}</p>
                        )}
                        <div className='relative'>
                            <input
                                id='email' 
                                {...register('email')} 
                                className='peer bg-white px-3 py-4 w-full'
                                placeholder=' '
                            />
                                <label 
                                    htmlFor='email'
                                    className="absolute left-3 top-2.5 md:text-gray-400 transition-all
                                    peer-placeholder-shown:top-4
                                    peer-placeholder-shown:text-base
                                    peer-focus:top-0
                                    peer-focus:text-sm
                                    peer-focus:opacity-100
                                    peer-not-placeholder-shown:opacity-0"
                                >
                                    Email
                                </label>
                        {errors.email && (
                            <p className='text-red-600 mt-1'>{errors.email.message}</p>
                        )}
                    </div> 
                </div>
            </form>       
        </div>
    )
}

export default ContactInfo;