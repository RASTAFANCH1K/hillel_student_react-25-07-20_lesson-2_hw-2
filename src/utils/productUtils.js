import { v4 as uuidv4 } from 'uuid';

export const onAddProduct = (products, productProperties) => {
  const product = {
    id: uuidv4(),
    ...productProperties
  };

  return [ ...products, product ];
};

export const onDeleteProduct = (products, id) => (
  products.filter(products => products.id !== id)
);

export const onDeleteSelectedProducts = products => (
  products.filter(product => !product.selected)
);

export const updateProduct = (products, productProperties) => (
  products.map((product) => product.id === productProperties.id ? productProperties : product)
);

export const calculateTotalPrice = products => (
  products.reduce((total, { price }) => total + parseFloat(price), 0)
);

export const calculateSelectedTotalPrice = products => (
  products
    .filter(({ selected }) => selected)
    .reduce((total, { price }) => total + parseFloat(price), 0)
);

export const isNumber = input => !isNaN(input);