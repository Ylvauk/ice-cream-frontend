import React, { useEffect, useState } from 'react';
import Flavor from './FlavorItem';
import axios from 'axios';

const FlavorList = () => {
	const [flavors, setFlavors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (!flavors.length) {
				setLoading(false);
			}
		}, 5000);
		
		// Write your GET fetch() or axios() request here

		
		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !flavors.length) {
		return <h2>Loading...</h2>;
	}

	if (!loading && !flavors.length) {
		return <h2>Oops, something went wrong. Please try again later! </h2>;
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
