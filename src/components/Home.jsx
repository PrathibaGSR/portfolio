import React, { useEffect, useRef, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import {Button} from "react-bootstrap";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import bannerImg from "../images/banner-img.png";
import aboutOne from "../images/about-1.png";
import aboutTwo from "../images/about-2.png";
import serIconOne from "../images/ser-icon-1.png";
import serIconTwo from "../images/ser-icon-2.png";
import serIconThree from "../images/ser-icon-3.png";
import serIconFour from "../images/ser-icon-4.png";
import portfolioOne from "../images/portfolio-1.png";
import portfolioTwo from "../images/portfolio-2.png";
import portfolioThree from "../images/portfolio-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload, faGraduationCap, faMessage, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  const [Loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    message: '',
    status: '',
  })

  const schema = yup.object({
    from_name: yup.string().required("Name is required"),
    from_email: yup.string().required("Email is required"),
    from_phone: yup.string().required("Number is required"),
    from_message: yup.string().required("Message is required"),
  }).required();

  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true)
    let serviceId = 'service_tsx02cl'
    let templateId = 'template_vsc27qk';
    let userId = "iBvVWce9JqNbuFEwy";
    let templateParams = {
      ...data
    }
    emailjs.send(serviceId, templateId, templateParams, userId).then((result) => {
      setValue(prevState => ({ ...prevState, message: 'Thanks for Contacting, will reach you shortly !!!', status: 'success' }))
      setOpen(true);
      setLoading(false);
      console.log(result)

      if(result?.status == 200){
        console.log(result?.status == 200)
        toast.success("Message Send Sucessfully",{
        position: toast.POSITION.BOTTOM_RIGHT,
        
      },)
      }
      else{
        toast.error("Something went wrong, Few minutes after try again",{
          position: toast.POSITION.BOTTOM_RIGHT,
        },)
      }reset()
    })
   
    
  }

  return (
    <main className="PortMnPg">
      <Menu/>
     
      {/* banner sec */}
      <section className="bnrSec ScrlDv" id="Home">
        <ReactBootstrap.Container>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col lg={6}>
                <div className="bnrCntTop">
                    <p className="introTlt">Hello, I'm</p>
                    <h1 className="introName">Prathiba</h1>
                    <div className="sentence">
                      <div className="words rotate">
                        <span>Front End Developer</span>
                        <span>Web Designer</span>
                        <span>Front End Developer</span>
                        <span>Web Designer</span>
                        <span>Front End Developer</span>
                        <span>Web Designer</span>
                      </div>
                    </div>
                    <div className="bnnrBtn">
                      <a className="commBtn" href="mailto:grprathiba@gmail.com">Say Hello &nbsp; <FontAwesomeIcon icon={faEnvelope} /></a>
                      <a href="#Contact" className="abtBtn ms-lg-5 ms-2">Contact Me !</a>
                    </div>
                </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={6}>
              <div className="bnrImgPos">
                 <img src={bannerImg} className="img-fluid " alt="prathiba" title="prathiba"/>
              </div>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      {/* about sec */}
      <section className="abutSec ScrlDv" id="About">
       <ReactBootstrap.Container fluid>
         <ReactBootstrap.Row>
           <ReactBootstrap.Col lg={4}>
             <div>
             <img src={aboutOne} className="img-fluid " alt="prathiba" title="prathiba"/>
             </div>
           </ReactBootstrap.Col>
           <ReactBootstrap.Col lg={5} className="order-first order-lg-0">
             <div className="ps-lg-5">
               <p className="abtSmTlt">About Me</p>
               <p className="abtWrkTlt"><span>React Js</span> Developer</p>
               <p className="abtWrkTlt">Web <span>Designer</span></p>
               <p className="abtWrkDes mt-5">I am <b>Front End Developer & Web Designer</b>, and I'm very passionate and dedicated to my Work</p>
               <p className="abtWrkDes">With <span>3 years experience</span> as a professional front end developer, I have acquired the skils and knowledge necessary to make project a success.</p>

               <p className="abtWrkDes"><span>Skils :</span> HTML | CSS | SASS | Bootstrap | Javascript | React JS | React Bootstrap | Meterial UI | Git | UI/UX </p>
               <div className="mt-5">
                 <a className="commBtn" href="test.pdf" download="prathiba-resume.pdf">Download CV &nbsp; <FontAwesomeIcon icon={faDownload} /></a>
               </div>
             </div>
           </ReactBootstrap.Col>
           <ReactBootstrap.Col lg={3}>
             <div className="text-right abutPos">
             <img src={aboutTwo} className="img-fluid " alt="prathiba" title="prathiba"/>
             </div>
           </ReactBootstrap.Col>
         </ReactBootstrap.Row>
       </ReactBootstrap.Container>
      </section>

      {/* services sec */}
      <section className="servSec ScrlDv" id="Services">
        <ReactBootstrap.Container>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col lg={6}>
               <div>
                 <p className="servSecSubTlt">What I Do</p>
                 <p className="servSecTlt">My Works</p>
                 <p className="servSecCnt">I am open to working on all kind web design tasks as well as react projects. I subsequently developed 10 SEO product-based websites. </p>
               </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={6} >
              <div className="servLst">
                <ReactBootstrap.Row className="align-items-center">
                  <ReactBootstrap.Col lg={4}>
                    <div className="text-center">
                      <img src={serIconOne} className="img-fluid " alt="" title=""/>
                    </div>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col lg={8} >
                   <div>
                     <p className="servLstTlt">Web Designer</p>
                     <p className="servLstCnt">I am skilled in designing for any crucial projects. Create a website using SEO methods. Work with <b>HTML | CSS | SASS | Bootstrap | Javascript | Jquery | Canvas | GSAP </b></p>
                   </div>
                  </ReactBootstrap.Col>
                </ReactBootstrap.Row>
              </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={6} >
              <div className="servLst">
                  <ReactBootstrap.Row>
                    <ReactBootstrap.Col lg={4}>
                      <div className="text-center">
                        <img src={serIconTwo} className="img-fluid " alt="" title=""/>
                      </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col lg={8}>
                    <div>
                      <p className="servLstTlt">React Js Developer</p>
                      <p className="servLstCnt">I am skilled in designing and developing for any crucial projects. Work with <b>React JS | React Bootstrap | Meterial UI | Axios | Redux | Redux Toolkit </b></p>
                    </div>
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Row>
                </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={6} >
              <div className="servLst">
                  <ReactBootstrap.Row>
                    <ReactBootstrap.Col lg={4}>
                      <div className="text-center">
                        <img src={serIconThree} className="img-fluid " alt="" title=""/>
                      </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col lg={8}>
                    <div>
                      <p className="servLstTlt">SEO Websites</p>
                      <p className="servLstCnt">I am capable of developing websites using SEO approaches and resolving page performance issues completely. Work with Tools <b>Pagespeed insights | GTmetrix | Lighthouse | SEO Tools  </b></p>
                    </div>
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Row>
                </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={6} >
              <div className="servLst">
                  <ReactBootstrap.Row>
                    <ReactBootstrap.Col lg={4}>
                      <div className="text-center">
                        <img src={serIconFour} className="img-fluid " alt="" title=""/>
                      </div>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col lg={8}>
                    <div>
                      <p className="servLstTlt">UI/UX Design</p>
                      <p className="servLstCnt">I am capable of designing user experiences using animations and effects. Work with Tools <b>Figma | Illustrator | Photoshop | SVG Animations  </b></p>
                    </div>
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Row>
                </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={6}>
               <div className="servMailPart">
                 <p className="servSecMalTlt">Do you know additional information about me?</p>
                 <div className="mt-4 pt-2">
                  <a className="MalSerBtn" href="mailto:grprathiba@gmail.com">Knock Me &nbsp; <FontAwesomeIcon icon={faEnvelope} /></a>
                 </div>
               </div>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      {/* experience */}
      <section className="resumSec ScrlDv" id="Experience">
        <ReactBootstrap.Container>
          <ReactBootstrap.Row>
            <ReactBootstrap.Col lg={6}>
              <div>
                 <p className="resumSecSubTlt">Know More</p>
                 <p className="resumSecTlt">My Resume</p>
                 <p className="resumSecCnt">Below are specific details of my education and experience.</p>
              </div>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <ReactBootstrap.Row className="justify-content-between">
            <ReactBootstrap.Col lg={5}>
              <div className="mt-5">
                <p className="resuLstTlt">Education</p>
                <div className="resumLst">
                  <div className="rsumSubLst">
                    <div className="resuIcns">
                      <FontAwesomeIcon icon={faGraduationCap} />  
                    </div>
                    <div className="resCntLft">
                      <div className="resumLstMnCnt">
                        <div className="eduWdth">
                          <p className="resumLstsub1">Computer Science</p>
                          <p className="resumLstsub2">Sirumalar School</p>
                        </div>
                        <div className="resuDate">
                          <p className="count">2014 - 2016</p>
                        </div>
                      </div>
                      <p className="resumLstCnt">In my senior year of high school, I studied computer science.</p>
                    </div>
                  </div>
                </div> 
                <div className="resumLst">
                  <div className="rsumSubLst">
                    <div className="resuIcns">
                      <FontAwesomeIcon icon={faGraduationCap} />  
                    </div>
                    <div className="resCntLft">
                      <div className="resumLstMnCnt">
                        <div className="eduWdth">
                          <p className="resumLstsub1">BE - CSE</p>
                          <p className="resumLstsub2">SBM Engg College</p>
                        </div>
                        <div className="resuDate">
                          <p className="count">2016 - 2020</p>
                        </div>
                      </div>
                      <p className="resumLstCnt">I studied computer science engineering and graduated with honours.</p>
                    </div>
                  </div>
                </div> 
              </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={5}>
              <div className="mt-5">
                  <p className="resuLstTlt">Experience</p>
                  <div className="resumLst">
                    <div className="rsumSubLst">
                      <div className="resuIcns">
                        <FontAwesomeIcon icon={faBriefcase} />  
                      </div>
                      <div className="resCntLft">
                        <div className="resumLstMnCnt">
                          <div className="eduWdth">
                            <p className="resumLstsub1">Front End Developer</p>
                            <p className="resumLstsub2">Osiz Technologies</p>
                          </div>
                          <div className="resuDate">
                            <p className="count">2021 - running</p>
                          </div>
                        </div>
                        <p className="resumLstCnt">Worked as Front End Developer managed 10 SEO Products and handled react based projects</p>
                      </div>
                    </div>
                  </div> 
                  <div className="resumLst">
                    <div className="rsumSubLst">
                      <div className="resuIcns">
                        <FontAwesomeIcon icon={faBriefcase} />  
                      </div>
                      <div className="resCntLft">
                        <div className="resumLstMnCnt">
                          <div className="eduWdth">
                            <p className="resumLstsub1">Product Developer</p>
                            <p className="resumLstsub2">Infinity Pvt.Ltd</p>
                          </div>
                          <div className="resuDate">
                            <p className="count">2020 - 2021</p>
                          </div>
                        </div>
                        <p className="resumLstCnt">Worked as Product Developer focus on the dashboards, forums, and e-commerce projects.</p>
                      </div>
                    </div>
                  </div> 
                </div>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </section>

      {/* portfolio */}
      <section className="portfSec ScrlDv" id="Portfolio">
        <div className="container">
         <div>
           <h2 className="portfSecTlt">Check My Designing Portfolio</h2>
           <div>
             <ReactBootstrap.Row>
               <ReactBootstrap.Col lg={4} sm={6}>
                <div className="portLst">
                   <a href="https://www.behance.net/prathibag" target="_blank"><img src={portfolioOne} className="img-fluid " alt="" title=""/></a>
                </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col lg={4} sm={6}>
                <div className="portLst">
                <a href="https://www.behance.net/prathibag" target="_blank"><img src={portfolioTwo} className="img-fluid " alt="" title=""/></a>
                </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col lg={4} sm={6}>
                <div className="portLst">
                <a href="https://www.behance.net/prathibag" target="_blank"><img src={portfolioThree} className="img-fluid " alt="" title=""/></a>
                </div>
               </ReactBootstrap.Col>
             </ReactBootstrap.Row>
           </div>
         </div>
        </div>
      </section>

      {/* contact sec */}
      <section className="contSec ScrlDv"  id="Contact">
       <ReactBootstrap.Container>
         <div>
           <p className="contSubTlt">Get in Touch</p>
           <h2 className="contTlt">Connect with Me</h2>
           <div className="mt-5">
             <ReactBootstrap.Row className="align-items-center">
               <ReactBootstrap.Col lg={4}>
                  <div className="sociBg">
                   <p className="sociMed">Contact Me ! </p>
                    <div className="socialIcns">
                      <p><a href="tel:+916383598524"><FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;6383598524</a></p>
                      <p><a href="mailto:grprathiba@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;grprathiba@gmail.com</a></p>
                      <p><a href="https://www.linkedin.com/in/prathibag/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> &nbsp;&nbsp;Linkedin - Prathiba G</a></p>
                      <p><a href="https://www.behance.net/prathibag" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z"/></svg> &nbsp;&nbsp;Behance - Prathibag</a></p>
                    </div>
                  </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col lg={2}></ReactBootstrap.Col>
               <ReactBootstrap.Col lg={6} className="order-first order-lg-0">
                 <div>
                 <ToastContainer />
                    <ReactBootstrap.Form  onSubmit={handleSubmit(onSubmit)}>

                      <ReactBootstrap.Form.Group className="mb-4 formPos" >
                        <ReactBootstrap.Form.Control className="frmHegt" type="name" placeholder="Your Name" name="from_name" {...register("from_name")} />
                        <p className="errMsgForm">{errors.from_name?.message}</p>
                      </ReactBootstrap.Form.Group>
                      

                      <ReactBootstrap.Form.Group className="mb-4 formPos" >
                        <ReactBootstrap.Form.Control className="frmHegt" type="email" placeholder="Your email" name="from_email" {...register("from_email", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })} />
                        <p className="errMsgForm">{errors.from_email?.message}</p>
                      </ReactBootstrap.Form.Group>
                      

                      <ReactBootstrap.Form.Group className="mb-4 formPos" >
                        <ReactBootstrap.Form.Control className="frmHegt" type="name" placeholder="Your Phone Number" name="from_phone" {...register("from_phone")} />
                        <p className="errMsgForm">{errors.from_phone?.message}</p>
                      </ReactBootstrap.Form.Group>
                      

                      <ReactBootstrap.Form.Group className="mb-4 formPos" >
                        <ReactBootstrap.Form.Control as="textarea" rows={4} type="name" placeholder="Message" name="from_message" {...register("from_message")}/>
                        <p className="errMsgForm">{errors.from_message?.message}</p>
                      </ReactBootstrap.Form.Group>
                     
                      
                      <Button className="commBtn"  type="submit">Submit Message &nbsp; <FontAwesomeIcon icon={faMessage} /></Button>
                      
                    </ReactBootstrap.Form>
                 </div>
               </ReactBootstrap.Col>
             </ReactBootstrap.Row>
           </div>
         </div>
       </ReactBootstrap.Container>
      </section>

      {/* footer */}
      <section className="footSec">
        <ReactBootstrap.Container>
          <div className="text-center">
            <p>Developed with love by Prathiba © 2023</p>
          </div>
        </ReactBootstrap.Container>
      </section>

    </main>
  );
}

export default Home;
