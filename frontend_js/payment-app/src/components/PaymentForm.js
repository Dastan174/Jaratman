import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from './Api'; // Путь к вашему файлу с функцией createPaymentIntent

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { client_secret } = await createPaymentIntent(amount);
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // Дополнительные детали платежа, например, имя плательщика
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Платеж успешно завершен
      setPaymentMessage('Платеж успешно завершен');
    } catch (error) {
        setPaymentMessage('Произошла ошибка при создании или обработке платежа');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Сумма (в центах):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <CardElement />
        <button type="submit">Оплатить</button>
      </form>
      {paymentMessage && <p>{paymentMessage}</p>}
    </div>
  );
};

export default PaymentForm;