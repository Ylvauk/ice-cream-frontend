import React, { useEffect } from 'react';
import Flavor from './Flavor'
import axios from 'axios'

const Shows = ({ flavors, setFlavors }) => {

    useEffect(() => {
        // Write your GET fetch() or axios() request here
        
        
    }, [])

    if(!flavors){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {flavors.map((flavor, index) => (
                <Flavor key={index} flavor={flavor} index={index}/>
            ))}
        </div>
    );
};

export default Shows;