class Header extends React.Component {
  render() {
    return <span>This is the header!</span>;
  }
}

function Folder(props) {
  return (
    <a className="folder" onClick={props.onClick}>
      {props.text}
    </a>
  );
}

function File(props) {
  return (
    <a className="file" onClick={props.onClick}>
      {props.text}
    </a>
  );
}

class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleFileClick = this.props.onFileClick.bind(this);
    this.handleCreateTableClick = this.handleCreateTableClick.bind(this);
  }

  async componentDidMount() {
    console.log("componentDidMount filelist");
    console.log(this.props.files);
  }

  handleFolderClick(prefix) {
    console.log("handleFolderClick", prefix);
  }

  handleFileClick(key) {
    console.log("fileClick", key);
  }

  // This is a specific case for data-workspace
  // probably extract this to an open-link type effect
  handleCreateTableClick(key) {
    console.log("createTable", key);
  }

  render() {
    const files = this.props.files;
    const folders = this.props.folders;
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
        <tbody>
          {folders.map((folder) => {
            return (
              <tr key={folder.Prefix}>
                <td></td>
                <td>
                  <Folder
                    text={folder.Prefix}
                    onClick={() => this.handleFolderClick(folder.Prefix)}
                  />
                </td>
              </tr>
            );
          })}

          {files.map((file) => {
            let createTableButton = null;
            if (file.isCsv) {
              createTableButton = (
                <button onClick={() => this.handleCreateTableClick(file.Key)}>
                  Create table
                </button>
              );
            }
            return (
              <tr key={file.Key}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <File
                    text={file.Key}
                    onClick={() => this.handleFileClick(file.Key)}
                  />
                </td>
                <td>{file.LastModified}</td>
                <td>{file.Size}</td>
                <td>{createTableButton}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class Browser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      folders: [],
      isLoaded: false,
      error: null,
    };

    this.handleFileClick = this.handleFileClick.bind(this);
  }

  handleFileClick() {
    console.log("handleFileClick", arguments);
  }

  async componentDidMount() {
    try {
      const data = await this.props.proxy.listObjects();
      this.setState({ files: data.Contents, folders: data.CommonPrefixes });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    console.log("render");

    return (
      <div className="browser">
        <Header />
        <FileList
          files={this.state.files}
          folders={this.state.folders}
          onFileClick={this.handleFileClick}
        />
      </div>
    );
  }
}

const proxy = new S3Proxy("my-bucket");
const root = document.getElementById("root");
proxy.listObjects().then((data) => {
  ReactDOM.render(<Browser proxy={proxy} />, root);
});
