import './Section_2.css'
import chakra from './images/chakra.svg'

const Section2 = () =>{
    return (
        <div className="section_2">
            <div className="main-section_2">
                <div className="main-section_2_left">
                    <div className="main-section_2_text-left">
                        <div className='first'>Built by developers</div>
                        <div className='second'>Purity UI Dashboard</div>
                        <div className='third'>From colors, cards, typography to complex elements, you will find the full documentation.</div>
                        <a href='#' className="link">Read more --></a>
                    </div>
                    <div className="chakra-background">
                        <img src={chakra} alt='chakra logo' />
                    </div>
                </div>
                <div className="main-section_2_right">
                    <div className="main-section_2_text-right">
                        <div className="first">Work with the Rockets</div>
                        <div className="second">Wealth creation is an evolutionarily recent positive-sum game.</div>
                        <div className="third">It is all about who take the opportunity first.</div>
                        <a href='#' className="link">Read more --> </a>


                    </div>
                </div>

            </div>
        </div>
    )
}
export default Section2