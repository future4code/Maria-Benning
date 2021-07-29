import './App.css';
import react from 'react';
import axios from 'axios';
import styled from 'styled-components';






export default class App extends react.Component {


  state = {
    rockets: []
  }


componentDidMount (){
  this.getRockets()
}


getRockets = () => {
  axios.get("https://api.spacexdata.com/v3/rockets")
  .then((res) => {
    console.log(res.data)
    this.setState({rockets:res.data})
  })
  .catch((err) => {
    console.log(err.response)
  })
}

  render() {
    console.log(this.state.rockets)
   const rocketsList = this.state.rockets.map((rockets) =>{
     
     return (
<div key={rockets.rocket_id}>
  
  {rockets.description && <p>Descrição:{rockets.description} 
  </p>}
  {rockets.company && <p>Companhia:{rockets.company}</p>}
  {rockets.wikipedia && <p>
  <a href={rockets.wikipedia}>Link para wikipedia</a>
  </p>}

</div>

     )
   }

)

    return (
       <div>
        <h2>Foguetes</h2> 
        {rocketsList}
      </div>

    )

  }


}


