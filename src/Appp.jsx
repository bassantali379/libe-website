import "./appp.css"
import { useState } from "react";
import SignUp from "./pages/SignUp/signUp";
const Appp = () =>{
    const [values,setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

const inputs = [
    {
        id:1,
        name:"name",
        type:"text",
        placeholder:"Username",
        errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
        label:"Username",
        pattern:`^[A-Za-z0-9]{3,16}$`,
        required:true,
    },
    {
        id:2,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"It should be a valid email address!",
        label:"Email",
        required:true,
    },
    {
        id:3,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password should be 8-20 charachters and include al least 1 letter, 1 number and 1 special character!",
        label:"Password",
        pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required:true,
    },
    {
        id:4,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"passwords don't match!",
        label:"Confirm Password",
        pattern: values.password,
        required:true,
    },
];
    const handleSubmit = (e)=> {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };
    console.log(values);
    return(
        <div className="appp">
            <form  onSubmit={handleSubmit}>
            <h1 class="logo"> <img src="/img/law.jpg" alt="" />Libertad</h1>
          {inputs.map(input=>(
     <SignUp

         key={input.id} {...input} 
         value={values[input.name]} 
         onChange={onChange}/>
          )) }
       
        
         <input type="checkbox"  className="checkbox" id="terms-add-cond"/>
               <label className="jdd" for="terms-add-cond"> agree to our <a href="">terms and conditions</a></label>
              <hr />
               <input   type="checkbox" className="checkbox" id="notification"/>
               <label  className="jdd" for="notification"> recieve upcoming offers and event mails</label>
               <button className="submit-btn"><a className="alo" href="/">create account</a></button>
            </form>
            <a href="/loginform/1" className="linkkk">already have an account? Log in here</a>
        </div>
    )
};

export default Appp;