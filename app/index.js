import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import { registerScreens } from './src-app/modules/screens';
import configureStore from './src-app/core/store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Login',
        title: 'Login'
    },
    animationType: 'none' // add transition animation to root change: 'none', 'slide-down', 'fade'
});




