import './Billing.css'
import PAYMENT_METHOD from "../Payment Method/PAYMENT_METHOD.jsx";
import CardDisplay from "../Card Display/CardDisplay";
import Invoices from "../Invoices/Invoices";
import BILLING_INFORMATION from "../Billing Information/BILLING_INFORMATION.jsx";
import YOUR_TRANSACTION from "../Your Transactions/YOUR_TRANSACTION.jsx";
const Billing=()=>{
    return (
        <div className="billing-container">
            <div className="display_container">
                <div className="card&cash">
                    <div className="card-body">
                        <CardDisplay/>
                    </div>
                    <div className="payments">
                        <PAYMENT_METHOD/>
                    </div>
                </div>
                <div className="invoices">
                    <Invoices/>
                </div>
            </div>
            <div className="billing-information-container">
                <BILLING_INFORMATION/>
                <YOUR_TRANSACTION/>
            </div>
        </div>
    )
}
export default Billing