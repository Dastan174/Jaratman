import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Замените на адрес вашего Flask-сервера

export const createPaymentIntent = async (amount: number) => {
    try {
        const response = await axios.post(`${API_URL}/stripe/create-payment-intent`, { amount });
        return response.data;
    } catch (error) {
        throw error;
    }
};