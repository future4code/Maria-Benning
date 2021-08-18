import axios from 'axios';
import React, { useEffect } from 'react';




const TripDetailsPage = () => {
  useEffect(() => {

    const token = localStorage.getItem("token");
axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-benning-lovelace/trip/:idNoIFVcOiSgTKTIPVZwXS",
{
  headers: {
    auth: token
  }
}
)

. then ((res) =>{
console.log("deu certo", res.data)
})
.catch((err) => {
  console.log("deu errado", err.res)
})

  }, [])


    return (
      <div>
     Detalhes da Viagem
      </div>
    );
  }

  export default TripDetailsPage