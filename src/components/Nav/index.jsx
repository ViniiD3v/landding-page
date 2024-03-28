import './Nav.css'

const Nav = () => {
    return (
        <div className='Nav'>
            <div className='img-nav'>
                <img src = "./image/logo.svg.png" alt="logo"/>
            </div>
            <div className='Nav-a'>
                <a href="#">iPhone</a>
                <a href="#">Android</a>
                <a href="help">Help</a>
                <a href="#">Company</a>
            </div>
            <div className='btn'>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Nav