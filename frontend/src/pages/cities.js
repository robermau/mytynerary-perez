import Cards from "../components/Cards";
import "../index.css";
import React, { useEffect, useState } from "react";

import {useSelector , useDispatch } from 'react-redux';
import citiesActions from "../actions/citiesActions";







export default function Cities() {


 
   const [search, setSearch] = useState('')
   const dispatch = useDispatch()

useEffect (()=> {

   dispatch(citiesActions.filterCities(search))
// eslint-disable-next-line
},[setSearch]);

const cityFilter = useSelector(store => store.citiesReducers.filter)
  

    let citySearch = cityFilter.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))

  
return (

     <div className=" gap-y-8 backgroundError">
         <form className="flex flex-row justify-center mt-3 mb-3 ">
            <label className="sr-only">
               Search
            </label>
            <div className="relative w-full">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                     className="w-5 h-5 text-gray-500 dark:text-gray-400"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">

                     </path>
                  </svg>
               </div>
               <input
                  type="text"
                  id="simple-search"
                  onKeyUp={(e) => {
                     setSearch(e.target.value)
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required />
            </div>

            <button
               type="submit"
               className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
               </svg>
            </button>
         </form>
         <div className="justify-center cardContainer">

            {citySearch.length > 0 ? citySearch.map(city => <Cards city={city} key={city._id} />) : <h1>not Found Results</h1>}

         </div>

      </div>



   );

}
