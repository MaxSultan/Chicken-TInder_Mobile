import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Swipe = () => {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <ScrollView
        style={styles.safeView}
          contentInsetAdjustmentBehavior="automatic"
          >
          <LinearGradient colors={['#E9692C', "#ffffff"]} style={styles.color}>
            <View style={styles.body}>
                <Text>Swiping</Text>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 300,
    width: 300,
    backgroundColor: 'grey',
    borderRadius: 20,
    margin: 30,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  color: {
    minHeight: 950,
  },
  sideBySide:{
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 150,
  },
   primaryButton: {
     paddingVertical: 10,
     paddingHorizontal: 30,
     borderColor: '#E9692C',
     borderWidth: 2,
     margin: 30,
     borderRadius: 10,
   },
   secondaryButton:{
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#E9692C',
    margin: 30,
    borderRadius: 10,
    borderColor: '#E9692C',
    borderWidth: 2,
   },
   primaryButtonText:{
    color: '#E9692C',
   },
   secondaryButtonText:{
    color: "#ffffff",
   },
   border:{
     borderWidth: 3,
     borderColor: '#000000',
     borderRadius: 20,
     justifyContent: "center",
     alignItems: "center",
   },
   safeView:{
       backgroundColor: '#E9692C',
   }
});

export default Swipe;
