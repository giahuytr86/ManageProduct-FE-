import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log(API_BASE_URL);

export const getShoes = async() => {
    return axios.get(API_BASE_URL + '/api/products');
}

export const insertCustomer = async(name, phonenumber, address, country, city, cart, totalPrice) => {
    return await axios.post(API_BASE_URL+'/new-customer', { name: name, phonenumber: phonenumber, address: address, country: country,
                                                                city: city, cart: cart, totalPrice: totalPrice })
}

export const insertOrder = async(customerId, totalPrice) => {
    return await axios.post(API_BASE_URL+'/new-order', { customerId: customerId, totalPrice: totalPrice})
}

export const insertOrderDetail = async(orderId, cart) => {
    return await axios.post(API_BASE_URL+'/new-order-detail', { orderId: orderId, cart: cart})
}