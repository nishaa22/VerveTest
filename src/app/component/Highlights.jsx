import React from 'react';
import Sponsor from './Sponsor';

const Highlights = () => {
	const highlightData = [
		{
			id: 1,
			text: 'Corporate Culture Focus: Top tips to successfully spearhead Customer Experience Transformation internally ',
		},
		{
			id: 2,
			text: 'Brand communities driving Loyalty, Retention & Advocacy - How to transform your loyal customers to brand advocates',
		},
		{
			id: 3,
			text: 'Delivering the ‘Unattainable’ CX dream and transformation towards Hyper Personalization',
		},
		{
			id: 4,
			text: 'Unveiling how exceptional brands retain their customers and build loyalty',
		},
		{
			id: 5,
			text: 'How to simultaneously improve Customer Experience and Operational Excellence to make customers loyal',
		},
		{
			id: 6,
			text: 'Using Data, CRM, and Marketing Automation to drive friction-free experiences',
		},
		{
			id: 7,
			text: 'Multichannel Focus: Strategies to deliver a world-class customer experience across multiple channels',
		},
		{
			id: 8,
			text: 'Driving Customer Loyalty and Top-line revenue through Gamification',
		},
		{
			id: 9,
			text: 'Strategies to tailor the multi-channel experience while delivering a consistent Brand promise',
		},
		{
			id: 10,
			text: '	Linking Voice of the Employee and Voice of the Customer - A critical key to CX success',
		},
		{
			id: 11,
			text: 'Using social media to improve brand perception and shape the Customer Experience',
		},
		{
			id: 12,
			text: 'Exploring advances in Customer Analytics and Segmentation – Getting to really know your customer',
		},
		{
			id: 13,
			text: 'Ensuring effective complaint handling as the foundation of a Customer Retention Strategy',
		},
		{
			id: 14,
			text: 'How loyalty programs boost revenue and how to measure it',
		},
	];
	return (
		<div className="bg-[#e1f6fb] text-black p-36">
			<div className="text-3xl font-bold">Topic Highlights</div>
			<ol style={{ listStyleType: 'circle' }} className="highlight">
				{highlightData.map((val) => {
					return <li key={val.id}>{val.text}</li>;
				})}
			</ol>
			<Sponsor />
		</div>
	);
};

export default Highlights;
