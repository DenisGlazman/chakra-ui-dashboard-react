import './CardDisplay.css'
import Salary from "./Salary/Salary.jsx";

import Paypal from "./Paypal/Paypal.jsx";
const CardDisplay = () => {
    return (
        <div className="card-display-container">
            <div className="card-background-container">
                <img src="/Billing page images/CreditCardBackground.svg" alt="card_background"/>
            </div>
            <div className="incomes">
                <Salary/>
                <Paypal/>
            </div>


        </div>
    )
}
export default CardDisplay;