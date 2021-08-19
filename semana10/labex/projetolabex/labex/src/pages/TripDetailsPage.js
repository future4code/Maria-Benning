import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const useProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      console.log("Não está logado!")
      history.push("/loginpage")
    }
  }, [])

}

const TripDetailsPage = () => {
 useProtectedPage()


  useEffect(() => {

    const token = localStorage.getItem("token");
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-benning-lovelace/trip/:idNoIFVcOiSgTKTIPVZwXS",
      {
        headers: {
          auth: token
        }
      }
    )

      .then((res) => {
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