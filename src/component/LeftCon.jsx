import "./LeftCon.css";
import Formbox from "./Formbox";
import Welcome from "./welcome";
import Welcome2 from "./Welcome2";
import Formbox2 from "./Frombox2";
import { useState } from "react";
function LeftCon() {
  const [cng, setCng] = useState(false);
  return (
    <div className="container">
      <div className="form-box">
        <div className="header">{cng ? <Welcome2 /> : <Welcome />}</div>
        <div className="form">
          {cng ? <Formbox2 /> : <Formbox setCng={setCng} cng={cng} />}
        </div>
        <div className="btm">
          <div className="line1"></div>
          <span>or</span>
          <div className="line2"></div>
        </div>
        <div className="bottom-container">
          <div className="btm-cont1">
            <div className="pic1"></div>
            <div>Sign in with google</div>
          </div>
          <div className="btm-cont1">
            <div className="pic2"></div>
            <div>Sign in with google</div>
          </div>
        </div>
        <div className="have-acc">
          <span>Have an account?</span>
          <span className="styspan" onClick={() => setCng(!cng)}>
            {cng ? "Sign Up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeftCon;
