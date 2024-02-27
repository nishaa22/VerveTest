import Attend from './component/Attend';
import EventOverview from './component/EventOverview';
import Highlights from './component/Highlights';
import IndustriesCovered from './component/IndustriesCovered';
import Meet from './component/Meet';
import Sponsor from './component/Sponsor';

export default function Home() {
	return (
		<main className=" min-h-screen">
			<EventOverview />
			<Meet />
			<IndustriesCovered />
			<Attend />
			<Highlights />
		</main>
	);
}
