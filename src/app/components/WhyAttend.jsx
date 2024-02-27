import React from 'react';
import { IMAGES } from '../assets';
import Image from 'next/image';

const WhyAttend = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="w-[50%]">
				<h2 className="text-center font-semibold text-3xl py-3">Why Attend</h2>
				<div className="leading-8">
					<span className="font-semibold">
						The 4th Annual Future Banks Summit KSA 2023
					</span>
					will highlight the enabling role of digitalization in reshaping the
					future of banking. The pandemic has forced digital acceleration at
					such a massive scale that banks are not just looking to transform but
					are forced to reimagine their business. Delegates will experience a
					power-packed agenda consisting of presentations, panel discussions,
					and keynotes from globally and regionally renowned speakers,
					panelists, and moderators.
				</div>
				<div className="leading-8">
					If you are ready to innovate and join the ranks of the brightest minds
					in the industry while resonating with the following compelling reasons
					to attend, then register today:
				</div>
			</div>
			<div>
				<Image src={IMAGES.attend} width={500} height={400} />
			</div>
		</div>
	);
};

export default WhyAttend;
