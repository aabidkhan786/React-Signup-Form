import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function App() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues:{
      fullName: '',
      email: '',
      password: '',
      confirmPassword:'',
    }

    // ====Default Data for Edit Mode=========
    // defaultValues:{
    //   fullName: 'John Doe',
    //   email: 'John.doe@icloud.com',
    //   password: 'John#DOE7964',
    //   confirmPassword:'John#DOE7964',
    // }
  });

  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log({errors});
    console.log({isDirty});
  });

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
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Email is required.",
                minLength: {
                  value: 3,
                  message: "Minimum 3 letters required.",
                },
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z\. ]*$/gim,
                  message:
                    "Digits, special character are not allowed in full name.",
                },
              })}
            />
            {errors.fullName && (
              <small id="passwordHelp2" className="form-text text-danger">
                {errors?.fullName?.message}
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
                required: "Email is required.",
                minLength: {
                  value: 6,
                  message: "Minimum length of 6 is required.",
                },
                pattern: {
                  value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                  message: "Email is not valid",
                },
              })}
            />
            {errors.email && (
              <small id="passwordHelp2" className="form-text text-danger">
                {errors?.email?.message}
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
              {...register("password",{
                required: "Password is required.",
                minLength: {
                  value: 5,
                  message: "Password must of 5 in length."
                },
                maxLength: {
                  value: 12,
                  message: "Password must not be more than 12 in length."
                },
                pattern: {
                  value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,12}$/,
                  message: "Password must contain atleast one uppercase, lowercase, digit & special character."
                }
              })}
            />
            {errors.password && (
              <small id="passwordHelp2" className="form-text text-danger">
                {errors?.password?.message}
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
              {...register("confirmPassword",{
                required: "Confirm password is required.",
                minLength: {
                  value: 5,
                  message: "Confirm Password must of 5 in length."
                },
                maxLength: {
                  value: 12,
                  message: "Confirm Password must not be more than 12 in length."
                },
                pattern: {
                  value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,12}$/,
                  message: "Password must contain atleast one uppercase, lowercase, digit & special character."
                },
                onChange: () => {
                  getValues("password") !== getValues('confirmPassword') ? setIsConfirmPassword(true) : setIsConfirmPassword(false);
                }
              })}
            />
            {isConfirmPassword && <small id="passwordHelp2" className="form-text text-danger">Password doesn't match out.<br/></small>}
            {errors.confirmPassword && (
              <small id="passwordHelp2" className="form-text text-danger">
                {errors?.confirmPassword?.message}
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
