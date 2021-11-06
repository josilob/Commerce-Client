import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Home } from './Routes/Home';
import { Product } from './Routes/Product';
import { ProductList } from './Routes/ProductList';
import { Register } from './Routes/Register';
import { Login } from './Routes/Login';
import { Cart } from './Routes/Cart';
import { Success } from './Routes/Success';
import { useSelector } from 'react-redux';

export const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/products/:category' component={ProductList} />
				<Route path='/product/:id' component={Product} />
				<Route path='/register'>{user ? <Redirect to='/' /> : <Register />}</Route>
				<Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
				<Route path='/cart' component={Cart} />
				<Route path='/success' component={Success} />
			</Switch>
		</Router>
	);
};
