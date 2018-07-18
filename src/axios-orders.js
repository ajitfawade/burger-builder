import axios from 'axios';

const instance = axios;

instance.defaults.baseURL = 'https://react-my-burger-17372.firebaseio.com/';

export default instance;