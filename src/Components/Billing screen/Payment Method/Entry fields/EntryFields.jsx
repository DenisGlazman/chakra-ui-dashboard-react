import './EntryFields.css'
const EntryFields = () => {
    return (
        <div className="entry-fields-container">
            <div className="entry-fields-title">
                <img src="Billing_page_images/Mastercard_Icon.svg" alt="card"/>
                <input placeholder="Card Number" type={"text"}/>
            </div>
            <div className="entry-fields-title">
                <img src="Billing_page_images/Visa_Icon.svg" alt="card"/>
                <input placeholder="Card Number" type={"text"}/>
            </div>

        </div>
    )
}
export default EntryFields;