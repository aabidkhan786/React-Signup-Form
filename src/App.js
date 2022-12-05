import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    getValues,
  } = useForm({
    defaultValues:{
      fullName: '',
      email: '',
      password: '',
      confirmPassword:'',
    }
  });

  const onSubmit = (data) => {
    console.log(isDirty);
    console.log({data});
  };
  
  useEffect(() => {
    console.log(isDirty);
    console.log({errors});
  });

  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  return (
    <div className="container d-flex justify-content-center mt-3 shadow-container">
      <div className="w-50 ">
        <img
          src={"/Images/astronaut.png"}
          alt="astronaut"
          className="img-fluid"
        />
      </div>
      <div className="w-50 p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mt-3">
            <label>👨 Enter Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              {...register("fullName", {
                required: true,
                minLength: 3,
                pattern: /^[a-zA-Z][a-zA-Z\. ]*$/gim,
              })}
            />
            {errors?.fullName && errors?.fullName.type === "required" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Full name is required.
              </small>
            )}
            {errors?.fullName && errors?.fullName.type === "pattern" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Full name is not upto the required pattern.
              </small>
            )}
            {errors?.fullName && errors?.fullName.type === "minLength" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Minimum 3 letters required.
              </small>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">📧 Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
              })}
            />
            {errors?.email && errors?.email.type === "required" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Email id is required.
              </small>
            )}
            {errors?.email && errors?.email.type === "pattern" && (
              <small id="passwordHelp2" className="form-text text-danger">
                This is not the valid email id.
              </small>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">🔒 Password</label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 12,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,12}$/,
              })}
            />
            {errors?.password && errors?.password.type === "required" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Password is required.
              </small>
            )}
            {errors?.password && errors?.password.type === "minLength" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Password must be minimum of 5 length.
              </small>
            )}
            {errors?.password && errors?.password.type === "maxLength" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Password must be maximum of 12 length.
              </small>
            )}
            {errors?.password && errors?.password.type === "pattern" && (
              <small id="passwordHelp2" className="form-text text-danger">
                Password must contain atleast one uppercase, lowercase, digit &
                special character.
              </small>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword2">🔒 Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="Password2"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                minLength: 5,
                maxLength: 12,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,12}$/,
                onChange: () => {
                  getValues("password") !== getValues("confirmPassword")
                    ? setIsConfirmPassword(true)
                    : setIsConfirmPassword(false);
                },
              })}
            />
            {errors?.confirmPassword &&
              errors?.confirmPassword.type === "required" && (
                <small id="passwordHelp2" className="form-text text-danger">
                  Password is required.
                </small>
              )}
            {errors?.confirmPassword &&
              errors?.confirmPassword.type === "minLength" && (
                <small id="passwordHelp2" className="form-text text-danger">
                  Password must be minimum of 5 length.
                </small>
              )}
            {errors?.confirmPassword &&
              errors?.confirmPassword.type === "maxLength" && (
                <small id="passwordHelp2" className="form-text text-danger">
                  Password must be maximum of 12 length.
                </small>
              )}
              {isConfirmPassword &&
              (
                <small id="passwordHelp2" className="form-text text-danger">
                  Password doesn't match out.
                </small>
              )}
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3 border border-2 border-dark"
          >
            ✅ Submit Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
