import { Card, Nav, Navbar } from 'react-bootstrap'
import { HashRouter as Router } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import './App.css'
import Showcase from './components/Showcase.tsx'


function App() {

  return (
    <Router>
      <div className='App'>

        <Navbar className="dark-color" sticky="top" expand="lg">
            
          <Navbar.Brand className="mx-3 title" href="/" style={{color:"#fff"}}>
            
            Ryan Murphy
          </Navbar.Brand>

          <Navbar.Toggle className="mx-2" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="me-3" >
              <HashLink style={{color:"#fff"}} smooth to="/#bio" className="nav-link white-text">Home</HashLink>
              <HashLink style={{color:"#fff"}} smooth to="/#resume" className="nav-link white-text">Resume</HashLink>
              <HashLink style={{color:"#fff"}} smooth to="/#portfolio" className="nav-link white-text">Portfolio</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <section id="bio" className="light-color-1 bio-container">
          <div className="name pr-3" style={{
            fontSize: '8em',
            textAlign: 'right',
            width: '50%',
          }}>
            Ryan <br />Murphy
          </div>

          <div className="bio pl-3" style={{
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


        <section id="resume" className="light-color-2 resume-container">

          <h1 className="pb-3" style={{
            fontSize: '4em',
            textAlign: 'center',
            width: '50%',
            margin: '0 auto',
          }}> Resume </h1>

          <div style={{
            display:'flex',
            flexDirection:'row',
          }}>

            <div className="education pr-3" style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}>

              <h1> Education </h1>

              <div className="p-5" style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize:'1.4em',
                width: '100%',
                margin: '0 auto'
              }}>
                
                <Card className="p-3" style={{
                  backgroundColor: 'rgb(44, 51, 51)',
                  color: 'white',
                }}>
                  <h1> Temple University </h1>

                  <p> B.S. Computer Science </p>
                  <p> 3.8 GPA </p>
                  <p> Dean's List 2021 & 2022 </p>
                </Card>

                <Card className="p-3" style={{
                  backgroundColor: 'rgb(44, 51, 51)',
                  color: 'white',
                }}>
                  <h1> Penn State University </h1>

                  <p> No degree (transferred)</p>
                  <p> 3.39 GPA </p>
                </Card>
              </div>
              
            </div>

            <div className="work pr-3" style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}>

              <h1> Work </h1>

              <div className="p-5" style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize:'1.4em',
                width: '100%',
                margin: '0 auto'
              }}>
                
                <Card className="p-3" style={{
                  backgroundColor: 'rgb(44, 51, 51)',
                  color: 'white',
                }}>
                  <h1> Wegman's Food Markets </h1>

                  <p> Retail Associate </p>
                  <p> Worked alongside team members to maintain department
                      and aid customers, as well as satisfying high company standards. </p>
                </Card>

                <Card className="p-3" style={{
                  backgroundColor: 'rgb(44, 51, 51)',
                  color: 'white',
                }}>
                  <h1> UPS </h1>

                  <p> Package Handler </p>
                  <p> Coordianted with teammates to move packages swiftly,
                      ensured packages were loaded in a timely manner prioritizing
                      accuracy to ensure quality customer experience.
                  </p>
                </Card>

                <Card className="p-3" style={{
                  backgroundColor: 'rgb(44, 51, 51)',
                  color: 'white',
                }}>
                  <h1> Peer Tutor </h1>

                  <p> Mathematics and Computer Science </p>
                  <p> Aided students with coursework in mathematics and computer science.
                      Explained relevant concepts to ensure student retention and comprehension.
                  </p>
                </Card>
              </div>
              
            </div>

          </div>

        </section>


        <section id="portfolio" className='light-color-1 Showcase-Group'>
          <h1 style={{fontSize: '6em'}}> Portfolio </h1>
          <Showcase showcaseImage='/src/assets/BugSquish.png' showcaseTitle='BugSquish' 
                    showcaseDescription="A bug ticketing system for developers to collaborate 
                            and manage their software's bugs throughout development.
                            ***DEMO LOGIN*** user: ryanmu1415 pass: Password123456#"
                    showcaseLink='https://tun35770.github.io/BugSquish'/>

          <Showcase showcaseImage='/src/assets/game-of-life.png' showcaseTitle='Game of Life' 
                    showcaseDescription="My own version of Conway's Game of Life, made in React."
                    showcaseLink='https://tun35770.github.io/game-of-life'/>

          <Showcase showcaseImage='/src/assets/StockTracker.png' showcaseTitle='Stock Tracker' 
                    showcaseDescription='A stock price tracking app. Makes use of finnhub and CoinGecko APIs
                            to fetch live prices.' 
                    showcaseLink='https://tun35770.github.io/StockTracker/'/>
        </section>

      </div>
    </Router>
  )
}

export default App