'use client'
import {step} from "next/dist/experimental/testmode/playwright/step";


import { useState } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
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
        fields: ['', '', ]
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


        //const btn = e.target.parentNode.parentElement?.querySelector('button[id="decrement-button"]');
        //const quantityInput = document.getElementById("quantity-input");
        //const target = btn.nextElementSibling;
        //alert (quantityInput?.innerHTML);
        //cos

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
                                    <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Superficie</label>
                                    <input id="area" {...register('area')} type="number" name="area"  className="h-10 border mt-1 rounded px-4 w-64 bg-gray-50 rounded-lg"  placeholder=""/>
                                </div>

                                <div className="md:col-span-3">
                                    <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de pièces</label>
                                    <div className="relative flex items-center">
                                        <div className="flex items-center gap-x-1.5">
                                            <div className="relative flex items-center max-w-[8rem]">
                                                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/></svg>
                                                </button>
                                                <input type="text" value="1" id="quantity-input" {...register('room')} data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                                <button onClick={incrementRoom}  type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )}

                {currentStep === 2 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}>

                        <div className="lg:col-span-2">
                            <label>Upload File</label>

                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only"/>
                                <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                    <div><span className="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">Browse</span>
                                    </div>
                                </label>
                            </div>

                            {/**/}

                            <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div className="flex items-center justify-between">
                                     <span className="truncate pr-3 text-base font-medium text-[#07074D]">banner-design.png</span>
                                    <button className="text-[#07074D]">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z" fill="currentColor"/>
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div className="flex items-center justify-between">
                                     <span className="truncate pr-3 text-base font-medium text-[#07074D]">banner-design.png</span>
                                    <button className="text-[#07074D]">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                fill="currentColor"
                                            />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                                    <div
                                        className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">Send File</button>
                        </div>

                    </motion.div>
                )}

                {currentStep === 3 && (
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