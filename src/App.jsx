import React from 'react'
import './App.css'
import SignUp from './components/signup'
import Icons from './components/icons'
import Showcase from './components/showcase'
import Testmonial1 from './images/testimonials-1.jpg';
import Testmonial2 from './images/testimonials-2.jpg';
import Testmonial3 from './images/testimonials-3.jpg';
import People from './components/people';

export default function App() {
  return (
    <>
    {/* Navigation */}
    <nav className='navbar navbar-light bg-light static-top'>
      <div className='container'>
        <a className='navbar-brand'  href="#!">Start BootStrap</a>
        <a className='btn btn-primary' href="#signup">Sign up</a>
      </div>
    </nav>
    {/* head */}
    <header className="masthead">
      <div className ="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              {/* Page heading */}
              <h1 className='mb-5'>Generate more leads with a professional landing page!</h1>
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Icons */}
    <section className='features-icons bg-light text-center'>
      <div className='container'>
        <div className='row'>
          <Icons titletag="Fully Responsive" notetag="This theme will look great on any device, no matter the size!" />
          <Icons titletag="Bootstrap 5 Ready" notetag="Featuring the latest build of the new Bootstrap 5 framework!" />
          <Icons titletag="Easy to Use" notetag="Ready to use with your own content, or customize the source files!" />
        </div>
      </div>
    </section>
    {/* Image Showcases */}
    <section className='showcase'>
      <div className='container-fluid p-0'>    
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img img1" ></div>
            <Showcase titlename="Fully Responsive Design" details="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!" />
          </div>
        <div className="row g-0">
          <div className="col-lg-6 text-white showcase-img img2" ></div>
          <Showcase  titlename="Updated For Bootstrap 5" details="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!" />
        </div>
        <div className="row g-0">
          <div className="col-lg-6 order-lg-2 text-white showcase-img img3" ></div>
          <Showcase  titlename="Easy to Use & Customize" details="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!" />
        </div>  
      </div>
    </section>
    {/* Testimonial */}
    <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <People test={Testmonial1} name="Margaret E." feedback={`"This is fantastic! Thanks so much guys!"`}/>
                    <People test={Testmonial2} name="Fred S." feedback={`"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`}/>
                    <People test={Testmonial3} name="Sarah W." feedback={`"Thanks so much for making these free resources available to us!"`}/>
                </div>
            </div>
        </section>
    {/* Call to Action */}
    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
          <h2 className="mb-4">Ready to get started? Sign up now!</h2>
          <SignUp/> 
          </div>
        </div>
      </div>
    </section>

    {/* footer */}
    <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li className="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}


