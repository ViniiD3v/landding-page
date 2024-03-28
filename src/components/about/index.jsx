import './about.css'

const About = () => {
    return (
        <section className='about'>
            <div className='card-about'>
                <div className='card-one'>
                   <h2>Read our story</h2>
                   <p>Find out why thousands trust Certo to secure <br/> their mobile world.</p>
                   <button id='btn-card-one'>About us <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='card-two'>
                    <h2>Help Center</h2>
                    <p>Help topics, getting started guides and FAQs.</p>
                    <button id='btn-card-two'>Visit help center</button>
                </div>
            </div>
        </section>
    )
}

export default About