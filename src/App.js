import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Routes/Home';
import { Product } from './components/Routes/Product';
import { ProductList } from './components/Routes/ProductList';
import { Register } from './components/Routes/Register';
import { Login } from './components/Routes/Login';
import { Cart } from './components/Routes/Cart';

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' render={() => <Home />} />
				<Route path='/products/:category' render={() => <ProductList />} />
				<Route path='/product/:id' render={() => <Product />} />
				<Route path='/register' render={() => <Register />} />
				<Route path='/login' render={() => <Login />} />
				<Route path='/cart' render={() => <Cart />} />
			</Switch>
		</Router>
	);
};
