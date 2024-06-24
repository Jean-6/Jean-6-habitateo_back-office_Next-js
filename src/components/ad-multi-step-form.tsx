'use client'
import {step} from "next/dist/experimental/testmode/playwright/step";


import { useState } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
import {FormDataSchema} from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
    {
        id: 'Etape 1',
        name: 'Type de bien',
        fields: ['project', 'property', 'street','city', 'country', 'state','zip']
    },
    {
        id: 'Etape 2',
        name: 'Caractéristiques',
        fields: ['area', 'room', ]
    },
    {
        id: 'Etape 3',
        name: 'Photos',
        fields: ['area', 'room', ]
    },
    { id: 'Etape 4', name: 'Complete' },

]

export default function Form(){
    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const delta = currentStep - previousStep

    const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema)
    })

    const processForm: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    type FieldName = keyof Inputs

    const next = async () => {
        const fields = steps[currentStep].fields
        const output = await trigger(fields as FieldName[], { shouldFocus: true })

        if (!output) return

        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                await handleSubmit(processForm)()
            }
            setPreviousStep(currentStep)
            setCurrentStep(step => step + 1)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep(step => step - 1)
        }
    }

    const decrementRoom = (e:any) => {

        alert("test-decrement")
    }

    const incrementRoom = (e:any) => {


        const els = e.target.parentNode.parentElement.getElementsByName("custom-input-number");
        //const target = btn.nextElementSibling;
        alert (els);




    }


    const defaultValue = { value: 'vanilla', label: 'Vanilla' };

    return (

        <section className="">

            {/* Step */}
            <nav aria-label='Progress'>
                <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
                    {steps.map((step,index)=>(
                        <li key={step.name} className='md:flex-1'>
                            {currentStep > index ? (
                                <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                                    <span className='text-sm font-medium text-sky-600 transition-colors '>{step.id}</span>
                                    <span className='text-sm font-medium'>{step.name}</span>
                                </div>
                            ): currentStep === index ? (
                                <div  className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4' aria-current='step'>
                                    <span className='text-sm font-medium text-sky-600'>{step.id}</span>
                                    <span className='text-sm font-medium'>{step.name}</span>
                                </div>
                            ):(
                                <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                                    <span className='text-sm font-medium text-gray-500 transition-colors'>{step.id}</span>
                                    <span className='text-sm font-medium'>{step.name}</span></div>
                            )
                            }
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Form */}

            <form className='mt-12 ' onSubmit={handleSubmit(processForm)}>

                {currentStep === 0 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ duration: 0.3, ease: 'easeInOut'}}>

                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 grid-cols-1 md:grid-cols-5">

                                 <div className="md:col-span-2">
                                    <label htmlFor="project" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Projet</label>
                                    <select id="project" {...register('project')} className="block w-64 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={""}></option>
                                        <option value={"buy"}>A vendre</option>
                                        <option value={"rental"}>A louer</option>
                                    </select>
                                </div>



                                 <div className="md:col-span-2">
                                    <label htmlFor="property" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type de bien</label>
                                    <select id="property" {...register('property')} className="block w-64 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={""} ></option>
                                        <option value="apartment">Appartement</option>
                                        <option value="home">Maison</option>
                                        <option value="parking">Parking</option>
                                    </select>
                                </div>


                                <div className="md:col-span-3">
                                    <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rue</label>
                                    <input id="street" {...register('street')} type="text" name="street"  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 rounded-lg"  placeholder=""/>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ville</label>
                                    <input id="city" {...register('city')} type="text" name="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 rounded-lg"  placeholder=""/>
                                </div>
                                <div className="md:col-span-2" >
                                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pays</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded-lg items-center mt-1">
                                        <input id="country" {...register('country')} name="country"  placeholder="" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent " />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etat / province</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded-lg items-center mt-1">
                                        <input id="state" {...register('state')} name="state"  placeholder="" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"/>
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <label htmlFor="zipcode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code Postal</label>
                                    <input id="zipcode" {...register('zipcode')} type="text" name="zipcode"  className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50 rounded-lg" placeholder=""/>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )}

                {currentStep === 1 && (

                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >

                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 grid-cols-1 md:grid-cols-5">

                                <div className="md:col-span-3">
                                    <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Superficie</label>
                                    <input id="street" {...register('area')} type="text" name="street"  className="h-10 border mt-1 rounded px-4 w-64 bg-gray-50 rounded-lg"  placeholder=""/>
                                </div>

                                <div className="md:col-span-3">
                                    <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de pièces</label>


                                    <div className="relative flex items-center">
                                        <div className="flex items-center gap-x-1.5">

                                            <button onClick={decrementRoom} type="button" id="increment-button" data-input-counter-decrement="quantity-input" >
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                </svg>
                                            </button>

                                            <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10" value="1" required name="custom-input-number"  />


                                            <button onClick={incrementRoom} type="button" id="decrement-button" data-input-counter-increment="quantity-input">
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                                </svg>

                                            </button>

                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>

                    </motion.div>
                )}

                {currentStep === 2 && (
                    <>
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Complete
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Thank you for your submission.
                        </p>
                    </>
                )}
            </form>

            {/* Navigation */}

            <div className="mt-8 pt-5">
                <button type="button" onClick={prev} disabled= {currentStep === 0}
                        className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'>
                        Precedent
                </button>
                <button type="button" onClick={next} disabled={currentStep === steps.length - 1}
                        className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'>
                        Suivant
                </button>

            </div>

        </section>
        )


}