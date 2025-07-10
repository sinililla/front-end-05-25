import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'


export const ContactUs = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7gn5qzo', 'template_c60vcsl', form.current, {
        publicKey: 'xFETjEUTMhMWi2luX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <br />
      <label>{t("email.name")}</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>{t("email.email")}</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>{t("email.message")}</label> <br />
      <textarea name="message" /> <br /> <br />
      <input type="submit" value={t("email.send")}/>
    </form>
  );
};
export default ContactUs
