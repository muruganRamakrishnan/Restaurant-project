import React from 'react';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='heading'>
        contact <span>us</span>
      </h1>
      <div className='row'>
        <iframe
        className='map'
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15551.424668215162!2d80.2209664!3d12.98104995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713377086966!5m2!1sen!2sin"
         
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <form>
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
              

            </div>
            <input type="submit" value="contact now" class="btn" />

        </form>
      </div>
    </section>
  );
};

export default Contact;
