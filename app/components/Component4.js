

 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,View,ListView,
 } from 'react-native';

   const users=[
       {name:'John Doe'},
       {name:'Ben 10'},
       {name:'Carly Rose'},
       {name:'Rosa Parks'}
   ]

 export default class Component4 extends Component {
     constructor(){
       super();
       const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
       this.state={
         userDataSource:ds.cloneWithRows(users),
       };
     }
renderRow(user,sectionId,rowId,highlightRow){
    return(
      <View style={styles.row}>
      <Text style={styles.rowText}>{user.name}</Text>
      </View>
    )

}


   render() {
     return (
       <ListView
         dataSource={this.state.userDataSource}
         renderRow={this.renderRow.bind(this)}
       />


     );
   }
 }

 const styles =StyleSheet.create({
   row:{
     flexDirection:'row',
     justifyContent:'center',
     backgroundColor:'#f4f4f4',
     padding:10,
     marginBottom:3,

   },
   rowText:{
     flex:1
   }
 });

 AppRegistry.registerComponent('Component4',()=>Component4);
