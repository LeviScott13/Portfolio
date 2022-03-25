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
            {/* {
              this.state.password == true ? 

                <div id="loader" className="preloader">
                  <div className="loader">
                    <div>
                      <img src={"img/loader.png"} />
                      <svg>
                        <rect></rect>
                      </svg>
                    </div>
                  </div>  
                </div>
              : 
                <div className="password-form-container">
                    <form>
                      <div style={{marginBottom: "10px"}}><span>Login to continue</span></div>
                      <div className="password-form-container-wrapper">
                        <input id="password-input" type="password" placeholder="Enter password (see portfolio)" required/>
                        <input id="confirm-btn" type="submit"/>
                      </div>
                    </form>
                </div>
            } */}
            <Home />     
          
          </div>
        );
      }
}

ReactDOM.render(<Main />, document.getElementById('main'));