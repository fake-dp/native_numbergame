import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
function Title({children}){
return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
      fontFamily: 'open-sans-bold',
        fontSize: 24,
        padding:12,
        // fontWeight: "bold",
        color: "#fff",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        borderRadius: 1,
  }
})