import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class ContactUs extends React.Component{
    render() {
        return(

         <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
               <div class="section-title">
                  <h2>Contact</h2>
               </div>
            </div>
            <div style={{marginLeft:150, marginTop:50}}>
               <div className="row" style={{}}>
                  <div className="col-md-6" style={{}}>
                     <div className="row" style={{}}>
                        <div className="col-md-6" style={{}}>
                        <h2>Our Address</h2>
                        <p style={{marginTop:10}}>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className="col-md-6" style={{}}>
                        
                        </div>
                        
                     </div>
                     <div className="row" style={{}}>
                        <div className="col-md-6" style={{}}>
                           <h2>Email us</h2>
                           <p>info@example.com</p>
                        </div>
                        <div className="col-md-6" style={{}}>
                           <h2>Call us</h2>
                           <p>+1 5589 55488 55</p>
                        </div>
                     </div>
                  
                  </div>
                  
                  <div className="col-md-6" style={{}}>
                  <div class="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
                  
                  </div>
               </div>
</div>

         </section>
         
          
    );
  }
}
export default ContactUs;