import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let className = this.props.className ? this.props.className + ' ' : '';
    return (
      <div onClick={this.props.onClick} className={ className + "card" } id={ this.props.id }>

        {this.props.children}

      </div>
    );
  }
}


export default Card;
