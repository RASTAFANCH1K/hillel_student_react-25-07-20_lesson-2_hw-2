import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ProductItem } from '../index';

import styles from './ProductList.module.scss';

export default class ProductList extends Component {
  // constructor(props) {
  //   super(props);

  //   const { products } = this.props;

  //   console.log(products)

  //   this.amountOfProducts = () => {
  //     products
  //   }
  // }

  render() {
    const { products, categories, onDeleteProduct, updateProduct } = this.props;

    return (
      <div className={ styles.list }>
        <div className={ styles.titles }>
          <div className={ styles.title }>Product</div>
          <div className={ styles.title }>Description</div>
          <div className={ styles.title }>Category</div>
          <div className={ styles.title }>Price</div>
          <div className={ styles.title }></div>
        </div>
        {
          Array.isArray(products) && products.map( product => {
            return (
              <ProductItem 
                key={ product.id } 
                product={ product }
                categories={ categories }
                onDeleteProduct={ onDeleteProduct }
                updateProduct={ updateProduct }
              />
            )
          })
        }
      </div>
    )
  }
};

ProductList.defaultProps = {
  products: [],
  categories: [],
};

ProductList.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.array,
  onDeleteProduct: PropTypes.func,
  updateProduct: PropTypes.func
};
