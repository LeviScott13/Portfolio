class Portfolio extends React.Component{

    constructor(props) {
        super(props);
    }

    returnHome(){
        window.location.href = "../index.html"
    }

    render() {
        return (
            <div className="portfolio-container">
                <div className="portfolio-container-header">
                    <div className="portfolio-signature-container">
                        <img src="../img/logo2.png"/>
                        <span>Levi Sutton</span>
                    </div>
                    <div className="portfolio-signature-container">
                        <a onClick={this.returnHome}>Home</a>
                    </div>
                </div>

                <div className="portfolio-container-body">
                    <div className="portfolio-container-about-cotainer-wrapper">
                        <div className="portfolio-container-about-header">
                            <span>Portfolio</span>
                        </div>

                        <div className="portfolio-container-about-cotainer">
                            <p>I’m an Atlanta GA based software engineer specializing in building (and occasionally designing) exceptional digital experiences. </p>
                            <p>Currently, I work for <a className="web-link" href="https://virtucom.com/" target="blank_">Virtucom</a>, where I contribute in building applications that ensure delighful experiences for Virtucom staff and their customers.</p>
                        </div>

                        <div className="portfolio-container-about-projects-container-wrapper">
                            <div className="portfolio-container-about-projects-container">

                            </div>

                            <div className="portfolio-container-about-projects-container">
                                
                            </div>

                            <div className="portfolio-container-about-projects-container">
                                
                            </div>

                            <div className="portfolio-container-about-projects-container">

                            </div>

                            <div className="portfolio-container-about-projects-container">
                                
                            </div>

                            <div className="portfolio-container-about-projects-container">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

ReactDOM.render(<Portfolio />, document.getElementById('portfolioMain'));