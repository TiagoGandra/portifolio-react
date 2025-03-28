import { PageLinks } from './PageLinks.jsx'
import { SocialLinks } from './SocialLinks.jsx'
const Footer = () => {
  return (
    <>
        <footer className="section footer">
            <PageLinks parentClass="footer-links" parentId="footer-links" itemClass="footer-link"/>
            <SocialLinks parentClass='footer-icons' itemClass='footer-icon' />
            {/* <p className="copyright">
            copyright &copy; 2025 Tiago Gandra
            <span id="date"></span> all rights reserved
            </p> */}
        </footer>
    </>
  )
}

export default Footer