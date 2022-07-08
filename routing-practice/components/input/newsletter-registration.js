import { useRef, useContext } from 'react';

import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    const form = document.getElementById('signupForm');
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: 'Signin up...',
      message: 'Registering for newsletter',
      status: 'pending'
    });
    
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      if(response.ok) {
        return response.json()
      }
      return response.json().then((data) => {
        throw new Error(data.message || 'Something went wrong!')
      })
    })
    .then((data) => {
      notificationCtx.showNotification({
        title: 'Signed up',
        message: 'Successfully registered for newsletter!',
        status: 'success'
      });
    })
    .catch(error => {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error',
      });
    })
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
