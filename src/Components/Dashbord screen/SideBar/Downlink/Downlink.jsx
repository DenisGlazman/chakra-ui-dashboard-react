import './Downlink.css'
import ask from "../SideBar_Icons/ask.png";
const Downlink = () => {
    return (
        <div className="downlink-container">
            <div className="downlink">
                <div className="icon_ask">
                    <img src={ask} alt={'Dashboard'}/>
                </div>

                <div className="text">
                    <h3>Need help?</h3>
                    <h4>Please check our docs</h4>
                </div>
                <div className="button">
                    <button>DOCUMENTATION</button>
                </div>



            </div>
        </div>
    )
}
export default Downlink;