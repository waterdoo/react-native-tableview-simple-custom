import React, { Component, PropTypes, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class CustomCell extends Component {
  render() {
    const {children} = this.props;
    const cellTintColor = this.props.cellTintColor;
    const isDisabled = this.props.isDisabled;
    const isPressable = this.props.onPress ? true : false;
    const highlightUnderlayColor = this.props.highlightUnderlayColor;
    const highlightActiveOpacity = this.props.highlightActiveOpacity;

    /* Set styles */
    if(this.props.customStyle){
      var styleCell = [...{}, styles.cell, {backgroundColor: cellTintColor}, this.props.customStyle];
    }else{
      var styleCell = [...{}, styles.cell, {backgroundColor: cellTintColor}];
    }

    if(isPressable && !isDisabled) {
      return(
        <TouchableHighlight onPress={this.props.onPress} underlayColor={highlightUnderlayColor} activeOpacity={highlightActiveOpacity}>
          <View style={styleCell}>{children}</View>
        </TouchableHighlight>
      )
    }
      return (<View style={styleCell}>{children}</View>)
  }
}

var styles = StyleSheet.create({
  'cell': {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  }
});

CustomCell.propTypes = {
  cellTintColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ]),
  highlightActiveOpacity: PropTypes.number,
  highlightUnderlayColor: PropTypes.string,
}

CustomCell.defaultProps = {
  cellTintColor: '#fff',
  isDisabled: false,
  highlightActiveOpacity: 0.8,
    highlightUnderlayColor: 'black'
}
