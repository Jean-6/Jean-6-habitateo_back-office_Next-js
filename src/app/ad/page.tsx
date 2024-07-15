'use client';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import {SubmitHandler} from "react-hook-form";
import {Inputs} from "preact/compat";

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




const SearchForm =   () => {
    /*const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Inputs>({
        resolver: zodResolver(SchemaLogin)
    })*/


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
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type de projet</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Projet</option>
                                    <option value="rental">Location</option>
                                    <option value="purchase">Achat</option>
                                    <option value="sublet">Sous-location</option>
                                    <option value="exchange">Echange</option>
                                    <option value="seasonal">Location saisonniere</option>
                                    <option value="auction">Enchere</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recherche par localité</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Conakry"/>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Min.</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget Max.</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de pieces </label>
                                <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" />
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-2">

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface habitable Min. </label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface habitable Max.</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>


                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface de terrain Min. </label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surface de terrain Max.</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                </div>



                        </div>

                        <div className="mt-2">
                            <div className="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meublé</label>
                            </div>
                            <div className="flex items-center">
                                <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
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

    /*const [ads, setAds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const page = 1;
    const limit = 10;

    useEffect(() => {
        //let url = `${process.env["BASE_API "]}/ads?page=${page}&limit=${limit}`;
        let url = `https://habitateo-api-dda29971e4d9.herokuapp.com/api/v1/ads?page=1&limit=10`;
        console.log("url : "+url)
        axios.get(url).then((res) => {
            const { data, headers } = res;
            setTotalPages(Number(headers['x-wp-totalpages']));
            setAds(data.results);
        });
    }, [currentPage]);
    console.log('ads', ads);*/

        return (

            <section className="p-5">
                <SearchForm/>
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
                    <Link href="/modal/">test</Link>
                </div>

            </section>

);

}