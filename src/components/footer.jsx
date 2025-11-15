import './footer.css'


export function FooterCom(){
  return(
    <>
      <div className="newsletter-container">
        <div className="newsletter-header">
            <h2 className="newsletter-title">Subscribe to our
           Newsletters</h2>
            <p className="newsletter-subtitle">Get business tips, industry insights, and updates on new features delivered straight to your inbox!</p>
        </div>
        <div>
        <form className="newsletter-form">
            <input type="email" className="email-input"  required />
            <button type="submit" className="subscribe-btn">Subscribe now</button>
        </form>
       
        </div>

         </div>
      
 <div className="footer-container">
  
    <div className="footer-left">
     
      <div className="footer-logo">
        <img src="/download (1).png" alt="Koppoh logo" />
      </div>

      <p className="footer-desc">
        Koppoh helps you to prepare fundraising documentation that meets prospective investors’ needs.
      </p>

      <h3 className="footer-heading">Contact us</h3>

      <div className="footer-contact">
        <p>hello@koppoh.com</p>
        <p>+234 (0) 706 063 9202</p>
        <p>10D Lugard Avenue, Ikoyi, Lagos, Nigeria</p>
      </div>

      <div className="footer-social">
      <a href="https://www.facebook.com/koppohng" target="_blank">
      <img src="/Facebook.bae51171.svg"/></a>

        <a href="https://www.linkedin.com/company/koppoh/" target="_blank">
        <img src="/Linkedin.abf9f266.svg" alt="Linkedin" /></a>
         <a href="https://twitter.com/koppohng" target="_blank">
         <img src="/x.b8982b48.svg" alt="Twitter" /></a>
         <a href="https://www.instagram.com/koppoh.ng/" target="_blank" >
         <img src="/instagram.a7269903.svg" alt="Instagram"/> </a>
      </div>
    </div>

    <div className="footer-right">
      <div className="footer-column">
        <p>Company</p>
        <a href="#">About us</a>
        <a href="#">FAQ</a>
        <a href="#">Blog/news</a>
      </div>

      <div className="footer-column">
        <p>Solution</p>
        <a href="#">Our Solutions</a>
        <a href="#">Apply for Fund</a>
        <a href="#">Become an Investor</a>
      </div>
    </div>
  
  </div>
  <div className='final'>
  <span className='line-throuh'></span>
   <span>Powered by <a href="https://alphaafrican.com/" target="_blank"> Alpha African Advisory </a></span>
  </div>
  
    </>
  );
}