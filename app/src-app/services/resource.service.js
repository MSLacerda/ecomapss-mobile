import {
    Platform,
    AsyncStorage,
} from 'react-native';

const url = 'https://backeco.herokuapp.com'
const config = {
    headers : new Headers({
        'Content-Type': 'application/json'
    })
}

export default class ResouceService {

    static get(resource) {
        const uri = url + resource;
        config = Object.assign({}, config, { method: 'get' })

        return fetch(uri, config)
            .then(resposta => {
                if (resposta.ok)
                    return resposta.json();
                throw new Error('Não foi possível completar a operação');
            })
    }

    static post(resource, dados) {
        const uri = url + resource;
        config = Object.assign({}, config, { method: 'post' })

        return fetch(uri, config)
            .then(resposta => {
                if (resposta.ok)
                    return resposta.json();
                throw new Error('Não foi possível completar a operação');
            })
    }
}
