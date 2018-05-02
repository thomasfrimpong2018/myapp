import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TextInput,Switch
} from 'react-native';

export default class Component3 extends Component {
  constructor(){
    super();
    this.state={
      textValue:"Hello",
      switchValue:false

    }
  }
 changeText(value){
   this.setState({
     textValue:value

   });
 }
onSwitchChange(value){
  this.setState({
    switchValue:value
  });
}

  render() {
    return (
    <View>
      <TextInput
        placeholder="Enter Text"
        value={this.state.textValue}
        onChangeText={(value)=>this.changeText(value)}

      />
      <Text>{this.state.textValue}</Text>
     <Switch
     value={this.state.switchValue}
      onValueChange={(value)=>this.onSwitchChange(value)}
     />
    </View>
    );
  }
}

AppRegistry.registerComponent('Component3',()=>Component3);
