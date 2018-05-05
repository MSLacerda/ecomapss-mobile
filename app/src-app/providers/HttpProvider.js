import axios from 'axios';

let _beforeRequest, _onRequestError, _afterResponse;

const isObject = (input) =>{
    return input !== null && typeof input === 'object';
}

export class HttpProviderInterceptor{

    static beforeRequest(config){
        if(_beforeRequest) _beforeRequest(config);
    }

    static configBeforeRequest(fnc){
        _beforeRequest = fnc;
    }

    static onRequestError(error){
        if(_onRequestError) _onRequestError(error);
    }

    static configOnRequestError(fnc){
        _onRequestError = fnc;
    }


    static afterResponse(response){
        if(_afterResponse) _afterResponse(response);
    }

    static configAfterResponse(fnc){
        _afterResponse = fnc;
    }

}


export class HttpProvider {

    resolveParam(param){
        if(isObject(param)){
            return JSON.stringify(param);
        }
        return param;
    }

    configQueryString(obj){
        if(!obj || !Object.keys(obj).length) return '';
        let queryStrings = '?';

        Object.keys(obj).forEach( (key, index) => {
            queryStrings += (index == 0 ? '' : '&') + key + '=' + this.resolveParam(obj[key]);
        });

        return queryStrings;
    }

    get(url, params, config){
        url += this.configQueryString(params);

        config == null && (config = {});
        config.headers == null && (config.headers = {});
        config.reqestUrl = url;

        HttpProviderInterceptor.beforeRequest(config);

        let _cfg = { ...config };

        var newPromise = new Promise((resolve, reject) =>{
            axios({..._cfg, method: 'get', url: url})
                .then( response => {
                    HttpProviderInterceptor.afterResponse(response);
                    resolve(response);
                })
                .catch( error => {
                    HttpProviderInterceptor.onRequestError(error.response);
                    reject(error.response);
                });
        });

        return newPromise;
    }

    requestBase(method, url, data, config){
        config == null && (config = {});
        config.headers == null && (config.headers = {});
        config.reqestUrl = url;

        HttpProviderInterceptor.beforeRequest(config);

        let _cfg = { ...config };

        var newPromise = new Promise((resolve, reject) =>{
            axios({..._cfg, method, url: url, data})
                .then( response => {
                    HttpProviderInterceptor.afterResponse(response);
                    resolve(response);
                })
                .catch( error => {
                    HttpProviderInterceptor.onRequestError(error.response);
                    reject(error.response);
                });
        });

        return newPromise;
    }

    post(url, data, config){
        return this.requestBase('post', url, data, config);
    }

    put(url, data, config){
        return this.requestBase('put', url, data, config);
    }

    del(url, data, config){
        return this.requestBase('delete', url, data, config);
    }


}