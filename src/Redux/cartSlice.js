import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0
	},
	reducers: {
		addProduct: (state, action) => {
			//cart quantity
			state.quantity += 1;
			state.products.push(action.payload);
			//payload quantity (number of items)
			state.total += action.payload.price * action.payload.quantity;
		},
		emptyCart: (state, action) => {
			state.products = [];
			state.total -= state.quantity;
			state.quantity -= state.quantity;
		}
	}
});

export const { addProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
