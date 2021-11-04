import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Home } from './components/Routes/Home';
import { Product } from './components/Routes/Product';
import { ProductList } from './components/Routes/ProductList';
import { Register } from './components/Routes/Register';
import { Login } from './components/Routes/Login';
import { Cart } from './components/Routes/Cart';
import { Success } from './components/Routes/Success';

export const App = () => {
	const user = true;
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
