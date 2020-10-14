import React, { useState, useEffect } from 'react';
import Form from './components/Form'

function App() {
const initialForumValue = {
  name: "",
  email: "",
  role: ""
}
const [forumValues, setForumValues] = useState(initialForumValue);
const [teamMembers, setTeamMembers] = useState([]);
const [memberToEdit, setMemberToEdit] = useState(null)

const updateForum = (name, value) => {
  if(memberToEdit){
    setMemberToEdit({...memberToEdit, [name]: value})
  } else {
  setForumValues({...forumValues, [name]: value})
  }
 
}

const editMember = evt => {
  let tempMember = teamMembers[evt.target.id]
  tempMember.id = evt.target.id;
  setMemberToEdit(tempMember)
}

const submitForum = () => {
  const newMember = {
    name: (memberToEdit ? memberToEdit.name.trim() : forumValues.name.trim()),
    email: (memberToEdit ? memberToEdit.email.trim() : forumValues.email.trim()),
    role: (memberToEdit ? memberToEdit.role : forumValues.role)
  }
  if(!newMember.name || !newMember.email || !newMember.role) return;
  if(memberToEdit){
    let tempArr = teamMembers;
    tempArr[memberToEdit.id] = newMember;
    setTeamMembers(tempArr)
    setMemberToEdit(null)
  } else {
  setTeamMembers([
    ...teamMembers, 
    newMember
  ])
  setForumValues(initialForumValue)
}
}

return (
  <>
{teamMembers.map((member, idx) => {
   return (<div key={idx}>
   <ul>
     <li>Name: {member.name}</li>
     <li>Email: {member.email}</li>
     <li>Role: {member.role}</li>
   </ul>
   <button id={idx} onClick={editMember}>Edit {member.name}'s Info</button>
 </div>)
})}
<Form 
values={forumValues}
memberToEdit={memberToEdit}
update={updateForum}
submit={submitForum}
/>
</>
)
}

export default App;
