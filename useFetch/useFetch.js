import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {
		setState({
			...state,
			isLoading: true,
		});
		const response = await fetch(url);
		const json = await response.json();
		setState({
			data: json,
			isLoading: false,
			hasError: null,
		});
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
