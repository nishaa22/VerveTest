import Image from 'next/image';
import React from 'react';
import { IMAGES } from '../assests/Images';

function Meet() {
	return (
		<div className="flex bg-[#d4527d] pt-20 pb-20 pl-40 pr-40 gap-10">
			<div className="w-[900px] mt-10">
				<h3 className="text-[white] font-[800] text-2xl">WHO WILL YOU MEET?</h3>
				<ol
					className="text-[white] font-[600] flex flex-col gap-5 mt-10 text-xl"
					style={{ listStyleType: 'circle' }}
				>
					<li>CXOs, VPs, Directors</li>
					<li>Chief Marketing Officers</li>
					<li>Heads of Customer Experience & UX</li>
					<li>Heads of Customer Insights & Analytics</li>
					<li>Heads of Digital Transformation</li>
					<li>Heads of Customer Loyalty & Brand Loyalty</li>
					<li>Heads of Customer Value & Loyalty Partnerships</li>
					<li>Heads of Rewards and Loyalty</li>
				</ol>
			</div>
			<div>
				<Image
					src={IMAGES.meetImage}
					style={{ borderRadius: '10px' }}
					width={'400px'}
					height={'400px'}
				/>
			</div>
		</div>
	);
}

export default Meet;
