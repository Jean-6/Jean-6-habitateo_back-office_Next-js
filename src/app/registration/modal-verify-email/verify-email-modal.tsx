"use client";
import React, {} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {SchemaCodeAfterRegistration} from "@/lib/schema/schema-code-after-registration";

type Inputs = z.infer<typeof SchemaCodeAfterRegistration>



const VerifyUserEmailHook = () =>{

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(SchemaCodeAfterRegistration)
    })
    const verifyEmailByCodeForm: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    return (
            <div className="bg-white p-2 rounded">
                <div>
                    <img className="mx-auto h-12 w-auto"
                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Verification
                        Email</h2>
                    {<p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Se connecter
                        </a>
                    </p>}
                </div>
                <div className="py-4">
                    <form onSubmit={handleSubmit(verifyEmailByCodeForm)} className="space-y-3">
                        <div>
                            <label htmlFor="code"></label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="code" type="text" placeholder="Code" {...register('code')}/>
                            {errors.code?.message && (
                                <p className='mt-2 text-sm text-red-400'>
                                    {errors.code.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3"> </span>Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>);
}


class VerifyUserEmailModal extends React.Component <{ isVisible: any, onClose: any }> {

    render(){
        let {isVisible, onClose} = this.props;

        if (!isVisible) return null;
        const handleClose = (e: any) => {
            if (e.target.id === 'wrapper') onClose();
        }
        return(
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}> X</button>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
                 id="wrapper" onClick={handleClose}>
                <VerifyUserEmailHook ></VerifyUserEmailHook>
            </div>
            </div>
        )
    }


}

export default VerifyUserEmailModal;

