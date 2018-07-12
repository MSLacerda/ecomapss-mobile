import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 30,
        marginTop: 50
    },
    itemSpace: {
        marginTop: 30,
    },
    text: {
        color: "white",
    },
    logoContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 150,
        width: 150,
        flex: 1
    },
    welcome: {
        fontSize: 35,
        textAlign: 'center',
        color: "white",
        margin: 25,
        // marginBottom:30
    },
    textShadow: {
        textShadowColor: 'black',
        textShadowRadius: 3,
        textShadowOffset: {
            width: 1,
            height: 1
        }
    }
});
export default styles;
