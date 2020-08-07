import React, { Component } from 'react';

import { 
  Logo, 
  ProductList, 
  TotalCounter, 
  ProductForm 
} from '../index';

import { 
  onAddProduct, 
  onDeleteProduct, 
  onDeleteSelectedProducts, 
  updateProduct,
  calculateTotalPrice,
  calculateSelectedTotalPrice,
  isNumber
} from '../../utils/index';

import styles from './App.module.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    const { productMocks } = this.props;

    this.state = {
      products: productMocks,
      total: calculateTotalPrice(productMocks),
      selectedTotal: 0
    };

    this.onAddProduct = productProperties => {
      this.setState(({ products }) => {
        const arrOfProducts = onAddProduct(products, productProperties);

        return {
          products: arrOfProducts,
          total: calculateTotalPrice(arrOfProducts),
          selectedTotal: calculateSelectedTotalPrice(arrOfProducts)
        }
      })
    };

    this.onDeleteProduct = id => {
      this.setState(({ products }) => {
        const arrOfProducts = onDeleteProduct(products, id);

        return {
          products: arrOfProducts,
          total: calculateTotalPrice(arrOfProducts),
          selectedTotal: calculateSelectedTotalPrice(arrOfProducts)
        }
      })
    };

    this.onDeleteSelectedProducts = () => {
      this.setState(({ products }) => {
        const arrOfProducts = onDeleteSelectedProducts(products);
       
        return {
          products: arrOfProducts,
          total: calculateTotalPrice(arrOfProducts),
          selectedTotal: calculateSelectedTotalPrice(arrOfProducts)
        }
      })
    };

    this.updateProduct = productProperties => {
      this.setState(({ products }) => {
        const arrOfProducts = updateProduct(products, productProperties);

        return {
          products: arrOfProducts,
          total: calculateTotalPrice(arrOfProducts),
          selectedTotal: calculateSelectedTotalPrice(arrOfProducts)
        }
      })
    };

    this.amountOfProducts = () => {
      
    }
  }

  render() {
    const { products, total, selectedTotal } = this.state;
    const { categoryMocks } = this.props;

    return (
      <div className={ styles.container }>
        <Logo />
        <div className={ styles.title }>Fridge</div>
        <ProductList 
          products={ products } 
          categories={ categoryMocks } 
          onDeleteProduct={ this.onDeleteProduct } 
          updateProduct={ this.updateProduct }
        />
        <div className={ styles.btnRow }>
          <button className={ styles.btn } onClick={ this.onDeleteSelectedProducts }>Delete Selected</button>
          <TotalCounter products={ products } total={ total } selectedTotal={ selectedTotal } />
        </div>
        <ProductForm onAddProduct={ this.onAddProduct } categories={ categoryMocks } isNumber={ isNumber }/>
      </div>
    )
  }
};
