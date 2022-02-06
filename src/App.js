import './App.css';
import {useState} from 'react';


function App() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [name, setName] = useState("");
  const [validName, setValidName] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);

    let regName = /^[a-zA-Z ]*$/;
    let nameClassUpdate = document.getElementById('nameHelp');
    if ((name.length) < 1){
      setValidName("Please enter your name.")
      nameClassUpdate.classList = "form-text text-danger";
    }
    else if ((name.length) < 2){
      setValidName("❌ Your full name must be greater than 3 character.  ")
      nameClassUpdate.classList = "form-text text-danger";
    }
    else if ((name.length) > 2){
      if(regName.test(name) === false){
        setValidName("❌ Your full name must not contain digit or special characters.");
        nameClassUpdate.classList = "form-text text-danger";
      }
      else if (regName.test(name) === true && (name.length) > 2) {
        setValidName("😊 Now It's Perfect.");
        nameClassUpdate.classList = "form-text text-success";
      }
    }
  }

  const [email, setEmail] = useState("");
  const [validemail, setValidEmail] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);

    let regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if ((email.length) < 5){
      setValidEmail("❌ Your email must be greater than 3 character.  ")
    }
    else if ((email.length) > 5){
      if(regemail.test(email) === false){
        setValidEmail("❌ Your full email must contain @ and .com or .in");
      }
      else if (regemail.test(email) === true && (email.length) > 5) {
        setValidEmail("😊 Now It's Perfect.");
      }
    }
  }

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const passwordChange = (e) => {
    setPassword(e.target.value);

    let regpassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if ((password.length) < 6 || (password.length) > 12){
      setValidPassword("❌ Your password must not be less than 6 character and more than 12 character.")
    }
    else if ((password.length) > 6 && (password.length) < 12){
      if(regpassword.test(password) === false){
        setValidPassword("❌ Your password must contain a smallcase, uppercase, special character & digit.");
      }
      else if (regpassword.test(password) === true && ((password.length) > 6) && (password.length < 12)) {
        setValidPassword("😊 Now It's Perfect.");
      }
    }
  }
  return (
    <div className="container d-flex justify-content-center mt-3 shadow-container">
      <div className='w-50 '><img src={'/Images/astronaut.png'} alt="astronaut" className="img-fluid" /></div>
      <div className='w-50 p-3'>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label>👨 Enter Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Full Name" value={name} onChange={nameChange}/>
            <small id="nameHelp">{validName}</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">📧 Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={emailChange}/>
              <small id="emailHelp" className="form-text text-danger">{validemail}</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">🔒 Password</label>
            <input type="password" className="form-control" id="Password1" placeholder="Password" onChange={passwordChange} value={password}/>
            <small id="passwordHelp1" className="form-text text-danger">{validPassword}</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword2">🔒 Confirm Password</label>
            <input type="password" className="form-control" id="Password2" placeholder="Confirm Password"/>
            <small id="passwordHelp2" className="form-text text-danger">Password must be same</small>
          </div>
          <button type="submit" className="btn btn-primary mt-3 border border-2 border-dark">✅ Submit Details</button>
        </form>
      </div>
    </div>
  );
}

export default App;
