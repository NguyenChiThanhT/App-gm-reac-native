import axios from 'axios';
import * as api from './api';

export default function callApi(url, method='POST', body={}, headers) {
    const options = {
        method: method,
        data: body,
        headers: headers,
        url: `${api.API_URL}${url}`,
    };
    return axios(options).then(respone => respone).catch(error => error);
}