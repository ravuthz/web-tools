import { useEffect, useState } from "react";
import totp from "totp-generator";

import "./App.css";

const rows = 7;
const sample = "BK5V TVQ7 D2RB BK5V TVQ7 D2RB BK5V TVQ7";

function App() {
  const [key, setKey] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!key) {
      setCode("");
    }
  }, [key]);

  const onClearClick = () => {
    setKey("");
    setCode("");
  };

  const createTOTP = (secret) => {
    try {
      return `${secret}|${totp(secret)}`;
    } catch (error) {
      console.log(error);
      return '';
    }
  };

  const onCreate2faClick = () => {
    try {
      const val = key.trim().split("\n");
      let keys = [];
      if (val) {
        for (let i = 0; i < val.length; i++) {
          const key = val[i]
            ? val[i].trim().replaceAll(" ", "").toLocaleUpperCase()
            : null;
          if (key) {
            const code = createTOTP(key);
            if (code) {
              keys.push(code);
            }
          }
        }
      }
      setCode(keys.join('\n'));
    } catch (error) {
      console.log(error);
      setCode("");
    }
  };

  const onCopy2faClick = async () => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(code);
    } else {
      return document.execCommand("copy", true, code);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card border-info mt-3">
        <div className="card-header">
          <h5 class="card-title">Two Factor Authenticator</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="form-group">
                <label className="d-flex flex-row" htmlFor="txtSecret">
                  <span>Password: </span>
                  <span className="text-end">( 32 digits )</span>
                </label>
                <textarea
                  id="txtSecret"
                  type="text"
                  className="form-control"
                  rows={rows}
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder={`Enter something like this ${sample}`}
                />
              </div>
              <button
                type="button"
                onClick={onCreate2faClick}
                className="btn btn-primary mt-3"
                disabled={!key}
              >
                Create 2FA
              </button>
              <button
                type="button"
                onClick={onClearClick}
                className="btn btn-primary mt-3 mx-3"
                disabled={!key}
              >
                Clear
              </button>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="form-group">
                <label className="d-flex flex-row" htmlFor="txtCode">
                  <span>Code 2FA: </span>
                  <span className="text-end">( 6 digits )</span>
                </label>
                <textarea
                  id="txtCode"
                  type="text"
                  className="form-control"
                  rows={rows}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={onCopy2faClick}
                className="btn btn-primary mt-3"
                disabled={!code}
              >
                Copy 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
