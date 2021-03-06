
import React from 'react';
import { InputsContainer } from './styled'
import { Button, TextField } from '@material-ui/core';
import useForm from "../../hooks/useForm"
import axios from 'axios';
import {BASE_URL} from "../../constants/url"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })


    const onSubmitForm = (event) => {
        event.preventDefault()
 login()

    }

    const login = () =>{
axios.post(`${BASE_URL}/user/login`, form)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

    }
    return (

        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}

                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}


                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                >

                    Fazer Login
                </Button>
            </form>
        </InputsContainer>

    )
}

export default LoginForm;
