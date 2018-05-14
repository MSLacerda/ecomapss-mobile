import { Navigation } from 'react-native-navigation';

import {HttpProviderInterceptor} from './src-app/providers/HttpProvider';

import App from './App';
import Sub from './src-app/screens/Sub';
import Login from './src-app/screens/Login';
import Buttons from './src-app/screens/Buttons';
import MyCards from './src-app/screens/MyCards';


Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Sub', () => Sub);
Navigation.registerComponent('Buttons', () => Buttons);
Navigation.registerComponent('MyCards', () => MyCards);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Login',
        title: 'Login'
    },
    animationType: 'none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});


// lsof -i :8081 
// kill -9 <PID>  
//HTTP INTERCEPTOR USE EXAMPLE

HttpProviderInterceptor.configBeforeRequest((config) => {
    config['headers']['authorization'] = 'IGOR';
    console.log('Interceptei', config);
});

HttpProviderInterceptor.configOnRequestError((error) => {
    switch (error.status){
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
