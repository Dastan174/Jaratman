import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from './Api';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createPaymentIntent(amount); 
      const { client_secret } = response;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement), 
        }
      });

      if (result.error) {
        setPaymentMessage('Произошла ошибка при оплате: ' + result.error.message);
      } else {
        setPaymentMessage('Платеж успешно выполнен!');
      }
    } catch (error) {
      setPaymentMessage('Произошла ошибка при создании платежа');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Сумма (в центах):
          <input
            type="string"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <CardElement />
        <button type="submit" disabled={!stripe}>Оплатить</button>
      </form>
      {paymentMessage && <p>{paymentMessage}</p>}
    </div>
  );
};

export default PaymentForm;