//JSON project data
class Portfolio extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            "projects": this.props.projects,
            "selectedProjectSwitch": false,
            "selectedProject": this.props.projects[0]
        }

        this.selectProject = this.selectProject.bind(this);
    }

    selectProject(key){        
        this.setState({selectedProject: this.state.projects[key], selectedProjectSwitch:true})
    }

    render() {

        console.log(this.state.projects)

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
                                    this.state.projects.map((project, key) => (
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

var projects = {
"projects": 
    [
        {
            "title": "VPP Personal Dashboard",
            "project_description": "Fully customizable personal dashboard designed dynamically to fit the needs of a specific employee, no matter what department they’re in, this dashboard contains information beneficial to the individual using it. The main purpose of this dashboard is to help our employees to see and get to information at a quick glance.",
            "problem": null,
            "features": [
                "Sidenav",
                "Rearrangeable widgets containing specific data (production, deployments, repairs, etc.)",
                "Search/Filter options within widgets",
                "Pinnable data",
                "Activity Feed",
                "Pin Reminders/Notifications"
            ],
            "titleImg": "../img/projectImgs/virtucom.png",
            "github": false,
            "github_link": "",
            "website": false,
            "website_link": "",
            "tools": [
                "HMTL",
                "CSS",
                "javaScript",
                "React"
            ],
            "project_imgs": null
        },

        {
            "title": "QuickQuote",
            "project_description": "E-commerce site to allow customers to place orders/get quotes on the technology devices the company provides.",
            "problem": null,
            "features": [
                "Login/Logout system",
                "Item section",
                "Search field to search for a specific item",
                "Search field to search for a previously generated quotes",
                "Filter (Brands and Categories)",
                "Shipping and Billing form",
                "Shopping Cart",
                "Overview"
            ],
            "titleImg": "../img/projectImgs/virtucom.png",
            "github": false,
            "github_link": "",
            "website": false,
            "website_link": "",
            "tools": [
                "HMTL",
                "CSS",
                "javaScript",
                "React"
            ],
            "project_imgs": null
        },

        {
            "title": "Search Tracker",
            "project_description": "Search tracking application for users to track down and get detailed information (description, progress, warranties, history) on a device that is being repaired by the company.",
            "problem": null,
            "features": [
                "Search/Filter options",
                "Progress bar",
                "History table",
                "Print option",
                "Device Description section",
                "Warranty Breakdown section",
                "Countdown/Indicator to show warranty is still active or expired",
                "Contact Support option "
            ],
            "titleImg": "../img/projectImgs/virtucom.png",
            "github": false,
            "github_link": "",
            "website": false,
            "website_link": "",
            "tools": [
                "HMTL",
                "CSS",
                "javaScript",
                "React"
            ],
            "project_imgs": null
        },

        {
            "title": "Label Generator",
            "project_description": "Label generating application to allow users to create and customize shipping labels.",
            "problem": null,
            "features": [
                "Set of defined templates to choose from",
                "Add, edit, delete, and save label events",
                "Drag and drop capability (while editing)",
                "Add and remove page events",
                "Download event to print out labels"
            ],
            "titleImg": "../img/projectImgs/virtucom.png",
            "github": false,
            "github_link": "",
            "website": false,
            "website_link": "",
            "tools": [
                "HMTL",
                "CSS",
                "javaScript",
                "php"
            ],
            "project_imgs": null
        },

        {
            "title": "Deployment Calendar",
            "project_description": "This is a redesign of an existing deployment calendar application to show delivery destinations dedicated to a specific driver within the company.",
            "problem": "The deploymeny calendar application that's being used isn't as dynamic or user friendly. Our user's would like a more interactive application that allows them to easily see the deployments they are assigned to, have the ability to search, and more viewing options then just the default calendar view. Improving this application will be able to increase delivery efficiency by 10%.",
            "features": [
                "Month, Week and Day views",
                "Back and forth toggle capability",
                "Search field to allow users to search for/jump to a specific delivery event within the calendar",
                "Color coded delivery events based on delivery method",
                "Hover capability on delivery events to give brief information of delivery and the driver(s) assigned to it"
            ],
            "titleImg": "../img/projectImgs/virtucom.png",
            "github": false,
            "github_link": "",
            "website": false,
            "website_link": "",
            "tools": [
                "HMTL",
                "CSS",
                "javaScript",
                "php"
            ],
            "project_imgs": null
        },

        {
            "title": "vBid Analytics",
            "project_description": "Analytic software that provides an in-depth overview of bids, wins etc., for the sales team – providing the company with accurate visual representations of the sale team’s performance.",
            "problem": null,
            "features": [
                "Pie chart visual represention to show data dedicated to specific analytic the user wants to see",
                "Table depicting data",
                "Search feature",
                "Comparable capability"
            ],
            "titleImg": "../img/projectImgs/virtucom.png",
            "github": false,
            "github_link": "",
            "website": false,
            "website_link": "",
            "tools": [
                "HMTL",
                "CSS",
                "Bootstrap",
                "javaScript"
            ],
            "project_imgs": null
        }
    ]
}

ReactDOM.render(<Portfolio projects={projects.projects}/>, document.getElementById('portfolioMain'));