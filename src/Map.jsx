import react from "react-dom";

const Map = () => {
    var arr = [
        { "name": "utsav", "email": "utsav@gmail.com" },
        { "name": "ishan", "email": "ishan@gmail.com" },
        { "name": "vivek", "email": "vivek@gmail.com" },
        { "name": "hariom", "email": "hariom@gmail.com" },
        { "name": "dead", "email": "dead@gmail.com" },
    ]
    return (
        <>
            <table cellPadding={12} border={2} cellSpacing={0} width={500} >
                <tr align="center">
                    <th>no</th>
                    <th>name</th>
                    <th>email</th>
                </tr>

                {
                    arr.map((e, index) => {
                        return (
                            <>
                                <tr >
                                    <td align="center"> {index + 1}</td>
                                    <td align="center">{e.name}</td>
                                    <td>{e.email}</td></tr>
                            </>
                        )
                    })
                }
            </table>

        </>
    )
}

export default Map