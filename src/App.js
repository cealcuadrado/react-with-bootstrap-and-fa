import './App.css';

function App() {
  return (
    <div className="container">
      <h1><i className="fa fa-user fa-fw"></i> User</h1>
      <hr />
      <p>Hello, in this app I've imported successfully <strong className="text-danger"><i className="fab fa-bootstrap fa-fw"></i> Bootstrap</strong> and <strong className="text-success"><i className="fab fa-fort-awesome fa-fw"></i>Fort Awesome</strong>.</p>

      <button className="btn btn-success">
        <i className="fas fa-check fa-fw"></i> Success
      </button>
    </div>
  );
}

export default App;
