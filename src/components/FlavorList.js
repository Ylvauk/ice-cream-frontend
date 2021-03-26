import React, { useEffect, useState } from 'react';
import Flavor from './FlavorItem';
import axios from 'axios';

const FlavorList = () => {
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    // Write your GET fetch() or axios() request here
  }, []);

  if (!flavors.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {flavors.map((flavor) => (
        <Flavor key={flavor._id} flavor={flavor} />
      ))}
    </ul>
  );
};

export default FlavorList;
