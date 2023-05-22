import React, { useState } from "react";
import Layout from "../components/Layout";

const CustomModule = () => {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    description: "",
  });
  return (
    <Layout tab={3}>
      <div className="top column">
        <div className="title dark-blue">Get A CustomModule</div>
        <div className="subtitle">
          Hire our expert lawyers and AI prompt engineers to build your custom
          AI module. This will only be available to you and saved within your My
          Library.
        </div>
      </div>
      <div className="step custom">
        <div className="title">Fill out the form below to get started</div>
        <div className="form">
          <div className="row">
            <div className="form-group">
              <div className="label">First Name</div>
              <input
                type="text"
                value={info.firstname}
                onChange={(e) =>
                  setInfo({ ...info, firstname: e.target.value })
                }
                className="form-control"
                placeholder="Input text"
              />
            </div>
            <div className="form-group">
              <div className="label">Last Name</div>
              <input
                type="text"
                value={info.lastname}
                onChange={(e) => setInfo({ ...info, lastname: e.target.value })}
                className="form-control"
                placeholder="Input text"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="label">Email</div>
            <input
              type="email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              className="form-control"
              placeholder="Input text"
            />
          </div>
          <div className="form-group">
            <div className="label">
              Please tell us about the AI module you would like to have built
            </div>
            <textarea
              value={info.description}
              onChange={(e) =>
                setInfo({ ...info, description: e.target.value })
              }
              className="form-control"
              placeholder="Input text"
            />
          </div>
        </div>
        <div className="btn">Send</div>
      </div>
    </Layout>
  );
};

export default CustomModule;
