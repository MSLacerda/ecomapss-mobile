import { Navigation } from 'react-native-navigation';

import Login from './user/Login.screen';
import MyCards from './shared/MyCards.screen';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('Login', () => Login, store, Provider);
	Navigation.registerComponent('MyCards', () => MyCards, store, Provider);
}
