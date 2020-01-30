import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';


export default class IncrementView extends Component {
  render() {
    const { increment, decrement, count } = this.props;
    return (
      <View style={{alignItems: 'center'}}>
      <Text style={{ marginTop: 40 }}>{'Total Likes:'}</Text>
      <Text>{`${count}`}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
      <TouchableOpacity onPress={increment}>
        <Image
          style={{
            width: 100,
            height: 80,
            resizeMode: 'contain',
            marginTop: 3,
            marginLeft: -10,
          }}
          source={require('../../assets/images/like.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Image
          style={{
            width: 100,
            height: 80,
            resizeMode: 'contain',
            marginTop: 3,
            marginLeft: -10,
          }}
          source={require('../../assets/images/dislike.png')}
        />
      </TouchableOpacity>
    </View>
    </View>
    );
  }
}
