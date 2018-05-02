import React, {Component} from 'react';
import {AppRegistry,View,  Text,  StyleSheet

} from 'react-native';

export default class Component1 extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'Teezle',
      showName:false,
      message:this.props.message
    }
  }
  static defaultProps={
    messages:'Hi There'
  }

  render(){
    let name=this.state.showName?this.state.name:'No name';
    return(
      <View>
      <View style={styles.myView} >
      <Text style={styles.myText}> {this.state.message}</Text>
      <Text>{this.props.messages}</Text>
      <Text>{name}</Text>
      </View>
        <View style={styles.container}>
            <View >
            <Text>View 1</Text>
            </View>
            <View>
            <Text>View 2</Text>
            </View>
            <View>
            <Text>View 3</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({

    myView:{
      backgroundColor:'blue'
    },
    myText:{
      color:'red'
    }

});
AppRegistry.registerComponent('Component1',()=>Component1);
