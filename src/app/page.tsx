"use client"
import React from "react";
import {z} from "zod";
import {SchemaLogin} from "@/lib/schema/schema-login";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {router} from "next/client";

type Inputs = z.infer<typeof SchemaLogin>


export default function LoginForm () {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Inputs>({
        resolver: zodResolver(SchemaLogin)
    })
    const loginForm: SubmitHandler<Inputs> = async( data) => {
        try{
            console.log(data)
            const res = await axios({
                method: "POST",
                data:{
                    email:data.email,
                    password:data.password,
                },
                url: 'https://habitateo-api-dda29971e4d9.herokuapp.com/api/v1/auth/login'
            }).then(token =>{
                localStorage.setItem("token",token.data)
                console.log("token : "+token.data)
                router.replace('/ad')
            })

        }catch(error){

        }
        reset()
    }
    return (
        <main>
            <div  className="space-y-3">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Authentification</h2>
                            {<p className="mt-2 text-center text-sm text-gray-600">
                                Ou{' '}
                                <a href="/registration" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Créer un compte
                                </a>
                            </p>}
                        </div>
                        {/**/}
                        <form onSubmit={handleSubmit(loginForm)} className="mt-8 space-y-6" >
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="mb-6">
                                    <label htmlFor="email">Email</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" {...register('email')}/>
                                    {errors.email?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.email.message}
                                        </p>
                                    )}

                                </div>
                                <div >
                                    <label htmlFor="password">Mot de passe</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" {...register('password')}/>
                                    {errors.password?.message && (
                                        <p className='mt-2 text-sm text-red-400'>
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center"></div>

                                <div className="text-sm">
                                    <a href="/password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Mot de passe oublié
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2focus:ring-indigo-500"><span className="absolute left-0 inset-y-0 flex items-center pl-3"> </span>Connexion</button>
                            </div>
                        </form>
                        <a href={"/ad"}>Home</a>

                    </div>

                </div>

            </div>

        </main>);

}
