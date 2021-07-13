import React, { useState } from 'react'
import styles from './Form.module.css';

const Form = (props) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [validState, setValidState] = useState({
        firstName: false,
        lastName: false,
        email: false, // initial state is false
        password: false,
        confirmPassword: false
    })

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        // const {name, value} = event.target
        event.preventDefault();
        if(formState.firstName.length < 2 && formState.firstName.length > 0){
            var firstName = true
        } else if(formState.firstName.length == 0) {
            var firstName = false
        }
        if(formState.lastName.length < 2 && formState.lastName.length > 0) {
            var lastName = true
        } else if(formState.lastName.length == 0) {
            var lastName = false
        }
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formState.email)) {
            var email = true
        }
        // check for password validations
        if(formState.password.length < 8){
            var password = true
        }
        if(formState.password != formState.confirmPassword) {
            var confirmPassword = true
        }

        setValidState({
            ...validState,
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
    };

    return(
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" onChange={ handleChange } name="firstName"/>
                { (validState.firstName) ? <p style={{color:'red'}}>Field must be contain more than 2 characters</p> : null }
                <label>Last Name</label>
                <input type="text" onChange={ handleChange } name="lastName"/>
                { (validState.lastName) ? <p style={{color:'red'}}>Field must be contain more than 2 characters</p> : null }
                <label>Email</label>
                <input type="text" onChange={ handleChange } name="email"/>
                { (validState.email) ? <p style={{color:'red'}}>Your email must be valid pattern</p> : null }
                <label>Password</label>
                <input type="text" onChange={ handleChange } name="password"/>
                { (validState.password) ? <p style={{color:'red'}}>Your password must be longer than 8 characters</p> : null }
                <label>Confirm Password</label>
                <input type="text" onChange={ handleChange } name="confirmPassword"/>
                { (validState.confirmPassword) ? <p style={{color:'red'}}>Your passwords must match</p> : null }
                <input type="submit"/>
            </form>
            <div>
                <p>First Name {formState.firstName}</p>
                <p>Last Name {formState.lastName}</p>
                <p>Email {formState.email}</p>
                <p>Password {formState.password}</p>
                <p>Confirm Password {formState.confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form;