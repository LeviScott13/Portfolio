class Main extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          "portfolio_switch": false
        }
    }

    handleSwitch = (portfolio_switch) => {
      this.setState({portfolio_switch: portfolio_switch});
    }

    render() {
        return (
          <div className="main-home-container-wrapper">
              {
                this.state.portfolio_switch == false ? 
                  <Home onSelectPortfolio={this.handleSwitch} /> :
                  
                  <Portfolio/>
              }
              
          </div>
        );
      }
}

ReactDOM.render(<Main />, document.getElementById('main'));