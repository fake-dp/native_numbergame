import { useState } from "react";
import { TextInput, View, StyleSheet ,Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
function StartGameScreen({onPickNumber}) {

    const [enterdNumber, setEnteredNumber] = useState("")

    function numberInputHandler(enterText){
        console.log(enterText)
        setEnteredNumber(enterText);
    }

    function resetInputHandler(){
        setEnteredNumber("");
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enterdNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", 
            [{text: "Okay", style: "destructive", onPress: resetInputHandler}])
            return;
        }
        onPickNumber(chosenNumber);
    }


    return (
    

        <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>

       
            <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput 
            value={enterdNumber}
            onChangeText={numberInputHandler}
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            
            //자동 대문자 변환
            autoCapitalize="none"
            //자동 수정 기능
            autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>

            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>reset</PrimaryButton>
            </View>

            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>confirm</PrimaryButton>
            </View>
            </View>
            </Card>
        </View>
  
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 1,
        color: Colors.accent500,
        fontSize: 32,
        marginVertical: 8,
        fontWeight: "bold",
        width: 50,
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer:{
        flex:1,
    },
})