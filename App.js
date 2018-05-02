

 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,View,Navigator
 } from 'react-native';

import Component5 from './app/components/Component5';
/*import Component6 from './app/components/Component6';*/

 export default class App extends Component {

  /* renderScene(route,navigator){
   switch (route.id) {
     case 'component5':
       return (<Component5 navigator={navigator} title="component5"/>)
      case 'component6':
        return (<Component6 navigator={navigator} title="component6"/>)

   }
 }*/


   render() {
     return (
       <Component5 />
     );
   }
 }

 AppRegistry.registerComponent('App',()=>App);
