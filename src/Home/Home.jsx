import './Home.css'
import { useState } from 'react';
function Home(){
    const [msg, setMsg] = useState("");
    const changeUpperCase = ()=>{
        setMsg(msg.toUpperCase())
    }
    const changeLowerCase = ()=>{
        setMsg(msg.toLowerCase())
    }
    const clearText = ()=>{
        setMsg("")
    }
    const copyClipboard = ()=>{
        navigator.clipboard.writeText(msg)
    }
    const removeSpaces = ()=>{
        setMsg(msg.split(/\s+/).filter(Boolean).join(' '))
    }
    const handleChange = (event) => {
        setMsg(event.target.value);
    };
    return (
        <div className="home">
            <div className="home-top">
                <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
                <h2>Enter Your Text Here:</h2>
                <textarea className="form-control" id="text" rows="7" value={msg} 
                    onChange={handleChange}  >  </textarea>

                <div className="buttons">
                    <button onClick={changeUpperCase} className='upBtn a1'>Convert UpperCase</button>
                    <button onClick={changeLowerCase} className='loBtn a1'>Convert LowerCase</button>
                    <button onClick={clearText} className='clearBtn a2'>Clear Text</button>
                    <button onClick={copyClipboard} className='copyBtn a3'>Copy To Clipboard</button>
                    <button onClick={removeSpaces} className='removeBtn a1'>Remove Extra Spaces</button>
                </div>
                <div className="summary">
                    <h2 className='sum-heading'>Summery Of Your Text</h2>
                    <p>Nummber of words : 0</p>
                    <p>Number of charecters : 0</p>
                    <p>Reading Time: 0</p>
                </div>
                <h1>Preview Document</h1>
                <textarea className="form-control bottom" id="text" rows="7" value={msg} ></textarea>
            </div>
            <div className="contact-footer">
               <p>Copyright@2021 | All Rights Reserved | by Shubham Bawankar</p>
            </div>
        </div>
    )
}

export default Home;