import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Insertapi = () => {
    var txtname = useRef()
    var txtemail = useRef()
    var txtpassword = useRef()
    var navigate= useNavigate()
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        var name = txtname.current.value;
        var email = txtemail.current.value;
        var password = txtpassword.current.value;

        var a = new FormData()
        a.set("name", name)
        a.set("email", email)
        a.set("password", password)

        axios.post('https://geton.yarainfotech.com/insert-data.php', a).then(function (data) { 
            if (data.data.status == "true") {
                navigate("/");
            }
            
        })

    }




    return (
        <>
             <form method="post" onSubmit={handleSubmit}>
                <table cellPadding={12} border={2} cellSpacing={0}  >

                    <tr>
                        <td>Name</td>
                        <td><input type="text" ref={txtname} /></td>
                    </tr>
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
                    </tr>
                </table>
            </form>
        </>
    )
}
export default Insertapi