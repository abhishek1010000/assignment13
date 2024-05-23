import './Home.css'
function Home1(){
    return (
        <div className="home">
            <div className="home-top">
                <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
                <h2>Enter Your Text Here:</h2>
                <textarea className="form-control" id="text" rows="7" ></textarea>
                <div className="buttons">
                    <button className='upBtn a1'>Convert UpperCase</button>
                    <button className='loBtn a1'>Convert LowerCase</button>
                    <button className='clearBtn a2'>Clear Text</button>
                    <button className='copyBtn a3'>Copy To Clipboard</button>
                    <button className='removeBtn a1'>Remove Extra Spaces</button>
                </div>
                <div className="summary">
                    <h2 className='sum-heading'>Summery Of Your Text</h2>
                    <p>Nummber of words : 0</p>
                    <p>Number of charecters : 0</p>
                    <p>Reading Time: 0</p>
                </div>
                <h1>Preview Document</h1>
                <textarea className="form-control bottom" id="text" rows="7" ></textarea>
            </div>
            <div className="contact-footer">
               <p>Copyright@2021 | All Rights Reserved | by Shubham Bawankar</p>
            </div>
        </div>
    )
}

export default Home1;