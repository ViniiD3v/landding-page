import Carousel from '../carousel'
import './Feedback.css'

const Feedback = () => {
    return (
        <section className='Main-marcas'>
            <div className='tittle'>
                <h1>Loved by thousands of iPhone <br /> and Android users alike</h1>
            </div>

            <Carousel/>

            <div className='patrocinios'>
                <h2>Featured in:</h2>

                <div className='marcas'>
                    <img src="../assets/feedback-img/marca.png" alt="" />
                    <img src="../assets/feedback-img/marca2.png" alt="" />
                    <img src="../assets/feedback-img/marca3.png" alt="" />
                    <img src="../assets/feedback-img/marca4.png" alt="" />
                    <img src="../assets/feedback-img/marca5.png" alt="" />
                    <img src="../assets/feedback-img/marca6.png" alt="" />
                </div>
                
            </div>
        </section>
    )
}

export default Feedback