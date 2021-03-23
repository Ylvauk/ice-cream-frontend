import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const history = useHistory()
    const [flavor, setFlavor] = useState({flavor: '', varieties: 0, delicious: true})

    const handleChange = (event) => {
            setFlavor({...flavor, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Write your POST fetch() or axios() request here
        axios.post('http://localhost:3111/icecream', flavor)
            
            
        history.push('/')
        
    }



    return (
        <div>
            <form onSubmit={handleSubmit} className="create-form">
                <label for="flavor">Flavor: </label>
                <input onChange={handleChange} name="flavor" value={flavor.flavor} placeholder="Flavor"/>
                <label for="varieties">Varieties: </label>
                <input onChange={handleChange} name="varieties"value={flavor.varieties} placeholder="Varieties"/>
                <button id="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;