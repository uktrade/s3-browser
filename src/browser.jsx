class Header extends React.Component {
  render() {
    return <span>This is the header!</span>;
  }
}

class FileList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td className="header--checkbox"></td>
            <th>Name</th>
            <th>Last modified</th>
            <th>Size</th>
            <th>Details</th>
          </tr>
        </thead>
      </table>
    );
  }
}

class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessKey: "AAAAA",
    };
    console.log("In the browser ctor");
  }
  render() {
    return (
      <div className="browser">
        <h1>I am a browser</h1>
        <pre>
        <code>accessKey:{this.state.accessKey}</code>
        </pre>
        <Header />
        <FileList />
      </div>
    );
  }
}

ReactDOM.render(<Browser />, document.getElementById("root"));
