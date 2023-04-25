import NavBar from '../NavBar';
import Page from '../Page';
import './styles.scss';

function Contact() {
  return (
    <Page>
      <NavBar />
      <div className="contact">
        <h1 className="contact-title">Contact</h1>
      </div>
    </Page>
  );
}

export default Contact;
