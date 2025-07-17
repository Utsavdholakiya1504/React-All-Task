import { useEffect, useState } from "react"
import axios from "axios"

const Viewapi = () => {
    var [Data, setData] = useState([])
    useEffect(() => {
        axios.get('https://geton.yarainfotech.com/get-data.php').then(function (show) {
            // handle success
            // console.log(show.data);
            setData(show.data)
        })

    }, [])


    return (
        <>
            <table cellPadding={12} border={2} cellSpacing={0} width={500} >
                <tr align="center">

                    <th>No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    {/* <th>Password</th> */}
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
                                    <td align="center">{e.password}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )

}

export default Viewapi