import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SearchableFlatList from './src/screenStack.js';
import RegionalStats from './src/Tabs';
import Worldwide from './src/Worldwide';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={SearchableFlatList} options={{ drawerLabel: 'Home' }}/>
      <Drawer.Screen name="Worldwide"  component={Worldwide} options={{ drawerLabel: 'Worldwide',title: "Global Summary" }} />
      <Drawer.Screen name="Stats" component={RegionalStats} options={{ drawerLabel: 'Stats' }}/>
    </Drawer.Navigator>
      
    </NavigationContainer>
  );
};

export default App;