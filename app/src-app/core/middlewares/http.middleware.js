import { HttpProviderInterceptor } from '../../resource/HttpProvider';

export default httpMiddleware = function() {

    HttpProviderInterceptor.configBeforeRequest((config) => {
        config['headers']['authorization'] = 'IGOR';
        console.log('Interceptei', config);
    });

    HttpProviderInterceptor.configOnRequestError((error) => {
        switch (error.status) {
            case 401:
                console.log('sem permissao');
                break;
            case 403:
                console.log('sem permissao, va para o login');
                break;
            case 404:
                console.log('nao encontrato');
                break
        }
    });

    //Use the next line to allow network debug
    GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}
