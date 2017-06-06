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
        <View style={styles.item}>
          <Text>Item 1</Text>
      </View>
      <View style={styles.item}>
          <Text>Item 2</Text>
      </View>
      </View>
      <View style={styles.largeItem}>
        <View style={styles.item}>
          <Text>
            Item 3a
          </Text>
        </View>
        <View style={styles.item}>
          <Text>
            Item 3b
          </Text>
        </View>

      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'green',
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black'
  },
  largeItem:{
    flex: 3,
    borderWidth: 3,
    borderColor: 'blue'
  }
})
