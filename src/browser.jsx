class Header extends React.Component {
  render() {
    return <span>This is the header!</span>;
  }
}

class FileList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.files);
  }
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

    console.log(props.proxy);
    this.state = {
      accessKey: "AAAAA",
    };
    console.log("In the browser ctor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.proxy
      .listObjects()
      .then((data) => {
        this.state.currentFiles = data;
      })
      .catch((err) => console.error(err));
  }

  render() {
    const files = [];
    return (
      <div className="browser">
        <h1>I am a browser</h1>
        <pre>
          <code>accessKey:{this.state.accessKey}</code>
        </pre>
        <Header />
        <FileList files={this.state.currentFiles} />
      </div>
    );
  }
}

const proxy = new S3Proxy("my-bucket");
ReactDOM.render(<Browser proxy={proxy} />, document.getElementById("root"));
