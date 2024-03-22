import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

export const createPaymentIntent = async (amount) => {
    try {
        const response = await axios.post(`${API_URL}/stripe/create-payment-intent/`, { amount });
        return response.data;
    } catch (error) {
        throw error;
    }
};