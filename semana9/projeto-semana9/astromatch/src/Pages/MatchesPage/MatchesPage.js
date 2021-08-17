import axios from "axios"
import React from "react"
import { Container } from "./Styled"
import { useEffect, useState } from "react"
import { Profile } from "../HomePage/Styled"

 export const MatchesPages = () => {
    const [matches, setMatches] = useState([]);


    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-benning-lovelace/matches"




    useEffect(() => {
        axios.get(url)

.then ((res) =>{
    console.log(res.data.matches)
   setMatches(res.data.matches)
})


.catch((err) =>{
    console.log(err.response)
})
        
    }, [])





return (
    <Container>
   
   {matches.map((profile) =>{
       return <MatchesPages profile= {profile}/>})}
   
   
    </Container>
)

}