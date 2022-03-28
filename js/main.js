class Main extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          password: true 
        }
    }

    render() {
        return (
          <div className="main-home-container-wrapper">
            <Home />     
          </div>
        );
      }
}

ReactDOM.render(<Main />, document.getElementById('main'));