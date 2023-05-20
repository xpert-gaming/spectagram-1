import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from "./Navigation/Drawernavigator"
global.__reanimatedWorkletInit=()=>{}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}