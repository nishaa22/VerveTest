import Image from 'next/image';
import React from 'react';
import { IMAGES } from '../assets';

const WhoMeet = () => {
	return (
		<section className="py-20">
			<div className="text-center text-3xl py-4 font-semibold">
				Who Will You Meet?
			</div>
			<div className="flex justify-between items-center">
				<div>
					<ol>
						<li>CIOs, CTOs, Heads of Technology</li>
						<li>Chief Digital Officers, of Digital Transformation</li>
						<li>Chief Marketing Officers, Heads of Marketing</li>
						<li>Heads of Retail Banking</li>
						<li>Heads of Corporate Banking</li>
						<li>Heads of Customer Experience</li>
						<li>Heads of Cards & Payments</li>
						<li>Head of Data & Analytics</li>
						<li>Heads of Governance & Compliance</li>
					</ol>
				</div>
				<div className="flex justify-start items-center">
					<Image src={IMAGES.meet} height={350} width={500} />
				</div>
			</div>
		</section>
	);
};

export default WhoMeet;
