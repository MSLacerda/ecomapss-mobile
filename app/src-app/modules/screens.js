import { Navigation } from 'react-native-navigation';

import Login from './user/Login.screen';
import MyCards from './shared/MyCards.screen';
import Drawer from './shared/Drawer.screen';
import Example from './shared/AppIntroduction.screen'; 

 
// user one
export function registerScreens(store, Provider) {
	Navigation.registerComponent('Login', () => Login, store, Provider);
	Navigation.registerComponent('MyCards', () => MyCards, store, Provider);
	Navigation.registerComponent('Drawer', () => Drawer);
	// Navigation.registerComponent('Example', () => Example);
}

//  user admin
export function registerScreensAdmin(store, Provider) {
	// Navigation.registerComponent('Login', () => Login, store, Provider);
	// Navigation.registerComponent('MyCards', () => MyCards, store, Provider);
}