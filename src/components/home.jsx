import { useState } from 'react';
import { FooterCom } from './footer';
import './home.css';

export function HomeComponent() {
  const [question,setQuestion] = useState(false);
  const [secQuestion,setSecQuestion] = useState(false);
  const [ thirdQuestion,setThirdQuestion] = useState(false);
  const [fourthQuestion,setFourthQuestion] = useState(false);
  const [fifthQuestion,setFifthQuestion] = useState(false);




  function selectedQuestion(){
  setQuestion(prev => !prev)
  }
  function questiontWO(){
    setSecQuestion(prev => !prev)
  }
  function questionThree(){
    setThirdQuestion(prev => !prev)
  }
  function questionFour(){
    setFourthQuestion(prev => !prev)
  }
  function questionFive() {
    setFifthQuestion(prev  => !prev)
  }

  return (
    <>
  <div className="hero-section">
  
  <div className="hero-text">
    <p className="hero-title">
      The <span className="highlight">best</span> fundraising <br />
      platform in <span className="highlight-green">Africa</span>
    </p>
    
    
    <p className="hero-subtext">
      Understanding the unique challenges of African SMEs and Startups, 
      our innovative solutions streamline your journey to success.
    </p>

    <div className="hero-buttons">
      <button className="btn-primary">Get Started with Koppoh</button>
      <button className="btn-outline">Watch how to apply</button>
    </div>
  </div>

  <div className="hero-image">
    <img className="dashboard-img" src="/images (6).png" alt="dashboard preview" />

    <img className="floating top-left" src="/top-left.d139fd35.png" alt="card" />
    <img className="floating right-card" src="/middle-right.0026ec86.png" alt="card" />
    <img className='floating bottom-card' src='/bottom-left.b952eae7.png' alt='card' />
  </div>
</div>

<div className='eneral-secure'>
<h2>Secure the funding you need!</h2>

 <div className='secure-group'>
  
  <p className='secure-p'>We streamline your fundraising journey with products and services designed to ensure the success of your <span>business.</span></p>
  </div>


 </div>

 <section className="smartmatch-section">
  <p className='smartMatch'>SmartMatch</p>
  <div className='smart-word'>
<p className="intro">
    Instantly connect with multiple investors ready to support your vision.  
    If you have a compelling pitch deck and a solid value proposition,  
    our smart investor match & data tool is your quickest path to securing funding.
  </p>

  <ul className="benefits">
    <li>
      <img src="/check-icon.svg"  />

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-6 h-6 text-green-accent-500 iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24">
  <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12.475q.425 0 .713.288t.287.712t-.288.713t-.712.287H5v14h14v-6.5q0-.425.288-.712T20 11.5t.713.288t.287.712V19q0 .825-.587 1.413T19 21zm6.525-6.8l8.5-8.5q.275-.275.675-.275t.7.275t.3.7t-.3.725L12.225 16.3q-.3.3-.7.3t-.7-.3l-4.25-4.25q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></path>
</svg>

      Increase response rates from investors by 40%
    </li>
    <li>
      <img src="/check-icon.svg" />
      Save 80% of your time and energy in applying
    </li>
    <li>
      <img src="/check-icon.svg"  />
      Connect with a database over 3000 active investors
    </li>
  </ul>

  <a className="cta">Get started with SmartMatch</a>
  <div>
     <img className="illustration" src="/smart-connect-pic.87f00e6a.svg" />
  </div>
  
  </div>
  
</section>

 <div className='guided'>
 <div>
  <img className='guided-img' src='/guided-application-pic.b84bcb89.svg' />
 </div>
 <div className='g-words'>
    <h3>Guided Fundraise</h3>
 <p className='receive'>Receive tailored guidance and support to ensure you're investor-ready. If you need help refining your pitch or preparing your documents, our guided fundraise service is designed for you.</p>
 <p><span>Improve your pitch deck quality by 150% with expert review</span></p>
 <p><span>Personalized support for document preparation and insights</span></p>
 <p><span>Connect with investor through direct introductions</span></p>
 <p className='cta'>Get started with Guided Fundraise</p>
 </div>
 </div>

<div className='general-expand'>
 <div >
  <h4>Expand Your Reach,
  <br/>
Accelerate Growth</h4>
<p className='our-platform'>Our platform is a one-stop-shop for all your fundraising needs which includes document preparation, venture building, legal counsel and others.</p>

<p className='list'><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-6 h-6 text-green-accent-500 iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12.475q.425 0 .713.288t.287.712t-.288.713t-.712.287H5v14h14v-6.5q0-.425.288-.712T20 11.5t.713.288t.287.712V19q0 .825-.587 1.413T19 21zm6.525-6.8l8.5-8.5q.275-.275.675-.275t.7.275t.3.7t-.3.725L12.225 16.3q-.3.3-.7.3t-.7-.3l-4.25-4.25q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></path></svg></span>   Gain insights that increase your strategic clarity by 40%</p>
<p className='list'><span><svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="w-6 h-6 text-green-a-500 iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12.475q.425 0 .713.288t.287.712t-.288.713t-.712.287H5v14h14v-6.5q0-.425.288-.712T20 11.5t.713.288t.287.712V19q0 .825-.587 1.413T19 21zm6.525-6.8l8.5-8.5q.275-.275.675-.275t.7.275t.3.7t-.3.725L12.225 16.3q-.3.3-.7.3t-.7-.3l-4.25-4.25q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></path></svg></span>Accelerate growth by 50%</p>
<p className='list'><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-6 h-6 text-green-accent-500 iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12.475q.425 0 .713.288t.287.712t-.288.713t-.712.287H5v14h14v-6.5q0-.425.288-.712T20 11.5t.713.288t.287.712V19q0 .825-.587 1.413T19 21zm6.525-6.8l8.5-8.5q.275-.275.675-.275t.7.275t.3.7t-.3.725L12.225 16.3q-.3.3-.7.3t-.7-.3l-4.25-4.25q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"></path></svg></span>Improve document quality by 30%</p>

</div>
<div>
 <img src='/expand-reach.500637ff.svg' />

 </div>

 </div>

 <div className='image-animation'>
 <div className='grid-img'>
 <div className='imaes'>
      <img src='/sanyade.fab7ac51.png' />
     <img className='sec-img' src='/quote.6278b98f.svg' />
 </div>
   
  <p>Our aim is to position Koppoh as a transformative solution catering precisely to market needs and we are committed to communicating that Koppoh is the definitive answer to the challenges faced by businesses in today's dynamic environment
  
<br/>
<br/>
<br/>
<br/>
Sanyade Okoli</p>
   
  

 </div>
 <div className='grid-img' >
 <div className='imaes'>
<img src='/ijeoma.f23d9a73.png' />
 <img className='sec-img' src='/quote.6278b98f.svg' />
 </div>
<p>
Our focus is on fostering growth and empowering enterprises to navigate and excel in the ever-evolving market landscape. We believe that Koppoh stands at the forefront of technological advancement, providing unparalleled support and expertise to our clients.

<br/>
<br/>
<br/>
<br/>
Ijeoma Taylaur
</p>
 </div>
 
 </div>
 



 <div className='blog'>
  <span className='blo'>Blog posts</span>
  <span className='no-blo'>No blog post here</span>
  <span className='visit-blo'>visit blog page</span>
 </div>

 <div className='ques'>

 <div>
  <h5>FAQ</h5>
  <p className='faq'>We have diverse, motivated investors with unique insights and preferences for your business.</p>
  </div>

  <div className='questions'>
  <div>
<p className='koppoh' onClick={selectedQuestion} >What is Koppoh?</p>

 {question && (<p>Koppoh is a platform dedicated to automating services, and providing businesses with the tools to independently generate essential fundraising documents and seamlessly connect with potential investors.</p>)}
    
  </div>
  <span className='line-through'></span>


  <div>
    <p className='koppoh'  onClick={questiontWO}>What sets Koppoh apart from other platforms?</p>
   {secQuestion && (<p>Koppoh not only offers a template library for document creation but also provides comprehensive financial advisory services and facilitates direct connections with investors, making it an all-encompassing solution for businesses seeking financial support.</p>)}
  </div>
     <span className='line-through'></span>

  <div>
    <p className='koppoh' onClick={questionThree}>What services does Koppoh provide?</p>
   {thirdQuestion && (<p>Koppoh offers services the following services: o Capital raising (a direct connection with investors) o Financial advisory (including pitch deck templates, custom business plans, financial models, valuations, teaser templates, and custom capital tables).</p>)}
  </div>
<span className='line-through'></span>

  <div>
    <p className='koppoh' onClick={questionFour}>How does Koppoh support businesses in their financial interactions?</p>
    {fourthQuestion && (<p>Koppoh's goal is to be a one-stop platform for financial interactions. From preparing fundraising documents to connecting with investors, we aim to provide businesses with a comprehensive suite of services.</p>)}
  </div>
<span className='line-through'></span>

  <div>
  <p className='koppoh' onClick={questionFive}>How can I access Koppoh's services?</p>
 {fifthQuestion && (<p>To access Koppoh's services, you need to create an account on our platform, complete the onboarding process, and start utilising our template library and advisory services.</p>)}
  </div>
  </div>
  </div>
  
    
    </>
  );
  }










 