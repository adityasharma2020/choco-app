import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthenticatedFetch } from '../hooks';

export const TopBar = () => {
	let fetch = useAuthenticatedFetch();
	let [storeName, setStoreName] = useState('');

	useEffect(() => {
		const fetchStore = async () => {
			try {
				let request = await fetch('/api/store/info', {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				let response = await request.json();
				console.log(response);
				setStoreName(response.data[0].name);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStore();
	}, []);

	return (
		<div className='topbar-section'>
			<div className='logo-block'>
				<img className='logo' src='../assets/logo.png' alt='logo' />
				<h1 className='text-bold h4'>{storeName ? storeName : 'Store Name'}</h1>
				<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
					Sales
				</NavLink>
				<NavLink to='/products' className={({ isActive }) => (isActive ? 'active' : '')}>
					Products
				</NavLink>
			</div>
		</div>
	);
};
