import { useState }  from 'react'

const useForme = (initialState) => {
const [form, setForm] = useState (initialState)

const handletInputChange = (event) => {
const {value, name} = event.target
setForm({...form, [name]: value})
}




const clear = () => {
setForm(initialState)

}
return [form, handletInputChange, clear]
}
 

export default useForme