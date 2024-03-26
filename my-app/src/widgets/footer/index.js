import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <img src="/innowise_logo.svg" className="innowise-logo" />{' '}
              <h4 className="footer-h4"></h4>
              <ul className="list-unstyled social-icons">
                <li>
                  <a href="https://www.linkedin.com/company/innowise-group/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/team.innowise/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/InnowiseGroup/">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/innowise_group">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4 className="footer-h4"></h4>
              <ul className="list-unstyled footer-info">
                <li>Contact us</li>
                <li>USA +1 (917) 26 777 27</li>
                <li>Italy +39 (377) 399 44 35</li>
                <li>Poland +48 (517) 370 938</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4 className="footer-h4"></h4>
              <ul className="list-unstyled footer-info">
                <li>Services</li>
                <li>Technologies</li>
                <li>Industries</li>
                <li>Case Studies</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4 className="footer-h4"></h4>
              <ul className="list-unstyled footer-info">
                <li>About us</li>
                <li>How we work</li>
                <li>Partnership</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;2007-{new Date().getFullYear()} GeorgeKo Group. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
