import {View, Image, StyleSheet, Text} from 'react-native';
import Title from '../components/ui/Title';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function GameOverScreen(){
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View
            style={styles.imageContainer}
            >

            <Image 
            style={styles.image}
            source={require('../assets/images/success.png')} />
            </View>
            <Text>Your phone needed X rounds to guess th number Y.</Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        backgroundColor:Colors.primary800,
        overflow: "hidden",
        margin:36,
    },
    image:{
        width: "100%",
        height: "100%",
    }
})