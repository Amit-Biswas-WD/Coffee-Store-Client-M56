import React, { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleSignUpForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const value = { name, email, password };
    console.log(value);
    
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">SignUp Now!</h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-xl my-8 shrink-0 shadow-2xl">
          <form onSubmit={handleSignUpForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute mt-12 right-12"
              >
                {showPassword ? <FaEyeSlash /> : <IoIosEye />}
              </p>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" name="trams" className="checkbox" />
                <span className="label-text">
                  Accepts Our Teams And Conditions
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <Link className="text-end my-2" to={`/sign-in`}>
              Click Here to <span className="text-green-700">Sign In</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
