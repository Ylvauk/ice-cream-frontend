import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const history = useHistory();
  const [flavor, setFlavor] = useState({
    flavor: '',
    varieties: 0,
  });

  const handleChange = (event) => {
    setFlavor({ ...flavor, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Write your POST fetch() or axios() request here

    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <label htmlFor="flavor">Flavor: </label>
      <input
        onChange={handleChange}
        id="flavor"
        value={flavor.flavor}
        placeholder="Flavor"
      />
      <label htmlFor="varieties">Varieties: </label>
      <input
        onChange={handleChange}
        id="varieties"
        value={flavor.varieties}
        placeholder="Varieties"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
