import img from './images/@ 2021, Made with ❤️ by Creative Tim & Simmmple for a better web.svg'
import './Footer.css'

const Footer = () => {
    return(

        <div className="footer">
            <div className="copyright"><img alt='img' src={img}/></div>
            <div className="footer-links">
                <p>Creative Tim</p>
                <p>Simmmple</p>
                <p>Blog</p>
                <p>License</p>
            </div>
        </div>


    )
}
export default Footer