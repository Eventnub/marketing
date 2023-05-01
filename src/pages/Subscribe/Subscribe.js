import { useState } from "react";
import "./subscribe.css";
import Logo from "../../components/Logo";
import MailChimpForm from "../../components/MailChimpForm";

function Subscribe() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [shouldSubmit, setShouldSubmit] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (firstName && email) {
      setShouldSubmit(true);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 d-none d-md-block left-side"></div>
      <div className="col-12 col-md-6">
        <div className="container p-4">
          <div className="d-flex align-items-baseline main">
            <Logo width="40px" height="40px" />
            <h1 className="ms-2 company-name">eventnub</h1>
          </div>
          <p className="intro">Don’t wait</p>
          <h1 className="info">
            Get notified on the next big concert in your city.
          </h1>
          <form onSubmit={handleSubscribe}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label d-none">
                First Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="firstName"
                placeholder="First Name"
                aria-describedby="nameHelp"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label d-none">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-custom">
                Subscribe
              </button>
            </div>
          </form>
          <MailChimpForm
            style={{ display: "none" }}
            firstName={firstName}
            email={email}
            shouldSubmit={shouldSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
