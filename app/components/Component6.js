

 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,View,Button
 } from 'react-native';

 export default class Component6 extends Component {
   /*constructor(props){
     super(props);
     this.state={
       name:this.props.user.name,
       email:this.props.user.email
     }
   }

   onPress(){
     this.props.navigator.push({
       id:'component5'
     })
   }*/

   render() {

     return (
       <View>
       <Text>Details</Text>
       </View>
     );
   }
 }

 AppRegistry.registerComponent('Component6',()=>Component6);
