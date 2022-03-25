class Project extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            "selectedProject": this.props.selectedProject
        }

        document.getElementById("portfolioMain").scrollTop = 0;
    }

    redirect(){
        window.location.href = "portfolio.html"
    }

    redirectHome(){
        window.location.href = "main.html"
    }

    render(){

        console.log(this.state.selectedProject.project_imgs)
    
        return(
            <div id="myDIV" className="portfolio-container">
                    <div className="portfolio-container-header">
                        <div className="portfolio-signature-container" onClick={this.redirectHome}>
                            <img src="../img/logo2.png"/>
                            <span>Levi Sutton</span>
                        </div>
                    </div>

                    <div className="portfolio-container-body">
                        <div className="portfolio-container-about-cotainer-wrapper">
                            <div className="portfolio-container-project-header">
                                <span>{this.state.selectedProject.title}</span>
                                {
                                    this.state.selectedProject.github == true || this.state.selectedProject.website == true ? 
                                        <div className="portfolio-container-project-links-container">
                                            {
                                                this.state.selectedProject.github == true ? 
                                                    <a className="contact-links" href={this.state.selectedProject.github_link} target="_blank">
                                                        <i className="fab fa-github"></i>
                                                    </a>
                                                : ""
                                            }      
                                            {
                                                this.state.selectedProject.website == true ? 
                                                    <a className="contact-links" href={this.state.selectedProject.website_link} target="_blank">
                                                        <i className="fab fa-github"></i>
                                                    </a>
                                                : ""
                                            }                                         
                                        </div>
                                    : ""
                                }
                            </div>
                            {
                                this.state.selectedProject.project_description != null ? 
                                    <div className="portfolio-container-project-description-container-wrapper">
                                        <div className="portfolio-container-project-description-container-header">
                                            <span>Project Description</span>
                                        </div>
                                        <div className="portfolio-container-project-description-container">
                                            <p>{this.state.selectedProject.project_description}</p>
                                        </div>
                                    </div>
                                : ""
                            }

                            {
                                this.state.selectedProject.problem != null ? 
                                    <div className="portfolio-container-project-description-container-wrapper">
                                        <div className="portfolio-container-project-description-container-header">
                                            <span>Problem</span>
                                        </div>
                                        <div className="portfolio-container-project-description-container">
                                            <p>{this.state.selectedProject.problem}</p>
                                        </div>
                                    </div>
                                : ""
                            }

                            {
                            this.state.selectedProject.features != null ? 
                                <div className="portfolio-container-project-description-container-wrapper">
                                    <div className="portfolio-container-project-description-container-header">
                                        <span>Features</span>
                                    </div>
                                    <div className="portfolio-container-project-description-container">
                                        <ul>
                                            {
                                                this.state.selectedProject.features.map((feature, key) => (
                                                    <li key={key}>{feature}</li>
                                                ))
                                            }
                                        </ul>
                                        
                                    </div>
                                </div>
                                : ""
                            }

                            {
                                this.state.selectedProject.tools != null ? 
                                    <div className="portfolio-container-project-description-container-wrapper">
                                        <div className="portfolio-container-project-description-container-header">
                                            <span>Tools Used</span>
                                        </div>
                                        <div className="portfolio-container-project-description-container">
                                            <div className="portfolio-container-project-description-tools-container-wrapper">
                                                {
                                                    this.state.selectedProject.tools.map((tool, key) => (
                                                        <div className="portfolio-container-project-description-tools-container"  key={key}>
                                                            <span>{tool}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                : ""
                            }

                            {
                                this.state.selectedProject.project_imgs != null ? 
                                    <div className="portfolio-container-project-description-container-wrapper">
                                        <div className="portfolio-container-project-description-container">
                                            {
                                                this.state.selectedProject.project_imgs.map((img, key) => (
                                                    <img src={img.src} key={key}/>
                                                ))
                                            }
                                            <span><br/><br/>  Want to learn more about this project? <a href="mailto: levi.sutton2013@gmail.com" target="_blank">Lets chat</a>.</span>
                                        </div>
                                    </div>
                                : 

                                <div className="portfolio-container-project-description-container-wrapper">
                                    <div className="portfolio-container-project-description-container">
                                        <span><span className="error-message">*Images not shown due to company policy*. </span><br/><br/>  Want to learn more about this project? <a href="mailto: levi.sutton2013@gmail.com" target="_blank">Lets chat</a>.</span>
                                    </div>
                                </div>
                            }

                            <div className="portfolio-container-project-btn-container">
                                <button onClick={this.redirect}>View more projects</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
        )
        
    }
}