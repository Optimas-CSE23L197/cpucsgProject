import React, {useState} from 'react'
import Header from '../Dashboard/Header'
import Sidebar from '../Dashboard/Sidebar'
import '../Style/Dashboard.css'
import Member from '../Data/Member.json'

function Membar() {

    const [membars, setMembars] = useState(Member); //array to store the list membar
    const [newMembars, setNewMembars] = useState(''); //stores current value of text input

    //add new membar into the list
    const handleAddMembar = () => {
        const firstName = prompt("Enter first name: ");
        const lastName = prompt("Enter last name: ");
        const role = prompt("Enter role: ")
        // const profilepic = 
        if (firstName && lastName && role) {
            setMembars([
                {firstName, lastName, role}
            ]);
        }
    };

    //delete membar
    const handleDeletemembar = (index) => { //index is position of the membar into the list
        const setMembars = membars.filter((_, i) => i !== index);  //it delete the membar ceate a new list
        // setMembars(updateMembars); //update the new filterd list
    }

//  const updateMembars = membars.filter((_, i) => i !== index); -----> meaning of this line explain below
//   _ (underscore): This is a placeholder for the first parameter of the
//      filter callback function, which represents the current element in the array. We don't need this
//       value in this case, so an underscore is used to signify that we are ignoring it.

// i: This is the second parameter of the filter callback function,
//  which represents the index of the current element in the array.
//   We use this to compare against the index of the member we want to delete.

// i !== index: This is a condition that checks if the current element's index (i) is not equal 
// to the index of the item we want to delete. If i is not equal to index, the element is kept in the array. 
// If i equals index, the element is excluded from the new array.


  return (
    <div className="member">
        <Sidebar />
        <div className="member-body">
            <div className="header-text">
                <h1>Member Management</h1>
            </div>
            <div className="member-table">
                <table className="membertable">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {membars.map((member, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={member.image}
                                    alt= {`${member.firstName} ${member.lastName}`} 
                                    className='profile-pic'
                                    />
                                </td>
                                <td>
                                    {member.firstName}
                                </td>
                                <td>
                                    {member.lastName}
                                </td>
                                <td>
                                    {member.role}
                                </td>
                                <td>
                                    <button onClick={handleDeletemembar}
                                    className='delete-btn'
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="btn">
                <button
                onClick={handleAddMembar}
                className='add-btn'
                >
                    Add Member
                </button>
            </div>
        </div>
    </div>
  )
}

export default Membar