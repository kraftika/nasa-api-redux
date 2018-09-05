import axios from 'axios';

export default function fetchData() {
    const API_KEY = 'eqXmaAJ0nG8HxN2cb2l03tFUJXNuXGmD3lQ5aCE1';
    const API_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
    const request = axios.get(API_POINT + API_KEY);

    return {
        type: 'FETCH_DATA',
        payload: request
    }
}