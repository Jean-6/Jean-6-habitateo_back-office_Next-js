"use client"
import React, { useState} from "react";
import VerifyUserEmailModal from "@/app/registration/modal-verify-email/verify-email-modal";
import 'react-phone-number-input/style.css'
import 'react-phone-input-2/lib/style.css';
import {SchemaRegistration} from "@/lib/schema/schema-registration";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";

import 'react-phone-number-input/style.css'
import {router} from "next/client";
import axios from "axios";

type Inputs = z.infer<typeof SchemaRegistration>

const RegistrationForm = () => {

    const [showModal, setShowModal] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState('');
    const [valid,setValid] = useState(true);

    const validatePhoneNumber = (phoneNumber:any) => {
        const phoneNumberPattern = /^\d(10)$/;
        return phoneNumberPattern.test(phoneNumber);
    }
    const handleChangePhoneNumber = (value:any) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const {
        register,
        handleSubmit,
        //watch,
        reset,
        //trigger,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(SchemaRegistration)
    })

    const registrationForm: SubmitHandler<Inputs> = async data => {

        //const session = await getSession()
        /*console.log(JSON.stringify(data))
        try{
            const res = await axios({
                method: "POST",
                data: JSON.stringify(data),
                url: 'https://habitateo-api-dda29971e4d9.herokuapp.com/api/v1/users'
            }).then(token =>{
                //localStorage.setItem('token',token.data)
                console.log("token : "+token)

            })
        }catch(error){

        }*/
        axios.post('https://habitateo-api-dda29971e4d9.herokuapp.com/api/v1/users',
        {lastname:data.lastname,
            firstname:data.firstname,
            email:data.email,
            password:data.password,
            phoneNumber:data.phoneNumber
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    console.log('Bad Request: ', error.message);
                }
            });
        router.push('/')
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
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Creer un compte</h2>
                        {<p className="mt-2 text-center text-sm text-gray-600">
                            Ou{' '}
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Se connecter
                            </a>
                        </p>}
                    </div>
                    {/**/}
                    <form onSubmit={handleSubmit(registrationForm)} className="mt-8 space-y-6" >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">

                            <div className="mb-1">
                                <label htmlFor="lastname">Nom</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Nom" {...register('lastname')}  />
                                {errors.lastname?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.lastname.message}
                                    </p>
                                )}
                            </div>

                            <div className="">
                                <label htmlFor="firstname">Prenom(s)</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Prenom(s)" {...register('firstname')}/>
                                {errors.firstname?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.firstname.message}
                                    </p>
                                )}
                            </div>

                            <div className="">
                                <label htmlFor="email">Email</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" {...register('email')}/>
                                {errors.email?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.email.message}
                                    </p>
                                )}

                            </div>
                            <div className="">
                                <label htmlFor="password">Mot de passe</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" {...register('password')}/>
                                {errors.password?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <div className="">
                                <label htmlFor="phone">Telephone</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="N°" {...register('phoneNumber')}/>
                                {errors.phoneNumber?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.phoneNumber.message}
                                    </p>
                                )}
                            </div>

                            {/*<div className="">
                                <label htmlFor="phone">Tel.</label>
                                <PhoneInput
                                    country={'fr'}
                                    value={phoneNumber}
                                    onChange={handleChangePhoneNumber}
                                    placeholder="Telephone"
                                />
                            </div>*/}
                        </div>



                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2focus:ring-indigo-500"><span className="absolute left-0 inset-y-0 flex items-center pl-3"> </span>Inscription</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between">

                        <div className="text-sm">
                            <button className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setShowModal(true)}>  Verification Email</button>
                        </div>

                        <div className="text-sm">
                            <a href="/password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Mot de passe oublié
                            </a>
                        </div>
                    </div>
                    <VerifyUserEmailModal isVisible={showModal} onClose={() => setShowModal(false)}/>

                </div>
            </div>
        </div>
    </main>)
}

export default RegistrationForm;