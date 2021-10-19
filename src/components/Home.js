import Announcement from './Announcement';
import { Navbar } from './Navbar';
import { Slider } from './Slider';

export const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
		</div>
	);
};
