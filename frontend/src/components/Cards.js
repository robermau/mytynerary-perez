import { Link as LinkRouter } from 'react-router-dom'



const Cards = ({city}) => {

    return (
      <div className="pb-8 mb-8 mr-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:-translate-y-6 shadow-gray-900 w-80 dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg img-card" src={city.image} alt="" />
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">{city.name}</h5>
        <p className="text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <LinkRouter to={`/city/${city._id}`} className="a-btn" > Read more
        </LinkRouter> 

       
      </div>
 )
}
export default Cards;