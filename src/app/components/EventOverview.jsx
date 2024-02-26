import Image from 'next/image';
import React from 'react';
import { IMAGES } from '../assets';

const EventOverview = () => {
	return (
		<section className="flex py-20 items-center">
			<div className="shadow-lg h-fit rounded-xl">
				<Image src={IMAGES.overview} />
			</div>
			<div className="w-[60%] p-10">
				<div className="text-4xl font-extrabold text-center">
					Event Overview
				</div>
				<div className="text-gray-600">
					The banking industry worldwide is undergoing phenomenal change, giving
					the banks an opportunity to relook into their existing business models
					and take a huge leap towards the future. The shift in consumers'
					digital experience, adoption of next-gen technologies, transformation
					of customer service to customer engagement, mobile workforce with a
					need to 'right-size' the branch network are all opportunities for
					regional banks to seize and accelerate the shift to digital.
					<br />
					<br />
					<span className="text-black-800 font-bold">
						The 4th Annual Future Banks Summit KSA 2023
					</span>{' '}
					will showcase the latest innovations and practical case studies, along
					with interactive panel discussions designed to guide the banking
					sector in KSA in identifying the right strategies to overcome
					long-standing resistance and be future-ready!
					<br />
					<br />
					An exciting and timely conference is on its way, discussing the future
					of the financial industry in KSA driven by innovation and digital
					advancements, with the adoption of technologies such as AI, digital
					transformation, digital banking, banking in the metaverse, intelligent
					automation, regtech, data analytics, cloud migration, cyber security,
					digital payments models, along with tech-driven redefined business
					continuity planning strategies.
				</div>
			</div>
		</section>
	);
};

export default EventOverview;
