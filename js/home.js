class Home extends React.Component{

    constructor(props) {
        super(props);
    }
    
    redirect(){
      window.location.href = "portfolio.html"
    }

    render() {

      return (
          <div className="main-home-container">
              <div className="contact-card-container-wrapper">

                <div className="contact-card-container">
                  <div className="contact-card-container-header">
                    <span>Levi Sutton</span>
                    <span>Software Engineer | Atlanta, GA</span>
                  </div>

                  <div className="contact-card-container-body">
                    <span>Contact Me</span>
                    <div className="contact-card-container-contact-link-container">
                      <a className="contact-links" href="mailto: levi.sutton2013@gmail.com" target="_blank">
                        <i className="far fa-envelope"></i>
                      </a>
                      <a className="contact-links" href="https://www.linkedin.com/in/levi-sutton/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a className="contact-links" href="https://twitter.com/LeviScott13" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="contact-links" href="https://codepen.io/leviscott13" target="_blank">
                        <i className="fab fa-codepen"></i>
                      </a>
                      <a className="contact-links" href="https://github.com/LeviScott13" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>

                  <div className="contact-card-container-footer">
                    <button onClick={this.redirect}>
                      <span>Portfolio</span>
                    </button>
                    <a href="../resume/LeviSuttonResume2022.docx" download="LeviSuttonResume2022">
                      <i className="fas fa-download" style={{marginRight: "10px"}}></i>
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>

                <img className="contact-card-container-profile-pic"/>

              </div>
          </div>
        );
      }
}