import Attend from "./component/Attend";
import EventOverview from "./component/EventOverview";
import Meet from "./component/Meet";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <EventOverview />
      <Meet />
      <Attend />
    </main>
  );
}
