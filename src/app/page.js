import Image from 'next/image';
import EventOverview from './components/EventOverview';
import Highlights from './components/Highlights';
import WhoMeet from './components/WhoMeet';

export default function Home() {
	return (
		<main className="px-40 py-4">
			<EventOverview />
			<Highlights />
			<WhoMeet />
		</main>
	);
}
