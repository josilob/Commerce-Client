import { Announcement } from '../Announcement';
import { Categories } from '../Categories';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Newsletter } from '../Newsletter';
import { Products } from '../Products';
import { Slider } from '../Slider';

export const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};
