

 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,View,ListView,TouchableHighlight
 } from 'react-native';



 export default class Component5 extends Component {
     constructor(){
       super();
       const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
       this.state={
         userDataSource:ds,
       };
     }
      componentDidMount(){
        this.fetchUsers();
      }

    fetchUsers(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((response)=>{
        this.setState({
          userDataSource:this.state.userDataSource.cloneWithRows(response)
        });
      }
    );
    }
     onPress(){

     }



renderRow(user,sectionId,rowId,highlightRow){
    return(

        <TouchableHighlight style={styles.row} onPress={this.onPress}>
        <Text style={styles.rowText}>{user.name}:{user.email}</Text>
        </TouchableHighlight>

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

 AppRegistry.registerComponent('Component5',()=>Component5);
