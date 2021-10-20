import Announcement from './Announcement';
import { Categories } from './Categories';
import { Navbar } from './Navbar';
import { Slider } from './Slider';

export const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
		</div>
	);
};
