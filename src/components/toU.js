import { Outlet, useNavigate } from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import Info from "./Info";
import CompanyInfo from "./CompanyInfo";
import MoreInfo from "./MoreInfo";
import AboutToU from "./AboutToU";
import {useState} from 'react';
import Clause from './clause'
import Policy from './policy';


function ToU({userName}){

    let navigate = useNavigate();
    let [showClause, setShowClause] = useState(false);
    let [showPolicy, setShowPolicy] = useState(false);

    return(

        <div className="toU">

            <div className='clause'>
                {
                showClause === true?
                <Clause setShowClause={setShowClause}/> : null
                }
            </div>

            <div className='policy'>
                {
                showPolicy === true?
                <Policy setShowPolicy={setShowPolicy}/> : null
                }
            </div>

            <header className="toUnav">
                

                <div>
                <Navbar bg="white" variant="light">
                    <Container>                        
                        <Nav className="me-auto">
                            <div className="navContainer">
                                <div className='navBrand'>
                                    <Navbar.Brand onClick={()=>{navigate("/toU"); }} style={{fontSize:"50px"}}>ToU.</Navbar.Brand>
                                </div>
                                <div>
                                    <Nav.Link onClick={()=>{navigate("about"); }}> about </Nav.Link>
                                </div>
                                <div>
                                    <Nav.Link  onClick={()=>{navigate("club");}}> 2U클럽 </Nav.Link>
                                </div>
                                <div>
                                    <Nav.Link  onClick={()=>{navigate("shop"); }}> 상점 </Nav.Link>
                                </div>   
                            </div>
                            
                        </Nav>
                    </Container>
                    <div className="toUname"><span style={{fontFamily: 'Black Han Sans'}}>"{userName}"</span>님의 꿈을 응원합니다!</div>
                </Navbar>
                </div>
            </header>
            <section>
                <Outlet/>
            </section>
            <footer className="ToUfooter">
                <div className='infoContainer'>
                    <div><Info/></div>
                    <div><CompanyInfo/></div>
                    <div><MoreInfo setShowClause={setShowClause} setShowPolicy={setShowPolicy}/></div>
                    <div><AboutToU/></div>
                </div>
            </footer>
        </div>
    );
} export default ToU;