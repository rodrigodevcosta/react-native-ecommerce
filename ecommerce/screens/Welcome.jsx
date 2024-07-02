import { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import LottieView from 'lottie-react-native' 

export const Welcome = ({ navigation }) => {
 
  useEffect(() => {
    setTimeout(() => {navigation.navigate("Signin");}, 3000); }, []);

  return (

    <View style={styles.container}>

      <LottieView source={require('../assets/Animation - 1715284057317.json')} autoPlay={true} style={{  height: 700, width: 700}}/>
    </View>
    )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
});
