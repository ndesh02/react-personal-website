import React from 'react'
import { Button } from './Button';
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join
                </p>
                <p className='footer-subscription-text'>
                    Unsub at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' 
                        name='email' 
                        placeholder='your email'
                        className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                    
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/react-personal-website/services'>Test</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/react-personal-website'>Test</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/react-personal-website'>Test</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Test</Link>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Test</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Test</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Test</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Test</Link>
                    </div>
                </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL 2021</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                            >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <i className='fab fa-instagram'/>
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='Linkedin'
                            >
                            <i className='fab fa-linkedin-in'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
