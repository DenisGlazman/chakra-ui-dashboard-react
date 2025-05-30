import './Paypal.css'
const Paypal = () => {
    return (
        <div className="paypal-container">
            <img src="/Billing%20page%20images/PayPalIcon.svg" alt="paypal"/>
            <span className='billing-title'>Paypal</span>
            <span className='billing-text'>Freelance Payment</span>
            <div className="line"></div>
            <span className='billing-text'>$455.00</span>
        </div>
    )
}
export default Paypal;