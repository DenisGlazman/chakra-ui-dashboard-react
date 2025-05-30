import './EntryFields.css'
const EntryFields = () => {
    return (
        <div className="entry-fields-container">
            <div className="entry-fields-title">
                <img src="/Billing page images/Mastercard%20Icon.svg" alt="card"/>
                <input placeholder="Card Number" type={"text"}/>
            </div>
            <div className="entry-fields-title">
                <img src="/Billing page images/Visa%20Icon.svg" alt="card"/>
                <input placeholder="Card Number" type={"text"}/>
            </div>

        </div>
    )
}
export default EntryFields;