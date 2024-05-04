import { ValidationError, useForm } from '@formspree/react';
import { en } from '@msanvarov/i18n';
import { useEffect, useState } from 'react';
import { Alert, Form } from 'reactstrap';

export const ContactMe = () => {
  const [state, handleSubmit] = useForm('xeqbqqwj');
  const [displayBanner, setDisplayBanner] = useState(false);

  useEffect(() => {
    if (state.submitting) {
      setDisplayBanner(false);
    }
    if (state.succeeded) {
      setDisplayBanner(true);
    }

  }, [state]);

  return (
    <div className='contact-area'>
      <div className="contact-form">
        <div className="shadow-box">
          <img src="/assets/bg1.png" alt="BG" className="bg-img" />
          <img src="/assets/icons/icon3.png" alt="Icon" />
          <h1
            dangerouslySetInnerHTML={{
              __html: en.contact.form.heading,
            }}
          ></h1>
          <Form onSubmit={handleSubmit}>
            <Alert
              className="messenger-box-contact__msg"
              role="alert"
              color="success"
              isOpen={displayBanner}
              toggle={() => setDisplayBanner(false)}
            >
              {en.contact.form.onCompletion}
            </Alert>

            <div className="input-group">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name *"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email *"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="topic"
                id="topic"
                required
                placeholder="Topic *"
              />
              <ValidationError
                prefix="topic"
                field="topic"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Message *"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <button
                className="theme-btn submit-btn"
                type="submit"
                disabled={state.submitting}
              >
                {en.contact.form.button.text}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}