import { Navigation } from 'react-native-navigation';
import App from './App';
import Sub from './Sub';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Sub', () => Sub);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'App',
        title: 'App'
    },
    animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
