import "./Loginform.css"
import { useState } from "react";
import Login from "./pages/Login/login";
const Loginform = () =>{
    const [values,setValues] = useState({
        email:"",
        password:"",
    });

const inputs = [
  
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
     <Login key={input.id} {...input}  value={values[input.name]}  onChange={onChange}/>
)) }
       
               <button className="submit-btn"> <a href="/success/1" className="btn4">log in</a></button>
            </form>
            <a href="/Appp/1" className="linkkk">don't have an accout? Create one</a>
        </div>
    )
};

export default Loginform;