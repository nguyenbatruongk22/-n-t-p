import React from 'react'

export default function NBTStudentList({ renderNBTStudentList }) {
    console.log("Data:", renderNBTStudentList);
    let NBTElement = renderNBTStudentList.map((NBTStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{NBTStudent.UserName}</td>
                <td>{NBTStudent.PassWord}</td>
                <td>{NBTStudent.Avatar}</td>
                <td>{NBTStudent.Phone}</td>
                <td>{NBTStudent.NBTid}</td>
            </tr>
        )
    });
    return (
        <div className='Row'>
            <h2>Danh Sách Sinh Viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">PassWord</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Id</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {NBTElement}
                </tbody>
            </table>

        </div>
    )
}
