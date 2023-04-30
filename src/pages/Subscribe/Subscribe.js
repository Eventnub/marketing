import "./subscribe.css";
import Logo from "../../components/Logo";

function Subscribe() {
  const handleSubscribe = (e) => {
    e.preventDefault();
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
              <label htmlFor="name" className="form-label d-none">
                Email address
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                placeholder="Name"
                aria-describedby="nameHelp"
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
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-custom">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
