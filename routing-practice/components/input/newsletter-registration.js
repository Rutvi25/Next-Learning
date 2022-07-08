import { useRef } from 'react';

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef = useRef()

  function registrationHandler(event) {
    const form = document.getElementById('signupForm');
    const enteredEmail = emailInputRef.current.value;
    event.preventDefault();
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
    .then((data) => console.log(data))
    form.reset()
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler} id='signupForm'>
        <div className={classes.control}>
          <input
            required
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
