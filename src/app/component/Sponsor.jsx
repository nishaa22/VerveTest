import React from 'react';

const Sponsor = () => {
	const sponsorData = [
		{
			id: 1,
			heading: 'WHY SPONSOR?',
			boldText: '2nd Annual CX & Loyalty Summit & Awards MENA 2023,',
			text: 'presents the perfect opportunity for solution providers to engage with key decision makers such as CXOs, Heads of Marketing, Heads of Customer Experience, Heads of Loyalty Programs etc from diverse industries such as BFSI, Retail & E-Commerce, Telco, Hospitality, Travel & Tourism, Aviation, CPG etc to differentiate their product and put forward their value proposition in this crowded marketplace. Some of the key reasons why you should sponsor:',
		},
		{
			id: 2,
			heading: 'DEMONSTRATE THOUGHT LEADERSHIP',
			text: 'Position your company as a thought leader by delivering a standalone presentation or moderating a panel discussion to a pre-qualified audience comprising of decision makers.',
		},
		{
			id: 3,
			heading: 'NETWORK & GENERATE LEADS',
			text: 'Optimise your networking opportunities by getting right in front of key decision makers that are prequalified based on seniority, budget availability and motivation to learn about latest technologies',
		},
		{
			id: 4,
			heading: 'BRAND POSITIONING',
			text: 'Establish, strengthen and re-position your brand in front of CMOs, Heads of CX & Loyalty who are looking to re-align and strengthen their CX & Loyalty strategies',
		},
	];
	return (
		<div className="py-20">
			{sponsorData.map((val) => {
				return (
					<div>
						<h2 className="text-[#cc3366] text-2xl py-3 font-semibold">
							{val.heading}
						</h2>
						<p className="py-3">
							<span className="font-semibold">{val?.boldText}</span>
							<span> {val.text}</span>
						</p>
						{val.id >= 2 && <hr className="p-[0.4px] bg-black" />}
					</div>
				);
			})}
			<div className="text-center">
				<h1 className="text-[#cc3366] text-2xl py-3 font-semibold">
					ARE YOU INTERESTED TO SPONSOR OUR EVENT?
				</h1>
				<div className="text-xl">
					To find out more about the ROI-driven sponsorship and exhibition
					opportunities, contact us now at{' '}
					<span className="text-[#ee3042] font-semibold">+971 4 243 4677</span>{' '}
					or
					<span className="text-[#ee3042] font-semibold">
						email: info@verve-management.com
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sponsor;
