class Main extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="main-home-container-wrapper">
              <Home/>     
          </div>
        );
      }
}

ReactDOM.render(<Main />, document.getElementById('main'));