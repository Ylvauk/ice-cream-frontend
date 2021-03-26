import React, { useEffect, useState } from 'react';
import Flavor from './FlavorItem';
import axios from 'axios';

const FlavorList = () => {
  const [flavors, setFlavors] = useState();
  useEffect(() => {
    // Write your GET fetch() or axios() request here
  }, []);

  if (!flavors) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {flavors.map((flavor, index) => (
        <Flavor key={index} flavor={flavor} index={index} />
      ))}
    </div>
  );
};

export default FlavorList;
