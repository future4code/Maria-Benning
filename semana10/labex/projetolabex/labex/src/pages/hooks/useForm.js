import { useState } from "react";
import React from 'react';





const useForm = (inicialState) => {

const [form, setForm] = useState(inicialState)

const onChange = (event) => {
    
    setForm({...form, [event.target.name]: event.target.value})

    }

const cleanFields = () => {
    setForm(inicialState)
}



    return {form, onChange, cleanFields}
}


export default useForm;