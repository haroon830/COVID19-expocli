
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet,ScrollView,View,  ActivityIndicator,Image,Button } from 'react-native';

import Home from './countriesList';
import ByCountry from './countryDetails';
import Wordwide from './Worldwide';
import Stats from './Stats';



const Stack = createStackNavigator();

class screenStack extends Component {
  
  render() {
    return(
  <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      
      options={{ 
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
        title: 'Covid 19 Statistics',
        headerTintColor: 'white',
       headerStyle: {backgroundColor: 'black'}
      
      
    }
    }
       />
      <Stack.Screen 
      name="ByCountry" 
     
      component={ByCountry} 
      options={{ title: 'By Country' ,
      headerTintColor: 'white',
      headerStyle: {backgroundColor: 'black'
         
    }}} 
      />
      <Stack.Screen 
      name="Worldwide" 
      backgroundColor='black'
      component={Wordwide} 
      options={{ title: 'Worldwide',
      headerTintColor: 'white',
    
     
    }} 
      />
      <Stack.Screen 
     
      name="RegStats"
      
      component={Stats} 
      options={{ title: 'Regional Stats',
      headerTintColor: 'black',
       headerStyle: {backgroundColor: 'black'}
      }}
      />
  </Stack.Navigator>
  
    );
  }
}

export default screenStack;