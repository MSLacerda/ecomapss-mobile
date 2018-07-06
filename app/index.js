import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import { registerScreens } from './src-app/modules/screens';
import configureStore from './src-app/core/store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'MyCards',
		title: 'Movies',
		navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]
	},
	drawer: {
		left: {
			screen: 'Drawer'
		}
	}
});
