import  './Dashbord.css'
const Dashbord = () => {
    return(
        <div className="dashbord-container">

            <div className="dashbord-items">
                <div className="logo">LOGO
                <div className="side-panel-container">
                    <div className="side-panel">
                        <button className="side-panel-close">Dashbords</button>
                        <button className="side-panel-close">Tables</button>
                        <button className="side-panel-close">Billing</button>
                        <button className="side-panel-close">RTL</button>
                        <p>Account Pages</p>
                        <button className="side-panel-close">Profile</button>
                        <button className="side-panel-close">SignIn</button>
                        <button className="side-panel-close">SignUp</button>
                        <div className="side-panel-close">
                            <p>Please check our docs</p>
                            <button className="side-panel-close">Documentation</button>
                        </div>
                    </div>
                    <div className="side-panel"></div>
                </div>
                </div>
                <div className="header">
                <div className="main">
                    <div className="main-section-1">
                        <div className="main-section-1-left">
                            <div className="main-section-1-right-up">Page/Dashbord</div>
                            <div className="main-section-1-right-down">DASHBORD</div>
                        </div>
                        <div className="main-section-1-right">
                            <input type='text' value='Type here'/>Sign In</div>
                    </div>
                    <div className="main-section-2">
                        <div className="main-panel">1 Today’s Money</div>
                        <div className="main-panel">2 Today’s Users</div>
                        <div className="main-panel">3 New Clients</div>
                        <div className="main-panel">4 Total Sales</div>
                    </div>
                    <div className="main-section-3">~Main section 3
                        <div className="main-panel">
                            <p>Built by developers</p>
                            <h4>Purity UI Dashboard</h4>
                            <h5>From colors, cards, typography to complex elements,
                                you will find the full documentation.</h5>
                        </div>
                        <div className="main-panel">
                            <h4>Work with the Rockets</h4>
                            <h5>Wealth creation is an evolutionarily recent positive-sum game.
                                It is all about who take the opportunity first.</h5>
                        </div></div>
                    <div className="main-section-4">~Main section 4
                        <div className="main-panel">1</div>
                        <div className="main-panel">2</div></div>
                    <div className="main-section-5">~Main section 5
                        <div className="main-panel">1</div>
                        <div className="main-panel">2</div></div>
                </div>
                </div>

            </div>
            <div className="footer">Footer</div>

        </div>
    )
}
export default Dashbord;