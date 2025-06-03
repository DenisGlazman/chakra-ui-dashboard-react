import './CardDisplay.css'
import Salary from "./Salary/Salary.jsx";
import Paypal from "./Paypal/Paypal.jsx";
import CreditCard from "./CreditCard/CreditCard.jsx";

const CardDisplay = () => {
    return (
        <div className="card-display-container">
            <div className="card-background-container">
                <CreditCard/>
            </div>
            <div className="incomes">
                <Salary/>
                <Paypal/>
            </div>


        </div>
    )
}
export default CardDisplay;