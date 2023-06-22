import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}){


// android ripple는 클릭시 물결효과 

    return(
        <View style={styles.buttonOuterContainer}>
        <Pressable 
        style={({pressed})=> pressed ? [
            styles.buttonInnerContainer, styles.pressed
        ]: styles.buttonInnerContainer}
        onPress={onPress} 
        android_ripple={{color:Colors.primary600}}>
            <Text
            style={styles.buttonText}
            >{children}</Text>
        </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
        margin:4,
    },
    buttonText:{
        color: "#fff",
        textAlign: "center",
    },
    //물결효과는 안드로이만 있음 그래서 ios는 따로 설정
    pressed:{
        opacity: 0.75,
    }
})