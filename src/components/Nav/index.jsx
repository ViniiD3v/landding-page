import './Nav.css'

const Nav = () => {
    return (
        <div className='Nav'>
            <div className='img-nav'>
                <img src = "../assets/nav-img/logo.svg.png" alt="logo"/>
            </div>
            <div className='Nav-a'>
                <a href="iphone">iPhone</a>
                <a href="android">Android</a>
                <a href="help">Help</a>
                <a href="company">Company</a>
            </div>
            <div className='btn'>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Nav