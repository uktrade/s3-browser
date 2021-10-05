
class Header extends React.Component {
  render() {
    return <span>This is the header! AAAAA</span>;
  }
}



const ModalNewFolder = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  function handleSubmit(event) {
    event.preventDefault()
    const foldername = event.target.elements.foldernameInput.value
    alert(`You entered: ${foldername}`)
    handleClose()
  }
  console.log("In modal new folder.")
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      
        <form onSubmit={handleSubmit}>
        <p>New Folder</p>
          <div>
            <label htmlFor="foldernameInput">Folder name:</label>
            <input id="foldernameInput" type="text" />
          </div>
        

        <button type="button" onClick={handleClose}>
          Cancel
        </button>       
        <button type="submit">
          Add Folder
        </button>
        </form>
         </section>
    </div>
  );
};


const ModalUploadFile = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  function handleSubmit(event) {
    event.preventDefault()
    const foldername = event.target.elements.foldernameInput.value
    alert(`You entered: ${foldername}`)
    handleClose()
  }
  console.log("In modal upload.")
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      
        <form onSubmit={handleSubmit}>
        <p>Upload File</p>
          <div>
            <label htmlFor="foldernameInput">Folder name:</label>
            <input id="foldernameInput" type="text" />
          </div>
        

        <button type="button" onClick={handleClose}>
          Cancel
        </button>       
        <button type="submit">
          Add Folder
        </button>
        </form>
         </section>
    </div>
  );
};



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
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    console.log("In the browser ctor");
  }

  showModal = () => {
    this.setState({ show: true });
    console.log("Show Modal");
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("Hide Modal");
  };

  render() {
    return (
      <div className="browser">
        <h1>I am a browser</h1>
        <pre>
        <code>accessKey:{this.state.accessKey}</code>
        </pre>
        <Header />
        <ModalNewFolder show={this.state.show} handleClose={this.hideModal} >
          
        </ModalNewFolder>
        <button type="button" onClick={this.showModal}>
          Add folder
        </button>

        {/* <ModalUploadFile show={this.state.show} handleClose={this.hideModal} >
        </ModalUploadFile>
        <button type="button" onClick={this.showModal}>
          Upload file
        </button> */}

        <FileList />
        <input type="file" id="input" multiple></input>
      </div>
    );
  }
}

ReactDOM.render(<Browser />, document.getElementById("root"));
