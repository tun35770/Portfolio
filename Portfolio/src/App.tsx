import { Nav, Navbar } from 'react-bootstrap'
import { HashRouter as Router, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import './App.css'
import Showcase from './components/Showcase.tsx'


function App() {

  return (
    <Router>
      <div className='App'>

        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            
          <Navbar.Brand className="mx-3 title" href="/" style={{color:'#fff'}}>
            
            Ryan Murphy
          </Navbar.Brand>

          <Navbar.Toggle className="mx-2" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="me-3">
              <HashLink smooth to="/#bio" className="nav-link white-text">Home</HashLink>
              <HashLink smooth to="/#portfolio" className="nav-link white-text">Portfolio</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <section id="bio" className="bio-container" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100vh',
          minWidth: '200px',
      
        }}>
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

        <section id="portfolio" className='Showcase-Group'>
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