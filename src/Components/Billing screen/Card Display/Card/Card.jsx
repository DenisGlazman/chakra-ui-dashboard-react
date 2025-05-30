import './Card.css'
import CardDisplay from "../CardDisplay.jsx";
import PaymentMethod from "../../Payment Method/Payment Method.jsx";

const Card = () => {
    return (
        <div className="card-container">
            <CardDisplay/>
            <PaymentMethod/>
        </div>
    )
}
export default Card;