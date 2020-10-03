import React from 'react';
import Home from '../screens/Home'
import { createStackNavigator } from '@react-navigation/stack';
import CreateGroup from '../screens/CreateGroup';
import JoinGroup from '../screens/JoinGroup';
import Swipe from '../screens/Swipe'
import Group from '../screens/Group';
import Match from '../screens/Match';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create Group" component={CreateGroup} />
      <Stack.Screen name="Join Group" component={JoinGroup} />
      <Stack.Screen name="Group" component={Group} />
      <Stack.Screen name="Swipe" component={Swipe} />
      <Stack.Screen name="Match" component={Match} />
    </Stack.Navigator>
  );
}
export default StackNavigator