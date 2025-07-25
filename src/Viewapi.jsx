import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const Viewapi = () => {
    var [Data, setData] = useState([])
    var navigate = useNavigate()

    useEffect(() => {
        fetchdata();
    }, [])

    function fetchdata() {
        axios.get('https://geton.yarainfotech.com/get-data.php').then(function (show) {
            // handle success
            // console.log(show.data);
            setData(show.data)
        })
    }


    const handleDelete = (e) => {

        var id = e.target.getAttribute('data');

        var a = new FormData()

        a.set('id', id)

        axios.post('https://geton.yarainfotech.com/delete-data.php', a).then(function () {
            fetchdata();

        })
    }

    const handleUpdate = (e) => {

        var id = e.target.getAttribute('data');

        navigate('/update/' + id)

    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
    }

    if (localStorage.getItem('auth') == "true") {
        return (
            <>
                {localStorage.getItem("auth") == "true" && <h1>Welcome , {localStorage.getItem("name")}</h1>}

                <table cellPadding={12} border={2} cellSpacing={0} width={500} >
                    <tr align="center">

                        <th>No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                        {/* <th>Action2</th> */}
                    </tr>

                    {
                        Data.map((e, index) => {
                            return (
                                <>
                                    <tr >
                                        <td align="center"> {index + 1}</td>
                                        <td align="center">{e.id}</td>
                                        <td align="center">{e.name}</td>
                                        <td align="center">{e.email}</td>
                                        <td align="center">{e.password}</td>
                                        <td>
                                            <button onClick={handleDelete} data={e.id}>Delete</button>
                                        </td>
                                        <td>
                                            <button onClick={handleUpdate} data={e.id}>Edit</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
                <br />
                <Link to={'/insert'} style={{ border: "3px solid black", padding: "5px", margin: "15px", textDecoration: "none", color: "Black" }}>Add Data</Link>
                <button onClick={handleLogout} style={{ border: "3px solid black", padding: "2px", margin: "10px", textDecoration: "none", color: "Black" }}>Log Out</button>
            </>

        )

    }
    else {
        navigate("/")
    }



}


export default Viewapi