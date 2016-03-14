var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));

require("expose?MyReactComponent!./MyReactComponent.js");

ReactDOM.render(<MyReactComponent name="Component1" />, document.getElementById('component1'));