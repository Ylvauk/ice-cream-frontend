import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Flavor = ({ match }) => {
  const id = match.params.id;

  const history = useHistory();

  const [flavor, setFlavor] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3111/icecream/${id}`)
      .then((res) => res.json())
      .then((res) => setFlavor(res));
  }, [id]);

  const handleChange = (event) => {
    setFlavor({ ...flavor, [event.target.id]: event.target.value });
  };

  const editShowPage = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Write your PUT fetch() or axios() request here

    history.push('/');
  };

  const handleDelete = () => {
    // Write your DELETE fetch() or axios() request here

    history.push('/');
  };

  if (!flavor) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      {modal ? (
        <div className="modal">
          <h2>Editing {flavor.flavor}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="flavor">Flavor</label>
            <input onChange={handleChange} id="flavor" value={flavor.flavor} />
            <label htmlFor="varieties">Varieties</label>
            <input
              onChange={handleChange}
              id="varieties"
              value={flavor.varieties}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={closeModal}>
              Close
            </button>
          </form>
        </div>
      ) : (
        <>
          <h2>{flavor.flavor}</h2>
          <h3>Varieties: {flavor.varieties}</h3>

          <button onClick={editShowPage}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </section>
  );
};

export default Flavor;
