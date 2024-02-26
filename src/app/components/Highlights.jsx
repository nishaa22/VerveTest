'use client';
import React, { useState } from 'react';
import { hightlightData } from '../constant';
import Image from 'next/image';

const Highlights = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<section className="flex flex-wrap justify-center gap-10">
			{hightlightData.map((val) => {
				return (
					<div
						key={val.id}
						className={`relative w-[350px] p-10 rounded-tl-3xl flex items-center text-blue-800 justify-center flex-col ${
							currentIndex === val.id && 'bg-blue-500 text-white'
						}`}
						onMouseOver={() => setCurrentIndex(val.id)}
					>
						<div className="absolute top-0 left-0 rounded-tl-3xl w-fit h-fit p-3 text-white bg-pink-700">
							{val.id}
						</div>
						<Image className="-mt-10" src={val.src} />
						<div className="w-80 text-center mt-4">{val.text}</div>
					</div>
				);
			})}
		</section>
	);
};

export default Highlights;
