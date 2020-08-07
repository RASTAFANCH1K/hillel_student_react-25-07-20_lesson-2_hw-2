import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductItem.module.scss';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
      category: '',
      price: 0,
      selected: false,
      edited: false
    };

    this.setDefaultState = () => {
      this.setState({
        id: '',
        name: '',
        description: '',
        category: '',
        price: 0,
        selected: false,
        edited: false
      });
    };

    this.onDeleteProduct = e => {
      e.stopPropagation();

      const { product, onDeleteProduct } = this.props;
  
      onDeleteProduct(product.id);
    };

    this.selectProduct = () => {
      const { product, updateProduct } = this.props;

      updateProduct({
        ...product,
        selected: !product.selected,
      });

      this.setDefaultState();
    };

    this.editProduct = e => {
      e.stopPropagation();

      const { product } = this.props;

      if (!this.state.id) {
        this.setState({
          ...product,
          edited: true,
        });
      } else {
        this.setDefaultState();
      }
    };

    this.saveProduct = e => {
      e.stopPropagation();

      const { updateProduct } = this.props;

      if (!this.state.id) return;

      updateProduct({
        ...this.state,
        edited: false
      });

      this.setDefaultState();
    };

    this.onInputClick = e => e.stopPropagation();

    this.onChange = ({ target }) => {
      this.setState({
        [target.name]: target.value
      });
    };
  }

  render() {
    const product = this.state.id ? this.state : this.props.product;

    const { name, description, category, price, selected, edited } = product;
    
    return (
      <div
        className={ selected ? styles.itemSelected : styles.items }
        onClick={ this.selectProduct }>
        {
          selected && edited
            ? <input name="name" value={ name } onClick={ this.onInputClick } onChange={ this.onChange } />
            : <div className={ styles.item }>{ name }</div>
        }
     
        {
          selected && edited
            ? <input name="description" value={ description } onClick={ this.onInputClick } onChange={ this.onChange } />
            : <div className={ styles.item }>{ description }</div>
        }
        {
          selected && edited
            ? <select
                name="category"
                value={ category }
                onClick={ this.onInputClick }
                onChange={ this.onChange }
              >
                { this.props.categories.map(({ id, name }) => <option key={ id } value={ name }>{ name }</option>) }
              </select>
            : <div className={ styles.item }>{ category }</div>
        }
        {
          selected && edited
            ? <input name="price" value={ price } type="number" onClick={ this.onInputClick } onChange={ this.onChange } />
            : <div className={ styles.item }>{ price }</div>
        }
        <div className={ styles.item }>
          {
            selected 
              ? <div>
                  <button className={ styles.btn } onClick={ this.editProduct }>Edit</button>
                  <button className={ styles.btn } onClick={ this.saveProduct }>Save</button>
                  <button className={ styles.btn } onClick={ this.onDeleteProduct }>Delete</button>
                </div>  
              : <button className={ styles.btn } onClick={ this.onDeleteProduct }>Delete</button>
          }
        </div>
      </div>
    )
  }
};

ProductItem.defaultProps = {
  product: {},
  categories: [],
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
  }),
  categories: PropTypes.array,
  onDeleteProduct: PropTypes.func,
  updateProduct: PropTypes.func
};