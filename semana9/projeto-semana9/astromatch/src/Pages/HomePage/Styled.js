import styled from 'styled-components';


export const Container = styled.div `
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
    
`

export const ProfileImage = styled.img`
width: 150px;
`

export const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px;
border: 1px solid black;
padding: 20px;
margin: 20px;
`


export const BotoesPerfil = styled.button `
display: flex;
flex-direction: center;
align-items: center;
justify-content: space-between;
width: 300px;
height: 40px;
margin: 40px;
`