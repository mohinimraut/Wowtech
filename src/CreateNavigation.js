// In App.js in a new project


import React, { Component } from 'react';
import { View,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'

function DisplayJson({route,navigation}) {

    // Title:item.title,Url:item.url,Created_at:item.created_at

    const { Title } = route.params;
    const { Url } = route.params;
    const { Created_at } = route.params;
    const { Page_No } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginLeft:20,marginRight:20,backgroundColor:'dodgerblue',marginBottom:20,marginTop:20,}}>
  
   
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,paddingBottom:8,paddingLeft:10}}>Title: {JSON.stringify(Title)}</Text>
      <Text  style={{color:'#fff',paddingBottom:8,paddingLeft:10}}>Url: {JSON.stringify(Url)}</Text>
      <Text  style={{color:'#fff',paddingBottom:8,paddingLeft:10}}>Created_at: {JSON.stringify(Created_at)}</Text>
      <Text  style={{color:'#fff',paddingLeft:10}}>Page Number: {JSON.stringify(Page_No)}</Text>
      {/* <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        /> */}
    </View>
  );
}





  

const Stack = createStackNavigator();

function CreateNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DisplayJson" component={DisplayJson} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CreateNavigation;