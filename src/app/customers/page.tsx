'use client';
import React from "react";


export default function CustomerListPage () {
    return(<div>
        <SearchForm_/>
        <AddUserButton/>
        <UserList/>
    </div>)
};


const SearchForm = () =>{
    return (
        <form className="w-full" max-w-sm>
            <div  className="border-collapse w-full">
                <ID/>
                <Login/>
                <Email/>
            </div>
        </form>)
}


const AddUserButton = ()  =>{
    return (<div className="mb-10">
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
            + Nouvel utilisateur
        </button>
    </div>);

}

const SearchForm_ = () => {
    return (
        <form >
            <div className="mt-10 mb-8 grid grid-cols-1  gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">UID</label>
                    <div className="mt-1">
                        <input  type="text" name="first-name" id="first-name"  className="block w-48 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Login</label>
                    <div className="mt-1">
                        <input type="text" name="last-name" id="last-name" autoComplete="family-name"
                               className="block w-48 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email"
                               className="block w-48 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div className="sm:col-span-2 mt-8">
                    <button type="button"  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
                </div>

            </div>

        </form>)
}

const UserList = () =>{
    return (<div>
        <table className="border-collapse w-full">
            <thead>
            <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Login</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Email</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"><span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>#123456</td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                    Login1
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                    German
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                    <a href="src/app/customers#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                    <a href="src/app/customers#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                </td>
            </tr>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"><span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>#123456</td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                    Login2
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                    Schweden
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                    <a href="src/app/customers#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                    <a href="src/app/customers#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                </td>
            </tr>
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"><span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>#123456</td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                    ghome
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                    Switzerland
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">inactive</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span
                        className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                    <a href="src/app/customers#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                    <a href="src/app/customers#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                </td>
            </tr>
            </tbody>


        </table>



    </div>)
}

const Login = ()=>{

    const setLogin = (login : string)=>{

    }

    return (<div>
        <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="Login" className="block text-sm font-medium leading-6 text-gray-900">Login</label>
            <div className="mt-2">
                <input type="text" name="login" id="login" onChange={(e) => setLogin(e.target.value)} placeholder="Login" autoComplete="address-level2"
                       className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
        </div>
    </div>)

}


const Email = () =>{
    const setEmail = (email : string)=>{

    }

    return (<div>
        <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
                <input type="text" name="email" id="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="address-level2"
                       className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
        </div>
    </div>)

}

const SubmitButton = () =>{
    const setEmail = (email : string)=>{

    }

    return (<div>
        <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
                <input type="text" name="email" id="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="address-level2"
                       className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
        </div>
    </div>)

}


const ID = () => {

    const setID = (ID: string) => {

    }

    return (<div>
        <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="ID" className="block text-sm font-medium leading-6 text-gray-900">ID</label>
            <div className="mt-2">
                <input type="text" name="id" id="ID" onChange={(e) => setID(e.target.value)} placeholder="ID"
                       autoComplete="address-level2"
                       className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
        </div>
    </div>)
}
