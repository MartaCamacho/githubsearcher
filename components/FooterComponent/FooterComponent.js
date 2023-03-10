import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterComponent = () => {
  return (
    <footer>
      <ul className="social-list">
        <li className="social-list-item">
          <a
            href="https://github.com/MartaCamacho"
            className="social-list-link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="social-list-item">
          <a
            href="https://www.linkedin.com/in/martacamachovargas/"
            className="social-list-link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>
      <a href="mailto:contacto@martacamacho.com" className="footer-link">
        contacto@martacamacho.com
      </a>
    </footer>
  );
};

export default FooterComponent;
