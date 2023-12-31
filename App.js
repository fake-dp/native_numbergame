import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  })

  if(!fontLoaded){
    return <AppLoading/>
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber}
    onGameOver={gameOverHandler}
    />
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen/>
  }



  return (
    <LinearGradient
    colors={[Colors.primary700,Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground source={require('./assets/images/background.png')
    }
    resizeMode='cover'
    imageStyle={styles.backgroundImage}
    style={styles.rootScreen}
    >
      <SafeAreaView
      style={styles.myrootScreen}
      >{screen}</SafeAreaView>
  {/* {screen} */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
  },
  backgroundImage:{
    opacity: 0.5,
  },
  myrootScreen:{
    flex:1,
  },

});
