import React, { useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const FlavorID = ({ match }) => {
    let history = useHistory()

    const [flavor, setFlavor] = useState('')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const id = match.params.id
        fetch(`http://localhost:3111/icecream/${id}`)
            .then(res => res.json())
            .then(res => setFlavor(res))
    }, [match.params.id])

    const handleChange = (event) => {
            setFlavor({...flavor, [event.target.name]: event.target.value})

    }

    const editShowPage = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Write your PUT fetch() or axios() request here



        history.push('/')
    }

    const handleDelete = () => {
        // Write your DELETE fetch() or axios() request here


        history.push('/')
    }


    if(!flavor){
        return <h1>Loading...</h1>
    }

    return (
        <div className="showID">
            { modal ? 
                <div>
                    <div>
                        <h2>Edit this show:</h2>
                        <form onSubmit={handleSubmit}>
                            <label for="flavor"/>
                            <input onChange={handleChange} name="flavor" value={flavor.flavor}/>
                            <label for="varieties"/>
                            <input onChange={handleChange} name="varieties" value={flavor.varieties}/>
                            <br/>
                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div> 
                : null
            }
            <h2>{flavor.flavor}</h2>
            <h3>Varieties: {flavor.varieties}</h3>

            <button onClick={editShowPage}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FlavorID;