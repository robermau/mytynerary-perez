import { BsHandThumbsUp } from "react-icons/bs"
export default function Itineraries() {
  return (



    <div className="  rounded-3xl ml-5 bg flex flex-col items-center  justify-between mt-8 h-2/4 bg-white">
      <div className="lg:text-center">
        <h2 className=" text-5xl">Itineraries</h2>
      </div>
      <div className=" flex flex-col items-center">
        <img
          className="h-30 w-24 rounded-full ring-2 ring-white"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuv8k4ViSE-Da_vwSHCMtwp4-goHZyKhe6K1yqr9mzoKrvfyQCCcMP1k4UjfYfp0UzYg&usqp=CAU"
          alt=""
        />
      </div>

      <div className="max-w-2xl  px-4 sm:px-6 lg:px-8">

        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Mohamed Salah
        </p>

        <p className=" max-w-2xl text-xl text-gray-900 lg:mx-auto"> Price:$2</p>

        <p className=" max-w-2xl text-xl text-gray-900 lg:mx-auto">Duration: 2hs</p>
        <div className="svg-like">
          <BsHandThumbsUp />
        </div>
        <p className="mt-1 max-w-2xl text-xl text-gray-900 lg:mx-auto">

          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>

      </div>

      <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center w-80 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></button>

      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">

        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
        </ul>
      </div>

    </div>


  )
}