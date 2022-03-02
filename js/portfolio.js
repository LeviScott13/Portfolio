//JSON project data
const projectData = JSON.parse(document.getElementById("projectData").value);
console.log(projectData);

class Portfolio extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            "projectData": projectData,
            "selectedProjectSwitch": false,
            "selectedProject": projectData.projects[0]
        }

        this.selectProject = this.selectProject.bind(this);
    }

    selectProject(key){        
        this.setState({selectedProject: projectData.projects[key], selectedProjectSwitch:true})
    }

    render() {
        return (

            this.state.selectedProjectSwitch == false ? 

                <div className="portfolio-container">
                    <div className="portfolio-container-header">
                        <div className="portfolio-signature-container">
                            <img src="../img/logo2.png"/>
                            <span>Levi Sutton</span>
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
                                <p>In my free time, you'll find me gaming with friends 🎮 , enjoying the outdoors: love going hiking ⛰️ and to the beach 🏖️, and I’m always up for a challenging game of ping pong 🏓.</p>
                            </div>

                            <div className="portfolio-container-about-projects-container-wrapper">
                                {
                                    this.state.projectData.projects.map((project, key) => (
                                        <div className="portfolio-container-about-projects-container" onClick={() => this.selectProject(key)} key={key}>
                                            <span>{project.title}</span>
                                            <div className="portfolio-container-about-project-img-container">
                                                <img src={project.titleImg}/>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>

            : <Project selectedProject={this.state.selectedProject}/>
        );
    }
}

ReactDOM.render(<Portfolio />, document.getElementById('portfolioMain'));