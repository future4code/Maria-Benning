import axios from "axios"
import React from "react"
import { Container } from "./Styled"


 export const MatchesPages = () => {
     


const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-benning-lovelace/matches"





axios.get(url)

.then ((res) =>{
    console.log(res.data)
})


.catch((err) =>{
    console.log(err.response)
})



return (
    <Container>
    MatchesPages
    {() => MatchesPages}
    </Container>
)

}