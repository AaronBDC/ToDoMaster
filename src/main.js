import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//class main extends Component {
//
//}
//export default main
module.exports = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        <Text>
          To-Do Master
        </Text>
      </View>
    )

  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center';
  }
})
