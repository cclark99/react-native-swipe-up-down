import React, { Component } from 'react';
import { Image, View, Animated } from 'react-native';
import images from '../../assets/images';

export default class SwipeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: images.minus,
      showIcon: false
    };
  }
  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this);
  }

  toggleShowHide(val) {
    this.setState({ showIcon: val });
  }

  render() {
    return (
      <View style={{ alignItems: 'center', height: 10, marginBottom: 5 }}>
        <View
          style={{ height: 3, width: 115, backgroundColor: '#DBDBDB', borderRadius: 2 }}
        />
      </View>
    );
  }
}
