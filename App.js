import {Text,View,StyleSheet} from 'react-native';
import React,{Component} from 'react';
import CreateNavigation from './src/CreateNavigation'
import Home from './src/Home'

// import NestedContainer from './src/NestedContainer'
export default class App extends Component{
render(){
    return(
        <View style={styles.container}>
      <CreateNavigation/>

      {/* <Home/> */}
        </View>
    )
}
}
 const styles=StyleSheet.create({
   container:{
     flex:1
   }
 })







 