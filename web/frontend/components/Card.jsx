import { Layout, LegacyCard } from '@shopify/polaris';
import React from 'react';

export const Card = ({
	title,
	count,
	productCard,
	collectionCard,
	orderCard,
	fulfilledCard,
	remainsCard,
}) => {
	return (
		<>
			<Layout>
				<Layout.Section>
					<LegacyCard title={title} sectioned>
						<h2 className='h2'>
							{productCard && count}
							{collectionCard && count}
							{orderCard && count}
							{fulfilledCard && count}
							{remainsCard && count}
						</h2>
					</LegacyCard>
				</Layout.Section>
			</Layout>
		</>
	);
};
