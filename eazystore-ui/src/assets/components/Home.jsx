import React from "react";
import PageHeading from "./PageHeading";
import products from "../../data/Product";
import ProductListing from "./ProductListing";
import developerImage from "../stickers/developer.png";
import breakImage from "../stickers/break.png";
import EazyButton from "./EazyButton";
import BootstrapButton from "./BootstrapButton";

export default function Home() {
  const isActive = Math.random() > 0.5;
  const h1Styling = {
    textAlign: "center",
    color: isActive ? "red" : "black",
  };
  return (
    <>
      {/* <EazyButton>Home</EazyButton>
      <h1
        className={`my-heading ${
          isActive ? "primary-color" : "secondary-color"
        }`}
      >
        Demo of Global CSS Scope from Home{" "}
      </h1> */}
      {/* <h1 style={h1Styling}>Demo of Global CSS Scope from Home </h1> */}
      <div className="home-container">
        <div className="container col-6">
          <BootstrapButton text="submit" type="primary" />
          <BootstrapButton text="save" type="secondary" />
          <BootstrapButton text="okay" type="success" />
          <BootstrapButton text="cancel" type="danger" />
          <BootstrapButton text="delete" type="warning" />
          <BootstrapButton text="Link" type="link" />
        </div>
        <div className="d-grid gap-2 col-8 mx-auto">
          <div className="alert alert-primary text-center" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-secondary text-center" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div className="alert alert-success text-center" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger text-center" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning text-center" role="alert">
            A simple warning alert—check it out!
          </div>

          <div
            className="alert alert-warning alert-dismissible fade show text-center"
            role="alert"
          >
            <strong>Warning !</strong> This is warning alert!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              arial-label="Close"
            ></button>
          </div>
        </div>

        <div className=" container d-flex justify-content-center align-item-center gap-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={developerImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={breakImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3 text-center gap-3 w-100 ">
          <div className="col-3 border p-3 bg-warning text-center">
            Column 3
          </div>
          <div className="col-3 border p-3 bg-success text-white">Column 1</div>
          <div className="col-3 border p-3 bg-danger text-white">Column 2</div>
        </div>
        <div className="container col-8 justify-content-center mt-3 border border-dark rounded">
          <form className="w-100">
            <div className="form-group w-100">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-100">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* <button className="btn btn-primary">Submit</button> */}
        <PageHeading tittle="Explore Eazy Stickers!">
          Add a touch of creativity to your space with our widw range of fun and
          unique stickers. Perfect for any occasion!
        </PageHeading>
        <ProductListing products={products} />
      </div>
    </>
  );
}
