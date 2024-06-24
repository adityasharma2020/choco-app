import React, { useState } from 'react';
import { Layout, LegacyCard, Page } from '@shopify/polaris';
import { storeData } from '../data';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export const OrderGraphs = () => {
	const [data, setData] = useState({
		labels: storeData.map((d) => d.year),
		datasets: [
			{
				label: 'Total Orders',
				data: storeData.map((d) => d.order),
				backgroundColor: ['#008170', '#000000', '#8e8e8e', '#81BF37'],
			},
		],
	});
	return (
		<Layout>
			<Layout.Section oneHalf>
				<LegacyCard sectioned title='Total Orders'>
					<Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
				</LegacyCard>
			</Layout.Section>
			<Layout.Section oneThird>
				<LegacyCard sectioned title='Completed Orders'>
					<Doughnut
						data={data}
						options={{ responsive: true, maintainAspectRatio: false }}
					/>
				</LegacyCard>
			</Layout.Section>
			<Layout.Section oneThird>
				<LegacyCard sectioned title='Remaining Orders'>
					<Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
				</LegacyCard>
			</Layout.Section>
		</Layout>
	);
};
