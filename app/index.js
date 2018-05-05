import { Navigation } from 'react-native-navigation';
import App from './App';
import Sub from './src-app/screens/Sub';
import Buttons from './src-app/screens/Buttons'
import MyCards from './src-app/screens/MyCards'

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Sub', () => Sub);
Navigation.registerComponent('Buttons', () => Buttons);
Navigation.registerComponent('MyCards', () => MyCards);



Navigation.startSingleScreenApp({
    screen: {
        screen: 'App',
        title: 'App'
    },
    animationType: 'none' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});


// lsof -i :8081 
// kill -9 <PID>  