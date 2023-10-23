import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import connectLogo from "../assets/logo.png"


export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isClicked: false,
  });
  const [popAlert, showPopAlert] = useState(false);
  //for handling alert showing up multiple times 

  const [age, setAge] = useState("age");
  const [position, setPosition] = useState('position');
  // useState takes a variable first, and then a Function. 

  const getValidForm = () => {
    return firstName && password.value.length >= 8 && age !== "age" && position !=="position";
  };

  //will clear the form
  const FormClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isClicked: false,
    });
    setAge("age");
    setPosition("position");
  };

  //what will happen when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // will stop the form from immediately submitting
    alert("Account created!");
    FormClear();

    // will call FormClear to reset the form back to its previous state after user clicks submit
  };

  //will handle error alert if password is not longer than 8 characters
  const handlePassword = (e) => {
    const newPass = e.target.value;
    // above is a variable for whatever user types in
    setPassword({value: newPass});
    // setPassword is called to be equal to whatever the newPass is

    if(popAlert && newPass.length < 8){
        alert('Your password must be longer than 8 characters.');
        showPopAlert(true);
        // if popAlert is equal to true and newPass's length is less than 8, a popup will show up that displays the error alert. It will then set the showPopAlert to true afterwards. 
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
            {/* <img src={connectLogo} alt="connect-logo" className="logo"/> */}
          <h2>Register for an Account</h2>
          <div className="field">
            <label>First name:<sup>*</sup> </label>
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First Name"
              // the input element has the value of whatever the firstName value is(decided by user)
              // then, once the input value changes, it triggers a function that takes e as a parameter and then calls the function setFirstName to have a value that is equal to whatever the user enters into the input field
            />
          </div>
          <div className="field">
            <label>Last name:<sup>*</sup> </label>
            <input
              required
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);

                // the input element has the value of whatever the lastName value is(decided by user)
                //then, once the input value changes, it triggers a function that takes e as a parameter and then calls the function setLastName to have a value that is equal to whatever the user enters into the input field
              }}
            />
          </div>
          <div className="field">
            <label>Email address:<sup>*</sup></label>
            <input
              required
              type="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
                // the input element has the value of whatever the email value is(decided by user)
                //then, once the input value changes, it triggers a function that takes e as a parameter and then calls the  setEmail function to have a value that is equal to whatever the user enters into the input field
              }}
            />
          </div>
          <div className="field">
            <label>Enter a password:<sup>*</sup> </label>
            <input
              required
              type="password"
              placeholder="Password"
              onChange={handlePassword}
                //when a user types something in to make the password field change, a function is triggered that uses e as a parameter and then sets the password(function) to a copy of the password and then makes the value of the password into whatever the user typed in
              
              onBlur={() => {
                setPassword({ ...password, isClicked: true });
                //In the code snippet, there's an event handler specified for the "onBlur" event of an input field, like a password input. When a user clicks away from the password input field, the "onBlur" event is triggered. It calls a function that updates the "password" state using the "setPassword" function.
              }}
            />
          </div>
          {/* will be checking if the password input was clicked on and the password length is less than 8 */}
          {password.isClicked &&
            password.value.length < 8 &&
            alert("Your password must be longer than 8 characters.")}

          <div className="field">
            <legend>Please select your age range: </legend>
            <label htmlFor="firstrange">
              <input checked="true" className="inline" onChange={() => {
                setAge("16-24")
              }} type="radio" name="radio" id="firstrange" />
              16-24
            </label>
            <label htmlFor="secondrange">
              <input className="inline" onChange={() => {
                setAge("25-34")
              }} type="radio" name="radio" id="secondrange" />
              25-34
            </label>
            <label htmlFor="thirdrange">
              <input className="inline" onChange={() => {
                setAge("35-44")
              }} type="radio" name="radio" id="thirdrange" />
              35-44
            </label>
            <label htmlFor="fourthrange">
              <input className="inline" onChange={() => {
                setAge("55-64")
              }} type="radio" name="radio" id="fourthrange" />
              55-64
            </label>
          </div>

          <div className="field">
            <legend>Please select your current status:</legend>
            <select value={position} onChange={(e) => {
                setPosition(e.target.value)
                //  the value of select is the position value. Once the select value is changed, the setPosition function is called and the value of whatever the user is selecting is passed to it. 
            }}>
                <option value="select">(Select an option)</option>
                <option onChange={() => {
                    setPosition("student")
                }} value="student">Student</option>
                <option onChange={() => {
                    setPosition("professional")
                }} value="professional">Working Professional</option>
                <option onChange={() => {
                    setPosition("unemployed")
                }} value="unemployed">Unemployed</option>
            </select>
          </div>

          <div className="field">
            <button className="submitButton" type="submit" disabled={!getValidForm()}>Create your free account</button>
          </div>
        </fieldset>
      </form>
      
    </div>
  );
}