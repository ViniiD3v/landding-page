import './card-page.css'

const CardPage = () => {
    return (
        <section className='card-page'>
            <h1>Get your freedom back, stop mobile <br /> spyware today</h1>
            <div className='card-infos'>
                <div className='line-one'>
                    <div className='icon'>
                        <img src="../assets/card-page-img/icon1.png" alt="" />
                        <h2>Spyware detection</h2>
                        <p>Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
                    </div>
                    <div className='icon'>
                        <img src="../assets/card-page-img/icon2.png" alt="" />
                        <h2>Keylogger detection</h2>
                        <p>Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).</p>
                    </div>
                    <div className='icon'>
                        <img src="../assets/card-page-img/icon3.png" alt="" />
                        <h2>Find tracking apps</h2>
                        <p>Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.</p>
                    </div>
                </div>
                <div className='line-two'>
                    <div className='icon'>
                        <img src="../assets/card-page-img/icon4.png" alt="" />
                        <h2>OS integrity check</h2>
                        <p>Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
                    </div>
                    <div className='icon'>
                        <img src="../assets/card-page-img/icon5.png" alt="" />
                        <h2>Threat removal</h2>
                        <p>Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
                    </div>
                    <div className='icon'>
                        <img src="../assets/card-page-img/icon6.png" alt="" />
                        <h2>Easy to use</h2>
                        <p>We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.</p>
                    </div>
                </div>
                <div className='buttons'>
                    <button id='yellow'>Get Certo for iPhone <i class="fa-solid fa-arrow-right"></i></button>
                    <button id='white'>Get Certo for Android</button>
                </div>
            </div>
        </section>
    )
}

export default CardPage