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
        pageChange();
        this.setState({selectedProject: this.state.projects[key], selectedProjectSwitch:true})
        window.scrollTo(0, 0);
    }

    redirectHome(){
        window.location.href = "../index.html"
    }

    render() {
        
        return (

            this.state.selectedProjectSwitch == false ? 

                <div className="portfolio-container">
                    <div className="portfolio-container-header">
                        <div className="portfolio-signature-container" onClick={this.redirectHome}>
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

    componentDidMount() {
        window.scrollTo(0, 0)
      }
}


function pageChange() {
    window.history.pushState('Levi Sutton', 'Levi Sutton', "portfolio.html")
}

$(window).bind('popstate', function () {
    window.location.replace(`portfolio.html`);
});

var projects = {
"projects": 
    [
        {
            "title": "Inventory Management System",
            "project_description": "This is a redesign/rework of an exisisting inventory management system. This system allows the company to manage, maintain records and provide analytical data on our devices.",
            "problem": "The way the inventory system is setup currenlty is'nt user friendly, due to parts of the process being a bit spaced out in different locations. Our users would like to be able to have everything related to inventory within a centralized location, providing a better user experience and making it easier to keep track of inventory in the future. Reworking this application would make it easier on the company, especially for those in production that are in charge of handling and maintaining inventory.",
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
            "problem": "Customers have complained that QuickQuote is hard to navigate, not very user friendly and find it to be a hassle to call the company every time they need to inquire about devices, due the difficult nature of the application. By improving this application we will be able to increase sales and show our customers we're dedicated to providing more user friendly applications.",
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
            "problem": "Our customers would like a way of tracking the devices they send back to the company for repairs, as well as, the state the device is in when in repair. The only way they can track this process, currently, is by inquiring through email or phone call. Having this application will allow our customers to not go through such a hassle and give them in depth knowledge on the devices they've sent to us, not only currently, but in the past as well.",
            "features": [
                "Search/Filter options",
                "Progress bar",
                "History",
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
            "project_description": "This is a rework of an exisisting label generating application that allow users to create and customize shipping labels/templates.",
            "problem": "The current application isn't being greatly used, due to the difficulty of the process it take to use the application. Our users would like to be able to have a more user-friendly and interactable experience that allows them to customize the labels/template to fit their needs. Improving this application will allow our workers to create labels at a more efficient and increase productivity by 5%.",
            "features": [
                "Set of defined templates to choose from",
                "Add, edit, delete, and save label events",
                "Drag and drop capability (while editing)",
                "Add and remove page events",
                "Download"
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
                "Search field to allow users to search for/jump to a specific delivery event within the calendar",
                "Color coded delivery events",
                "Hover capability on delivery events (gives brief information of the delivery and the driver(s) assigned to it)"
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
            "problem": "Our Sales Team would like a way of seeing data dedicated to the performance of the work they're doing. They would like to be able to compare these statitical data to show how well they're doing in one area opposed to another from a performance stand point, as well as, detailed information on each data point. Being able to have the capability to see and monitor each memebers performance can show what areas a member is showing improvement or needs to improve on in order to become better sales professionals.",
            "features": [
                "Pie chart visual represention to show data dedicated to specific analytic the user wants to see",
                "Table depicting data",
                "Search feature",
                "Export to Excel option",
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