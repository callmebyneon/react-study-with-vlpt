import React from 'react';

class Hello extends React.Component {
  static defaultProp = {
    name: '이름없음'
  };
  
  render() {
    const { color, name, isSpecial } = this.props;

    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    )
  }
}

export default Hello;