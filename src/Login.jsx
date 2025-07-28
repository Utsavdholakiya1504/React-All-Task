import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    var txtemail = useRef()
    var txtpassword = useRef()
    var navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()
        a.set("email", email)
        a.set("password", password)

        axios.post('https://geton.yarainfotech.com/login-data.php', a).then(function (data) {
            if (data.data.status == "true") {
                localStorage.setItem("name", data.data.userdata.name)
                localStorage.setItem("email", data.data.userdata.email)
                localStorage.setItem("auth", "true")


                navigate("/view");
            }
            else (
                alert("Check your Email & Password")
            )

        })

    }
    
    
    const handleRegister = () => {
         navigate("/insert")
    }




    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table cellPadding={12} border={2} cellSpacing={0}  >

                    <tr>
                        <td>Email</td>
                        <td><input type="text" ref={txtemail} /></td>

                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" ref={txtpassword} /></td>

                    </tr>
                    <tr>
                        <td><input type="submit" value={'Submit'} /></td>
                        <td><button onClick={handleRegister} sty>Register</button></td>
                    </tr>
                </table>
            </form>
        </>
    )
}
export default Login