import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductForm.module.scss';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    const { onAddProduct, isNumber } = this.props;

    const defaultCategory = props.categories ? props.categories[0].name : 'Uncategorized';

    this.state = {
      name: '',
      description: '',
      category: defaultCategory,
      price: ''
    };

    this.setDefaultState = () => {
      this.setState({
        name: '',
        description: '',
        category: defaultCategory,
        price: ''
      });
    };

    this.onAddProduct = e => {
      e.preventDefault();
  
      const { name, description, price } = this.state;

      if (name && description && price > 0) {
        onAddProduct(this.state);
      }
  
      this.setDefaultState();
    };

    this.onChange = ({ target }) => {
      this.setState({
        [target.name]: target.value
      })
    };
  
    this.onPriceChange = ({ target }) => {
      const value = target.value.replace(',', '.');
      if (!isNumber(value)) return;
  
      this.setState({
        [target.name]: value,
      });
    };
  }

  render() {
    const { name, description, category, price } = this.state;

    const { categories } = this.props;

    return (
      <div>
        <form onSubmit={ this.onAddProduct }>
          <div className={ styles.groups }>
            <input 
              className={ styles.control }
              placeholder="Name"
              name="name"
              value={ name }
              onChange={ this.onChange }
            />
          </div>
          <div className={ styles.groups }>
            <input 
              className={ styles.control }
              placeholder="Description"
              name="description"
              value={ description }
              onChange={ this.onChange }
            />
          </div>
          <div className={ styles.groups }>
            <select 
              className={ `${styles.control} ${styles.select}` }
              name="category"
              value={ category }
              onChange={ this.onChange }>
              <option key="none" value=""></option>
              { categories.map(({ id, name }) => <option key={ id } value={ name }>{ name }</option>) }
            </select>
          </div>
          <div className={ styles.groups }>
            <input 
              className={ styles.control }
              placeholder="Price"
              name="price"
              value={ price }
              onChange={ this.onPriceChange }
            />
          </div>
          <button className={ styles.btn } type="submit">Add Product</button>
        </form>
      </div>
    )
  }
};

ProductForm.defaultProps = {
  categories: []
};

ProductForm.propTypes = {
  categories: PropTypes.array,
  onAddProduct: PropTypes.func,
  validateNumericInput: PropTypes.func
};