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

export const App = () => {
	const user = true;
	return (
		<Router>
			<Switch>
				<Route exact path='/' render={() => <Home />} />
				<Route path='/products/:category' render={() => <ProductList />} />
				<Route path='/product/:id' render={() => <Product />} />
				<Route path='/register'>{user ? <Redirect to='/' /> : <Register />}</Route>
				<Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
				<Route path='/cart' render={() => <Cart />} />
			</Switch>
		</Router>
	);
};
