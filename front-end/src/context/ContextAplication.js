import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextAplication = createContext();

const AplicationProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    orders,
    setOrders,
    order,
    setOrder,
  };

  return (
    <ContextAplication.Provider value={ context }>
      {children}
    </ContextAplication.Provider>
  );
};

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AplicationProvider;
