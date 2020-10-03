
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

const CreateGroup = ({navigation}) => {
    const [name, setName] = useState('')
    const [groupCode, setGroupCode] = useState("")
    const generateGroupCode = () => {
        const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        
        const sixDigitCode = []
        for(var i = 0; i <= 6; i++){
            var generatedNumber = `${Math.floor(Math.random() * 26)}`
            sixDigitCode.push(alphabetArray[generatedNumber].toUpperCase())
        }
        setGroupCode(sixDigitCode.join(''))
        return sixDigitCode.join('')
    }
    const handleSubmit = () => {
        generateGroupCode()

        navigation.navigate("Group", {groupCode: groupCode})
    }
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <ScrollView
        style={styles.safeView}
          contentInsetAdjustmentBehavior="automatic"
          >
          <LinearGradient colors={['#E9692C', "#ffffff"]} style={styles.color}>
            <View style={styles.body}>
                <Text>Create a Group</Text>
                <TextInput value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your name" style={styles.input}></TextInput>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => handleSubmit()}>
                    <Text style={styles.secondaryButtonText}>Create Group</Text>
                </TouchableOpacity>
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
   },
   input:{
       borderBottomColor: "#000000",
       borderBottomWidth: 1,
       width: 300,
       marginVertical: 30,
   }
});

export default CreateGroup;
