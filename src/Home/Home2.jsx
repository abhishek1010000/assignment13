import "./Home.css";
import { useReducer } from "react";
function Home() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "upperCase": {
        return { count: state.count + 1 };
      }
      case "lowerCase": {
        return { count: state.count - 1 };
      }
      case "copy": {
        return { count: state.count - 1 };
      }
      case "clearText": {
        return { count: state.count - 1 };
      }
      case "remove": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="home">
      <div className="home-top">
        <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <h2>Enter Your Text Here:</h2>
        <textarea className="form-control" id="text" rows="7">
          {state.count}
        </textarea>
        <div className="buttons">
          <button
            onClick={() => dispatch({ type: "upperCase" })}
            className="upBtn a1"
          >
            Convert UpperCase
          </button>
          <button
            onClick={() => dispatch({ type: "lowerCase" })}
            className="loBtn a1"
          >
            Convert LowerCase
          </button>
          <button
            onClick={() => dispatch({ type: "clearText" })}
            className="clearBtn a2"
          >
            Clear Text
          </button>
          <button
            onClick={() => dispatch({ type: "copy" })}
            className="copyBtn a3"
          >
            Copy To Clipboard
          </button>
          <button
            onClick={() => dispatch({ type: "remove" })}
            className="removeBtn a1"
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="summary">
          <h2 className="sum-heading">Summery Of Your Text</h2>
          <p>Nummber of words : 0</p>
          <p>Number of charecters : 0</p>
          <p>Reading Time: 0</p>
        </div>
        <h1>Preview Document</h1>
        <textarea className="form-control bottom" id="text" rows="7"></textarea>
      </div>
      <div className="contact-footer">
        <p>Copyright@2021 | All Rights Reserved | by Shubham Bawankar</p>
      </div>
    </div>
  );
}

export default Home;
