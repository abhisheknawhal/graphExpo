import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform , View, Text} from 'react-native';
import { CartesianChart } from "victory-native";

export default function HomeScreen() {
  const DATA = Array.from({ length: 31 }, (_, i) => ({
    day: i,
    highTmp: 40 + 30 * Math.random(),
  }));
  return (
 <View style={{flex:1, justifyContent:'center'}}>
     <Text style={{color:'white',textAlign:'center'}}>hello</Text>
 </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});