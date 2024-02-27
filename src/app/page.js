import EventOverview from './components/EventOverview';
import Highlights from './components/Highlights';
import WhoMeet from './components/WhoMeet';
import WhyAttend from './components/WhyAttend';

export default function Home() {
	return (
		<main className="px-40 py-4">
			<EventOverview />
			<Highlights />
			<WhoMeet />
			<WhyAttend />
		</main>
	);
}
