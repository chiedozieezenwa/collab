import design from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={design.container}>        
        <div className={design.foot_features}>
            <div className={design.list_items}>
                <h5>Company Info</h5>
                <Link to='#'>About Us</Link>
                <Link to='#'>Carrier</Link>
                <Link to='#'>We are hiring</Link>
                <Link to='#'>Blog</Link>
            </div>
            <div className={design.list_items}>
                <h5>Legal</h5>
                <Link to='#'>About Us</Link>
                <Link to='#'>Carrier</Link>
                <Link to='#'>We are hiring</Link>
                <Link to='#'>Blog</Link>
            </div>
            <div className={design.list_items}>
                <h5>Features</h5>
                <Link to='#'>Business Marketing</Link>
                <Link to='#'>User Analytic</Link>
                <Link to='#'>Live Chat</Link>
                <Link to='#'>Unlimited Support</Link>
            </div>
            <div className={design.list_items}>
                <h5>Resources</h5>
                <Link to='#'>IOS & Android</Link>
                <Link to='#'>Watch a Demo</Link>
                <Link to='#'>Customers</Link>
                <Link to='#'>API</Link>
            </div>
            <div className={design.list_items}>
                <h5>Get In Touch</h5>
                <form action="">
                    <input type="text" placeholder='Your Email'/>
                    <button>Subscribe</button>
                </form>
                <p>Lore imp sum dolor Amit</p>
            </div>
        </div>
        <div className={design.copyright_section}>
            <h6>Made With Love By Finland All Right Reserved </h6>
        </div>
    </footer>
  )
}

export default Footer