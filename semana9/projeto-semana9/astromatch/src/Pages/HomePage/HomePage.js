import React from "react"
import axios from "axios"

import { Container } from "./Styled"
import { Profile } from "./Styled"
import { ProfileImage } from "./Styled"
import { BotoesPerfil } from "./Styled"
import { useEffect, useState } from "react"


export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-benning-lovelace/person"

    useEffect(() => {
        getProfile()
    }, [])



    const getProfile = () => {
        axios.get(url)
            .then((res) => {
                console.log(res.data.profile)
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const choosePerson = (id,choice) => {
        console.log("Botão de escolha")

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-benning-lovelace/choose-person"

        const body = {
            "id": id,
            "choice": choice
        }
        axios.post(url,body)
            .the((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }


    return (
        <Container>
            <Profile>
                <ProfileImage src={profile.photo}></ProfileImage>
                <h2>{profile.name},{profile.age}</h2>
                <p>{profile.bio}</p>
            </Profile>

            <BotoesPerfil>

                <button onClick={choosePerson}>💙</button>
                <button onClick={choosePerson}>❌</button>
            </BotoesPerfil>
        </Container>
    )

}