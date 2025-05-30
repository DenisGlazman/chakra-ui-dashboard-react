import img from './images/@ 2021, Made with ❤️ by Creative Tim & Simmmple for a better web.svg'
import './Footer.css'

const Footer = () => {
    return(

        <div className="footer">
            <div className="copyright"><img alt='#' src={img}/></div>
            <div className="footer-links">
                <a href="#" >Creative Tim</a>
                <a href="#" >Simmmple</a>
                <a href="#" >Blog</a>
                <a href="#" >License</a>
            </div>
        </div>


    )
}
export default Footer