import { useForm } from "react-hook-form";

export function Form() {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
       // await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log(data);
    }
   
   // console.log(watch("firstName"));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-1 border-gray-700 w-full max-w-100">
            <div className=" flex flex-col w-full max-w-[440px] m-auto items-center my-4 space-y-4">
                <div className=" w-full max-w-[200px]">
                    <input className={` px-2 py-1 focus:outline-none  border ${errors.firstName ? 'border-red-500' : 'border-gray-700'}`} type="text" placeholder="Enter Your Name"
                        {...register('firstName',
                            {
                                required: { value: true, message: "Required" },
                                minLength: { value: 3, message: "minimum Length is 3" },
                                maxLength: { value: 20, message: "maximum Length is 20" }
                            }
                        )} />
                    {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                </div>

                <div className="w-full max-w-[200px]">
                    <input className={`px-2 py-1 border ${errors.Email ? 'border-red-500' : 'border-gray-700'}`} type="email" placeholder="Enter Your Email"
                        {...register('Email',
                            {
                                required: { value: true, message: "Required" },

                            }
                        )} />
                    {errors.Email && <p className="text-red-600">{errors.Email.message}</p>}
                </div>
                <div className="">
                    <textarea className={`px-2 border ${errors.messageBox ? 'border-red-500' : 'border-gray-700'}`} cols="23" rows="8" placeholder="Enter Your Message" {...register('messageBox',
                        {
                            required: { value: true, message: "Required" },
                            minLength: { value: 10, message: "write more..." }

                        }
                    )} />
                    {errors.messageBox && <p className="text-red-600">{errors.messageBox.message}</p>}
                </div>
                <div className="border border-gray-700 px-4 py-1">
                    <input type="submit" disabled={isSubmitting} value={isSubmitting?"Submitting...":"Submit"} />
                </div>
            </div>
        </form>
    )

}