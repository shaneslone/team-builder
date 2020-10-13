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
const [memberToEdit, setMemberToEdit] = useState({})

const updateForum = (name, value) => {
  setForumValues({...forumValues, [name]: value})
}

const editMember = () => {
  setMemberToEdit(teamMembers[0])
  console.log(memberToEdit)
}

useEffect(() => {
  setForumValues(memberToEdit)
}, [memberToEdit])

const submitForum = () => {
  const newMember = {
    name: forumValues.name.trim(),
    email: forumValues.email.trim(),
    role: forumValues.role
  }
  if(!newMember.name || !newMember.email || !newMember.role) return;
  setTeamMembers([
    ...teamMembers, 
    newMember
  ])
  setForumValues(initialForumValue)
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
   <button onClick={editMember}>Edit {member.name}'s Info</button>
 </div>)
})}
<Form 
values={forumValues}
update={updateForum}
submit={submitForum}
/>
</>
)
}

export default App;
