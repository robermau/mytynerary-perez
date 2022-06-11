
import data from '../data.json';



const Cards = () => {

    return (
        <div className='main-Card'>
            <div className="cardContainer">
                {data.map(item =>
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg img-card" src={item.img} alt="" />
                       
                            <h5 className="text-xl font-bold text-gray-900  dark:text-white">{item.name}</h5>

                            <p className="text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="a-btn">
                                Read more

                            </a>
                        </div>
                   

                )
                }</div>
        </div>)
}
export default Cards;