import React from 'react'
import Carousel from 'react-grid-carousel'
import "../index.css";
import data from '../data.json';



const Carrousel = () => {
  return (
    <div className='carrousel'>

      <Carousel mobileBreakpoint={300} cols={2} rows={2} gap={10} autoplay={4000} loop
        responsiveLayout={[

          {
            breakpoint: 760,
            cols: 1,
            rows: 4,
            gap: 10,
            loop: true,
            autoplay: 4000
          }
        ]
        }     >


        {data.map(item =>
          <Carousel.Item key={item.id}>
            <img className="imgCarrousel" width="100%" src={item.img} />
            <h5 className="fontCarrousel">{item.name}</h5>
          </Carousel.Item>
        )}
      </Carousel>
    </div >
  )
}

export default Carrousel