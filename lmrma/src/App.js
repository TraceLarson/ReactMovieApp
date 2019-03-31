import React, { Component } from "react";
import "./App.css";

const welcome = "welcome to react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("mounted");
  }

  state = {
    toggle: true
  };

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const { toggle } = this.state;
    console.log(toggle);
    return (
      <div className="App">
        <header className="App-header">
          <Welcome text={welcome} toggle={toggle} />
          {toggle && <p>This should show and hide</p>}
          <button onClick={this.handleToggle}>Show / Hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    return <h1>{toggle && text}</h1>;
  }
}

export default App;
