import React, { useState } from 'react';
import { createPaymentIntent } from './index';

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [paymentMessage, setPaymentMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { client_secret } = await createPaymentIntent(amount);
      // Ваша логика для обработки client_secret, например, открыть модальное окно с формой оплаты
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
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <button type="submit">Оплатить</button>
      </form>
      {paymentMessage && <p>{paymentMessage}</p>}
    </div>
  );
};

export default PaymentForm;