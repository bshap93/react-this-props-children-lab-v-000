// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {

  render() {
    const theme = this.props.theme
    const childrenWithExtraProp = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        className: theme
      })
    })
    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }

}

export default ThemedDecorations;
