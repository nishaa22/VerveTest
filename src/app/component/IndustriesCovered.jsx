import React from 'react';
import { IMAGES } from '../assests/Images';
import Image from 'next/image';

const IndustriesCovered = () => {
	const industriesData = [
		{ id: 1, src: IMAGES.i1, text: 'BFSI' },
		{ id: 2, src: IMAGES.i2, text: 'RETAIL & E-COMMERCE' },
		{ id: 3, src: IMAGES.i3, text: 'TELECOMMUNICATION' },
		{ id: 4, src: IMAGES.i4, text: 'HOSPITALITY' },
		{ id: 5, src: IMAGES.i5, text: 'TRAVEL & TOURISM' },
		{ id: 6, src: IMAGES.i6, text: 'AVIATION' },
		{ id: 7, src: IMAGES.i7, text: 'FMCG & CPG' },
		{ id: 8, src: IMAGES.i8, text: 'OTHERS' },
	];
	return (
		<div
			className="flex items-center p-32 justify-between"
			style={{
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				background:
					'url(https://cxloyaltymena.com/wp-content/uploads/backgrounds/cx-loyalty-summit-mena-2020-bg2.png)',
			}}
		>
			<div className="text-5xl">INDUSTRIES COVERED</div>
			<div className="flex flex-wrap justify-end gap-3">
				{industriesData.map((val) => {
					return (
						<div className="flex flex-col justify-center items-center">
							<Image src={val.src} width={200} height={200} />
							<div>{val.text}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default IndustriesCovered;
