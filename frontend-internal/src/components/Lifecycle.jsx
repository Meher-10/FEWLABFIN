import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is initialized');
  }

  componentDidMount() {
    console.log('componentDidMount: Component is mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Count updated from', prevState.count, 'to', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Lifecycle;