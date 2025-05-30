import './Billing.css'
import Invoices from "../Invoices/Invoices";
import Card from "../Card Display/Card/Card.jsx";
import YourTransaction from "../Your Transactions/YourTransaction.jsx";
import BillingInformation from "../Billing Information/Billing_Information.jsx";
const Billing=()=>{
    return (
        <div className="billing-container">
            <div className="billing-upper-wrapper">
                <Card/>
                <Invoices/>
            </div>
            <div className="billing-lower-wrapper">
                <BillingInformation/>
                <YourTransaction/>
            </div>
        </div>
    )
}
export default Billing