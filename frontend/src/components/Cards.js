const Cards = ({city}) => {

    return (
      
          
      
                    <div className="mb-8 mr-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900 w-80 dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg img-card" src={city.img} alt="" />
                       
                            <h5 className="text-xl font-bold text-gray-900 dark:text-white">{city.name}</h5>

                            <p className="text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="a-btn">
                                Read more

                            </a>
                        </div>
                   

          
       )
}
export default Cards;