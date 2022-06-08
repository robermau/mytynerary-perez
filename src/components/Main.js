import Carrousel from './Carrousel';




export default function Main() {
  return (
    <main className="mainContainer">

      <div className="main ">
        <img className="logo" src="https://imge.cloud/images/2022/06/07/rKUUz8.png"
          alt="logoportada"
        />
        <p className="textMain main_div" >
          "Find
          your perfect trip, designed by insiders who know and love
          their cities!".
        </p>
      </div>

      <div className="sencond-banner">
      <Carrousel />
     </div>

       
    </main>
  )
}
