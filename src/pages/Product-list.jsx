


import React,{useState,useEffect,Fragment} from 'react';
import Commerce from '@chec/commerce.js';
import ProductList from './ProductList';


const ListProduct = () => {

	
	const commerce = new Commerce('pk_test_51726b927a514495f7c3c52a3f1cf168c39120112ff89')
 
	const [products, setProducts] = useState([])
  
	useEffect(() => {
	  commerce.products.list()
		.then(res => {
		  setProducts(res.data)        
		})
		.catch(err => console.log(err))
  })
  
  
  return (
	<Fragment>
        
	<div className="row">
	   {products.map((product) => (
		  <ProductList key={product.key} product={product} />
	   ))}
	</div>
 </Fragment>
  );
};

export default ListProduct;