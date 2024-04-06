import './informations.css'

const Informations = () => {
    return (
        <section  className='informations'>
            <div className='main-infos'>
                <div className='tittle'>
                    <h1>At Certo, mobile security <br /> is not an afterthought, it’s <br /> what we do.</h1>
                    <p>With years of experience in mobile security and <br /> spyware detection, our products have helped<br />countless people safeguard their devices and <br /> find peace of mind.</p>
                </div>
                <div className='btns'>
                    <button id='yellow'>Get Certo for iPhone <i class="fa-solid fa-arrow-right"></i></button>
                    <button id='white'>Get Certo for Android</button>
                </div>
            </div>
            <div className='img-infos'>
                <img src="../assets/informations-img/infos.jpeg.png" alt="" />
            </div>

        </section>
    )
}

export default Informations