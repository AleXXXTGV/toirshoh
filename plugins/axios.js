import axios from 'axios';

// Создаем инстанс axios с базовыми настройками, такими как базовый URL и другие опции
const api = axios.create({
  baseURL: 'https://fleet-api.taxi.yandex.net', // Замените на базовый URL вашего API
  headers: {
    'X-Client-ID': '2c49c8fae8ac4b4ca014fa7f8e61d28f', // Замените YOUR_API_KEY на ваш API ключ
    'X-API-Key': 'rnBCNEzowpYJHuO0DfjNQdvbNeqFvXvMGJA',
  }
});

export default ({ app }, inject) => {
  inject('api', api);
};