import './footer.css'

const Footer = () => {
    return (
        <section className='certo-footer'>
            <div className='footer'>
                <div className='social-midia'>
                    <h2>Scan. Detect. Remove.</h2>
                    <div className='icon-social'>
                        <img src="./image/twitter.png" alt="" />
                        <img src="./image/facebook.png" alt="" />
                        <img src="./image/yt.png" alt="" />
                    </div>
                    <div className='links'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <div className='copyright'>
                        <h3>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</h3>
                        <p>Designed & developed by Bigger Picture</p>
                    </div>
                </div>
                <div className='certo'>
                    <div className="tittle">
                        <h2>Certo</h2>
                    </div>
                    <div className='list'>
                        <ul>
                            <li>iPhone</li>
                            <li>Android</li>
                            <li>Help</li>
                            <li>About</li>
                            <li>Insight</li>
                        </ul>
                    </div>
                </div>
                <div className='form'>
                    <div className='e-mail'>
                        <h2>Sign up to our newsletter</h2>
                        <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        <input type="email" placeholder='Email address' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className='credits'>
                <p>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other <br />countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play <br />logo are trademarks of Google LLC.</p>
            </div>
        </section>
        
    )
}

export default Footer