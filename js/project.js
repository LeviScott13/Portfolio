class Project extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            "selectedProject": this.props.selectedProject
        }
    }

    render(){

        console.log(this.state.selectedProject)
        
        return(
            <div className="portfolio-container">
                    <div className="portfolio-container-header">
                        <div className="portfolio-signature-container">
                            <img src="../img/logo2.png"/>
                            <span>Levi Sutton</span>
                        </div>
                    </div>

                    <div className="portfolio-container-body">
                        <div className="portfolio-container-about-cotainer-wrapper">
                            <div className="portfolio-container-project-header-wrapper">
                                <div className="portfolio-container-project-header">
                                    <span>{this.state.selectedProject.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}