var React = require('react');

var MyReactComponent = React.createClass({
  render: function () {
    return (
      <div>MyReactComponent = Hello {this.props.name}</div>
    )
  }
});