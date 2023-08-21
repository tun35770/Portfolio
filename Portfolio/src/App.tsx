import { Button, Card, Nav, Navbar } from 'react-bootstrap'
import { HashRouter as Router } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import './App.css'
import Showcase from './components/Showcase'
import { useEffect } from 'react';


function App() {


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting)
          entry.target.classList.add('show')
        else
          entry.target.classList.remove('show');
      });
    }, {threshold: 0.35});

    const observerBounce = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting)
          entry.target.classList.add('show-bounce')
        else
          entry.target.classList.remove('show-bounce');
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElementsBounce = document.querySelectorAll('.hidden-bounce');
    hiddenElementsBounce.forEach((el) => observerBounce.observe(el));
  }, [])
 

  return (
    <Router>
      <div className='App'>

        <Navbar className="dark-color" sticky="top" expand="lg">

          <Navbar.Toggle className="mx-2" aria-controls="basic-navbar-nav" style={{
            backgroundColor: 'rgb(204, 249, 255)',
            color: 'rgb(0, 128, 191)',
          }}/>
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="me-3" >
              <HashLink style={{color:"#fff"}} smooth to="/#bio" className="nav-link white-text">About Me</HashLink>
              <HashLink style={{color:"#fff"}} smooth to="/#resume" className="nav-link white-text">Resume</HashLink>
              <HashLink style={{color:"#fff"}} smooth to="/#portfolio" className="nav-link white-text">Portfolio</HashLink>
              <HashLink style={{color:"#fff"}} smooth to="/#contact" className="nav-link white-text">Contact me</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <section id="bio" className="light-color-1 bio-container">
          
          <div className="hidden name px-3" style={{
            textAlign: 'right',
            width: '50%',
          }}>
            <h1 style={{fontSize: '10vw',}}> Ryan <br />Murphy </h1>
            <br /> <br />
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '2em'
            }}>
              <div style={{
                display: 'flex',
                gap: '2em',
                flexWrap: 'wrap',
                justifyContent: 'flex-end'
              }}>
                <p style={{fontSize:'1.8em', fontWeight: '400', margin: '0'}}> Find me on: </p>
                <a href="https://www.linkedin.com/in/ryan-m-338324aa/" target="blank_"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="50em"/> </a>
                <a href="https://github.com/tun35770" target="blank_"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50em" /> </a>
              </div>
            </div>

          </div>

          <div className="hidden bio px-3" style={{
            fontSize: '1.5em',
            width: '50%',
            textAlign: 'left',
            margin: 'auto 0'
          }}>
            I've been coding since highschool <br />
            and discovered my love for web development <br />
            a couple of years into university.
            <br /> <br />
            I love problem solving so I never <br />
            shy away from taking on new challenges.
            <br /> <br />
            My tech toolbelt includes <br /> TypeScript, React, Express, MongoDb, <br />
            Bootstrap CSS, and AWS-ec2.

          </div>

        </section>
       
        <section id="technologies" className="tech-container dark-color">
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="100em" />
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="100em"/>
          </div>
          
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="100em"/>
          </div>
          <div className='icon hidden-bounce'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="100em"/>
      </div>

        </section>

        <section id="resume" className="light-color-2 resume-container">

          <h1 className="hidden pb-3" style={{
            fontSize: '4em',
            textAlign: 'center',
            width: '50%',
            margin: '0 auto',
          }}> Resume </h1>

          <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>

            <div className="education" style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              minWidth: '400px',
            }}>

              <h1 className='hidden'> Education </h1>

              <div className="p-5" style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize:'1em',
                width: '100%',
                margin: '0 auto'
              }}>
                
                <Card className="Card light-color-3 hidden p-3" style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent: 'space-around',
                  border: 'solid black 2px',
                  minWidth: '350px'
                }}>
                  <div style={{margin:'auto 0'}}>
                    <img src='/Temple.png' width='150em' height='150em' />
                  </div>
                  

                  <div>
                    <h1> Temple University </h1>

                    <p> B.S. Computer Science </p>
                    <p> 3.8 GPA </p>
                    <p> Dean's List 2021 & 2022 </p>
                  </div>
                  
                </Card>

                <Card className="Card light-color-3 hidden p-3" style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent: 'space-around',
                  border: 'solid black 2px',
                  minWidth: '350px'
                }}>

                  <div>
                    <img src='PennState.png' width='150em' height='150em' />
                  </div>
                  <div>
                    <h1> Penn State University </h1>

                    <p> No degree (transferred)</p>
                    <p> 3.39 GPA </p>
                  </div>
                  
                </Card>
              </div>
              
            </div>

            <div className="work" style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              minWidth: '400px',
            }}>

              <h1 className='hidden'> Work </h1>

              <div className="p-5" style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize:'1em',
                width: '100%',
                margin: '0 auto'
              }}>
                
                <Card className="Card light-color-4 hidden p-3" style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent: 'space-around',
                  border: 'solid black 2px',
                  minWidth: '350px'
                }}>
                  <div>
                    <h1> Wegman's Food Markets </h1>

                    <p> Retail Associate </p>
                    <p> Worked alongside team members to maintain department
                        and aid customers, as well as satisfying high company standards. </p>
                  </div>

                  <div style={{margin:'auto 0'}}>
                    <img src='/wegmans.png' width='150em' height='150em' />
                  </div>
                </Card>

                <Card className="Card light-color-4 hidden p-3" style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent: 'space-around',
                  border: 'solid black 2px',
                  minWidth: '350px'
                }}>
                  <div>
                    <h1> UPS </h1>

                    <p> Package Handler </p>
                    <p> Coordinated with teammates to move packages swiftly,
                        ensured packages were loaded in a timely manner prioritizing
                        accuracy to ensure quality customer experience.
                    </p>
                  </div>

                  <div style={{margin:'auto 0'}}>
                    <img src='/ups.png' width='150em' height='150em' />
                  </div>
                </Card>

                <Card className="Card light-color-4 hidden p-3" style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent: 'space-around',
                  border: 'solid black 2px',
                  minWidth: '350px'
                }}>
                  <div>
                    <h1> Peer Tutor </h1>

                    <p> Mathematics and Computer Science </p>
                    <p> Aided students with coursework in mathematics and computer science.
                        Explained relevant concepts to ensure student retention and comprehension.
                    </p>
                  </div>

                  <div style={{margin:'auto 0'}}>
                    <img src='/PennState.png' width='150em' height='150em' />
                  </div>
                </Card>
              </div>
              
            </div>

          </div>

        </section>


        <section id="portfolio" className='light-color-1 showcase-container'>
          <h1 className = 'hidden pb-3' style={{
            fontSize: '4em',
            textAlign: 'center',
            width: '50%',
            margin: '0 auto',
            }}> Portfolio </h1>
        
            <Showcase showcaseImage='/bugsquish_vertical.png' showcaseTitle='BugSquish' 
                      showcaseDescription="A bug ticketing system for developers to collaborate 
                              and manage their software's bugs throughout development.
                              ***DEMO LOGIN*** user: ryanmu1415 pass: Password123456#"
                      showcaseLink='https://tun35770.github.io/BugSquish'
                      position='left' />

            <Showcase showcaseImage='/game-of-life_vertical.png' showcaseTitle='Game of Life' 
                      showcaseDescription="My own version of Conway's Game of Life, made in React."
                      showcaseLink='https://tun35770.github.io/game-of-life'
                      position='right'/>

            <Showcase showcaseImage='/StockTracker_vertical.png' showcaseTitle='Stock Tracker' 
                    showcaseDescription='A stock price tracking app. Makes use of finnhub and CoinGecko APIs
                            to fetch live prices.' 
                    showcaseLink='https://tun35770.github.io/StockTracker/'
                    position='left'/>
         
        </section>

          
        <section id="contact" className='light-color-2 contact-container'>
          <h1 className = 'hidden' style={{
            fontSize: '4em',
            }}> Contact Me </h1>
          
          <Card className='contact-card light-color-3 p-5'>
            <form className='contact-form' name="contact-me" method="POST" action="/#/" data-netlify="true">
              <input type="hidden" name="form-name" value="contact-me" />
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <Button className="px-5" variant="primary" type="submit">Send</Button>
              </p>
            </form>
          </Card>
        </section>

      </div>
    </Router>
  )
}

export default App