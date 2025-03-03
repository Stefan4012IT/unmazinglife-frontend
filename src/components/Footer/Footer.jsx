import React from 'react';

import logoHeader from '../../assets/LogoUnmazeFooter.svg';
import icon_fb from '../../assets/icons/icon_fb.svg';
import icon_insta from '../../assets/icons/icon_insta.svg';
import icon_ln from '../../assets/icons/icon_ln.svg';
import icon_yt from '../../assets/icons/icon_yt.svg';
import appStore from '../../assets/icons/icon_appStore.svg';
import googleStore from '../../assets/icons/icon_googleStore.svg';
import Subscription from '../Subscription/Subscription';

const Footer = () => {
  return (
    <footer className='footer-1'>
        <div className="container">
            <div className="wrapper">
                <Subscription />
                <div className='footer-box'>
                    <div className='first-box'>
                        <div><img className='logoHeader' src={logoHeader} alt='logo unmaze' /></div>
                        <div className="links">
                            <p>support@example.com</p>
                            <p>+381 11 222 333 444</p>
                        </div>
                        <div className='icon-box-1'>
                            <img src={icon_fb} alt='icon_1' className='icon_pac-1' />
                            <img src={icon_insta} alt='icon_2' className='icon_pac-1' />
                            <img src={icon_ln} alt='icon_3' className='icon_pac-1' />
                            <img src={icon_yt} alt='icon_4' className='icon_pac-1' />
                        </div>
                    </div>
                    <div className='second-box'>
                        <h3>Useful Links</h3>
                        <div className="links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Features</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className='third-box'>
                        <h3>Help & Support</h3>
                        <div className="links">
                            <a href=''>F&Q</a>
                            <a href=''>Support</a>
                            <a href=''>How it works</a>
                            <a href=''>Terms & conditions</a>
                            <a href=''>Privacy policy</a>
                        </div>
                    </div>
                    <div className='fourth-box'>
                        <h3>Let’s Try Out</h3>
                        <img src={appStore} alt='icon_4' className='icon_pac-2' />
                        <img src={googleStore} alt='icon_4' className='icon_pac-2' />
                    </div>
                </div>
            </div>

        </div>

    </footer>
  );
};

export default Footer;