import './Downlink.css'
import ask from "../SideBar_Icons/IconAsk.svg";
const Downlink = () => {
    return (
        <div className="downlink-container">
            <div className="downlink">
                <div className="icon_ask">
                    <img src={ask} alt={'Dashboard'}/>
                    <h3>Need help?</h3>
                    <h4>Please check our docs</h4>
                    <button className='documentation'>DOCUMENTATION</button>

                </div>
            </div>

        </div>
    )
}
export default Downlink;