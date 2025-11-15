import { FooterCom } from './footer';

import './about.css'


export function AboutComponent(){
  return(
    <>
    <section >
    <img className='strip' src="/strip.201c0307.svg" alt="strip" />
    <div className='first-sec'>
      
    </div>
    <div className='first-div'>
      <p className="who">Who we are</p>
      <p className='para'>Koppoh is a platform dedicated to automating services, empowering businesses to craft essential documents needed for fundraising independently.
      <br/>
      <br/>
      <br/>
      Our solutions, enables businesses to generate high-level documentation autonomously and seamlessly connect with potential investors.
      <br/>
      <br/>
     <br/> 
     The roadmap for Koppoh encompasses multiple dimensions. From the preparation of fundraising documents to the connection to investors, we aspire to be the go-to platform for financial interactions. Our goal is to provide not just a platform but a comprehensive suite of services that can help to support businesses.</p>
    </div>
    </section>
    <div className='main'>
    <div className='sec-div'> 
    
      <div className='img-im'>
        <img src="/about-us-image.1b87b2ad.png" />
      </div>

      <div className='vis-mis'>
        <p className='vision'>Vision</p>
        <p className='vis-p'>African MSMEs are empowered to thrive because of easy-to-use and affordable digital business support solutions.</p>

        <p className='mission'>Mission</p>
        <p className='mis-p'>To develop simple, accessible and innovative digital business support solutions that meet the evolving needs of African MSMEs.</p>
      </div>

     
    </div>
<p className='our'>Our core values</p>
    <div  className='third-div' >

  <div className='sv-div'>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 mx-auto -rotate-90 iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"></path><path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"></path></svg>
    <p>Simplicity</p>
  </div>

  <div  className='sv-div'>
    
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 mx-auto rotate-180 iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m3.55 19.09l1.41 1.41l1.79-1.8l-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm12-6.95v3.96l1 .58c1.24.72 2 2.04 2 3.46c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.42.77-2.74 2-3.46l1-.58V4.05zm2-2H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zM20 11h3v2h-3zm-2.76 7.71l1.79 1.8l1.41-1.41l-1.8-1.79z"></path></svg>
    <p>Innovation</p>
  </div>
  <div className='sv-div'>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 mx-auto iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="17" cy="15.5" r="1.12" fill="currentColor" fill-rule="evenodd"></circle><path fill="currentColor" fill-rule="evenodd" d="M17 17.5c-.73 0-2.19.36-2.24 1.08c.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08"></path><path fill="currentColor" fill-rule="evenodd" d="M18 11.09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55A5.97 5.97 0 0 0 17 23c3.31 0 6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M11 17c0 .56.08 1.11.23 1.62c-.24.11-.48.22-.73.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91m6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></path></svg>
    <p>Trustworthy</p>
  </div>
  <div className='sv-div'>
    
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 mx-auto iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="17" cy="15.5" r="1.12" fill="currentColor" fill-rule="evenodd"></circle><path fill="currentColor" fill-rule="evenodd" d="M17 17.5c-.73 0-2.19.36-2.24 1.08c.5.71 1.32 1.17 2.24 1.17s1.74-.46 2.24-1.17c-.05-.72-1.51-1.08-2.24-1.08"></path><path fill="currentColor" fill-rule="evenodd" d="M18 11.09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55A5.97 5.97 0 0 0 17 23c3.31 0 6-2.69 6-6c0-2.97-2.16-5.43-5-5.91M11 17c0 .56.08 1.11.23 1.62c-.24.11-.48.22-.73.3c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5 2.4v3.51c-2.84.48-5 2.94-5 5.91m6 4c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></path></svg>
<p>Accessibility</p>
  </div>
  <div className='sv-div'>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 mx-auto iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4l-4-4v2.73c-3.15-.56-5-1.9-5-2.73c0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58c0-2.76-4.48-5-10-5"></path></svg>
    <p>Transformational</p>
  </div>
 
  
</div>

      </div>
    
    </>
  );
}