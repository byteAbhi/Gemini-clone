import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // Function to handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input) {
      onSent(); // Trigger onSent when Enter key is pressed
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, abhi</span>
              </p>
              <p>How can I help you today? </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Places to see on upcoming road trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Beautiful places to see on upcoming trips</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="results">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Enter prompt here"
              onKeyDown={handleKeyDown} // Call handleKeyDown on key press
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>

          <div className="bottom-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas
              culpa dignissimos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;