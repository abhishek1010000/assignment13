import './About.css'
// import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
function About(){
    return (
        <div className="about">
            <div className='about-top'>
            <h1>About App</h1>
                <div className="first">
                    <p>Analyse Your Text</p>
                    <RiArrowDownSLine className='icon' />
                </div>
                <div className="first">
                    <p>Free To Use </p>
                    <RiArrowDownSLine className='icon' />
                </div>
                <div className="first">
                    <p>Browser Compatible</p>
                    <RiArrowDownSLine className='icon' />
                </div>
            </div>
            <div className="contact-footer">
               <p>Copyright@2021 | All Rights Reserved | by Shubham Bawankar</p>
             </div>
        </div>

    )
}

export default About;