import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import ContectBg from '../assets/contectbg5.jpg';

const Contact = React.forwardRef((props, ref) => {
  const form = useRef(); // Create a reference to the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Use EmailJS to send the form data
    emailjs.sendForm('service_iyw1s0b', 'template_mwtb8od', form.current, 'Mw_Kfh0fzia_Psg_Q')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');

        // Send auto-reply to the user
        sendAutoReply(form.current.elements.email.value, form.current.elements.name.value);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message. Please try again.');
      });

    // Reset the form fields after submission
    e.target.reset();
  };

  const sendAutoReply = (toEmail, fromName) => {
    // Use EmailJS to send the auto-reply
    emailjs.send('service_iyw1s0b', 'template_c0719ww', {
      to_email: toEmail, // Use the user's email from the form
      from_name: 'Shivam Kumar', // Replace with your company or personal name
      message_html: `Hello ${fromName},\n\nThank you for your message. We have received your inquiry and will respond shortly.\n\nBest regards,\nShivam Kumar`
    }, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Auto-reply sent successfully:', result.text);
      }, (error) => {
        console.error('Failed to send auto-reply:', error.text);
      });
  };

  return (
    <div id="Contact" style={{ backgroundImage: `url(${ContectBg})` }} className='h-screen w-screen bg-cover bg-no-repeat bg-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-white text-4xl mt-36'>
          Talk With Me
        </div>
        <div className='m-10'>
          <form ref={form} onSubmit={sendEmail}>
            <input className='text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' required type='text' name='name' placeholder='Name' />
            <br />
            <br />
            <input className='text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' required type='email' name='email' placeholder='Email' />
            <br />
            <br />
            <input className='text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' required type='text' name='subject' placeholder='Subject' />
            <br />
            <br />
            <textarea className='text-gray-500 bg-transparent border-b rounded-b focus:outline-none placeholder-gray-500' required rows={6} cols={30} name='message' placeholder='Message'></textarea>
            <br />
            <br />
            <div className='flex justify-center'>
              <button type="submit" className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;
