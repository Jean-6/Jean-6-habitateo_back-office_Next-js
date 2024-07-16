'use client';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form";
import {SchemaAdSearchFormCriteriaMin} from "@/lib/schema/schema-ad-search-form-criteria-min";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";


interface Ads{
    totalPages: number,
    totalItems: number,
    currentPage: number,
    results: [
        _id: string,
        title: string,
        description: string,

        price: {
            value: number,
            unit: string,
            symbol: string,
        },
        location: {
            country: string,
            city: string,
            commune: string,
            prefecture: string,
            subPrefecture: string,
            region: string,
            neighborhood: string,
            additionalInfo: string,
            street: string,
            zipCode: string,

        }]
}


type Inputs = z.infer<typeof SchemaAdSearchFormCriteriaMin>



const AdSearchForm =   () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Inputs>({
        resolver: zodResolver(SchemaAdSearchFormCriteriaMin)
    })


    const loginForm: SubmitHandler<Inputs> = async( data) => {

    }

    return (
    <main>
        <div  className=""> {/*space-y-4*/}
            <div className=""> {/*min-h-full flex items-center justify-left py-12 px-4 sm:px-6 lg:px-8*/}
                <div className=""> {/*max-w-md w-full space-y-8*/}
                    {/**/}
                    <form  className="" > {/*mt-8 space-y-6*/}
                        <div className="flex space-x-4">
                            <div>
                                <label htmlFor="project" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type de projet</label>
                                <select id="project" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option selected></option>
                                    <option value="rental">Location</option>
                                    <option value="purchase">Achat</option>
                                    <option value="sublet">Sous-location</option>
                                    <option value="exchange">Echange</option>
                                    <option value="seasonal">Location saisonniere</option>
                                    <option value="auction">Enchere</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="locality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Localité</label>
                                <input type="text" id="locality" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Conakry" required/>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-2">
                            <div>
                                <label htmlFor="budgetMin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Min.</label>
                                <input type="text" id="budgetMin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="budgetMax" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Max.</label>
                                <input type="text" id="budgetMax" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="numberOfPieces" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de pieces </label>
                                <input type="number" id="numberOfPieces" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" />
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-2">
                            <div>
                                <label htmlFor="livingAreaMin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface habitable Min. </label>
                                <input type="text" id="livingAreaMin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>

                            <div>
                                <label htmlFor="livingAreaMax" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface habitable Max.</label>
                                <input type="text" id="livingAreaMax" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>


                                <div>
                                    <label htmlFor="landAreaMin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface de terrain Min. </label>
                                    <input type="text" id="landAreaMin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>
                                <div>
                                    <label htmlFor="landAreaMax" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface de terrain Max.</label>
                                    <input type="text" id="landAreaMax" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>



                        </div>

                        <div className="mt-2">
                            <div className="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meublé</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non meublé </label>
                            </div>
                        </div>

                        <div className="mt-8 ">
                            <button type="submit" className="group relative w-30 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2focus:ring-indigo-500"><span className="absolute left-0 inset-y-0 flex items-center pl-3"> </span>Rechercher</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </main>)

}

export default function AdPage () {

    //const [ data,setData] = useState({ results : {} })
    const [ data,setData] = useState({ results : [] })
    const [ currentPage,setCurrentPage ] = useState(1);
    const [ totalPages,setTotalPages ] = useState(1);
    const [ totalItems,setTotalItems ] =  useState(1);
    const pageSize = 10;

    const page = 1;
    const limit = 10;

    useEffect( () =>{
        const fetchData = async() =>{
            const result = await axios('https://habitateo-api-dda29971e4d9.herokuapp.com/api/v1/ads?page=1&limit=10');
            console.log("totalPages : "+result.data.totalPages)
            console.log("totalItems : "+result.data.totalItems)
            console.log("currentPages : "+result.data.currentPage)
            setData(result.data );
            setCurrentPage(result.data.currentPage)
            setTotalPages(result.data.totalPages)
            setTotalItems(result.data.totalItems)
        };
        fetchData();
    },[]);

        return (

            <section className="p-5">
                <AdSearchForm/>
                <div className="max-w-4xl mx-auto text-center">

                { data.results.map(function (ad:Ads){
                    return (
                        <div key = {ad._id} className="card bg-white p-3 w-full shadow-lg rounded-lg flex mt-2">

                            {/*<Link href={{ pathname : "/modal", query : {id: ad._id  } }} >*/}
                                <Link href={`/details/${ad._id}`}>
                                <div className="flex gap-2">
                                    {/*Picture*/}
                                    <div className="min-w-max">
                                        <img src={'https://placehold.co/400x200'}/>
                                    </div>
                                    {/*Details*/}
                                    <div className="justify-center">
                                        <div >
                                            <h1>{ad.price.value} {ad.price.symbol}</h1>
                                        </div>
                                        <div>
                                            <p>{ad.description}</p>
                                        </div>
                                    </div>
                                    {/*Options*/}
                                    <div className="">
                                        <div>Details</div>

                                    </div>
                                </div>
                            </Link>

                        </div>
                    )
                })}
                </div>

            </section>

);

}