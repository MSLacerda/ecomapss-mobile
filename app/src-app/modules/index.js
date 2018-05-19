import { Navigation } from 'react-native-navigation';

import Drawer from './Drawer';
// ...

export function registerScreens(store, Provider) {
	Navigation.registerComponent('movieapp.Movie', () => Movie, store, Provider);
	// ...
}
