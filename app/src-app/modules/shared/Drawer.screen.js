import React, { Component, PropTypes } from 'react';
import {
	View,
	Image
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	ListItem,
	Switch
} from 'native-base';
import BackgroundImage from '../shared/background.component'
import styles from './styles/Drawer'

class Drawer extends Component {
	constructor(props) {
		super(props);

		this._goToMovies = this._goToMovies.bind(this);
		this._openSearch = this._openSearch.bind(this);
	}

	_openSearch() {
		this._toggleDrawer();
		// this.props.navigator.showModal({
		// 	screen: 'movieapp.Search',
		// 	title: 'Search'
		// });
	}

	_goToMovies() {
		this._toggleDrawer();
		// this.props.navigator.popToRoot({
		// 	screen: 'movieapp.Movies'
		// });
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}


	render() {
		// const iconSearch = (<Icon name="md-search" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		// const iconMovies = (<Icon name="md-film" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
		// const iconTV = (<Icon name="ios-desktop" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
		return (
			<Card>
				<CardItem cardBody>
					<BackgroundImage source={require('../../../asserts/img.jpg')} style={{ height: 200, width: null, flex: 1 }} >
						<Thumbnail style={styles.avatar} source={require('../../../asserts/images/ecomapss.png')} />
						<Body>
							<Text>Native Base </Text>
							<Text note>GeekyAnts</Text>
						</Body>

					</BackgroundImage>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent>
							<Icon active name="thumbs-up" />
							<Text>12 Likes</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent>
							<Icon active name="chatbubbles" />
							<Text>4 some</Text>
						</Button>
					</Body>
				</CardItem>

				<ListItem icon selected>
					<Left>
						<Button style={{ backgroundColor: "#FF9501" }}>
							<Icon active name="plane" />
						</Button>
					</Left>
					<Body>
						<Text>Airplane Mode</Text>
					</Body>
					<Right>
						<Switch value={false} />
					</Right>
				</ListItem>

				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#007AFF" }}>
							<Icon active name="wifi" />
						</Button>
					</Left>
					<Body>
						<Text>Wi-Fi</Text>
					</Body>
					<Right>
						<Text>GeekyAnts</Text>
						<Icon active name="arrow-forward" />
					</Right>
				</ListItem>
			</Card >
		);
	}
}

export default Drawer;
