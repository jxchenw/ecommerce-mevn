import home from './components/home'
import products from './components/products'
import product from './components/product'

export default [
	{ path: '/', component: home },
	{ path: '/products', component: products },
	{ path: '/product/:id', component: product }
]