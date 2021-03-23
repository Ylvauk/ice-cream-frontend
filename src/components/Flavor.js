import React from 'react';
import { Link } from 'react-router-dom'

const Show = ({ flavor, index }) => {
    return (
        <div>
            <Link to={`/flavors/${flavor._id}`}>
                <p>{flavor.flavor}</p>   
            </Link>
        </div>
    );
};

export default Show;