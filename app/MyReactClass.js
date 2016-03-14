var React = require('react');

var MyReactClass = React.createClass({
  render: function () {
    return (
      <div>MyReactClass = Hello {this.props.name}</div>
    )
  }
});

module.exports = MyReactClass;