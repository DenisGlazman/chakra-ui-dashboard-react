import './Payment_Method.css'
import Button from "./Button/Button.jsx";
import EntryFields from "./Entry fields/EntryFields.jsx";
const PaymentMethod =
    () =>{
    return (
        <div className="payment-method-container">
            <Button/>
            <EntryFields/>
        </div>
    )
    }
    export default PaymentMethod