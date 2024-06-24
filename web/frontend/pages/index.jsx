import { Layout, Page } from '@shopify/polaris';
import { Card, OrderDetails, OrderGraphs } from '../components';
import { useAuthenticatedFetch } from '../hooks';
import { useState, useEffect } from 'react';

export default function HomePage() {
	let fetch = useAuthenticatedFetch();
	const [products, setProducts] = useState(0);
	const [collections, setCollections] = useState(0);
	const [orders, setOrders] = useState(0);
	const [fulfilled, setFulfilled] = useState(0);
	const [remains, setRemains] = useState(0);

	async function fetchProducts() {
		try {
			let request = await fetch('/api/products/count', {
				Method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			let response = await request.json();

			setProducts(response.count);
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchCollections() {
		try {
			let request = await fetch('/api/collection/count', {
				Method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			let response = await request.json();

			setCollections(response.count);
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchOrders() {
		try {
			let request = await fetch('/api/orders/all', {
				Method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			let response = await request.json();
			setOrders(response.data.length);
			let fulfilled = response.data.filter((item) => item.fulfillment_status === 'fulfilled');
			setFulfilled(fulfilled.length);

			setRemains(response.data.length - fulfilled.length);
			
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchProducts();
		fetchCollections();
		fetchOrders();
	}, []);

	return (
		<Page fullWidth>
			<div className='home-section'>
				<div className='graphs-section'>
					<OrderGraphs />
				</div>

				<div className='cards-section'>
					<Card title='Total Orders' count={orders} orderCard />
					<Card title='Fullfilled Orders' count={fulfilled} fulfilledCard />
					<Card title='Remaining Orders' count={remains} remainsCard />
					<Card title='Total Products' count={products} productCard />
					<Card title='Total Collections' count={collections} collectionCard />
				</div>

				<div className='order-details-section'>
					<OrderDetails />
				</div>
			</div>
		</Page>
	);
}
