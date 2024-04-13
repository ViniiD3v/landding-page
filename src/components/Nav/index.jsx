import './Nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
    return (
        <div className='Nav'>
            <div className='menu'>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className='img-nav'>
                <img src="../assets/nav-img/logo.svg.png" alt="logo" />
            </div>
            <div className='Nav-a'>
                <AnchorLink href='#iphone'>iPhone</AnchorLink>
                <AnchorLink href='#android'>Android</AnchorLink>
                <AnchorLink href='#help'>Help</AnchorLink>
                <AnchorLink href='#company'>Company</AnchorLink>
            </div>
            <div className='btn'>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Nav