import React from 'react'

export default function Form(props) {
    const { values, update, submit, memberToEdit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
     update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                <input 
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={memberToEdit ? memberToEdit.name: values.name}
                    placeholder='Enter Your Name'
                    maxLength='30'
                />
                </label>
                <label>
                    Email:
                <input 
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={memberToEdit ? memberToEdit.email: values.email}
                    placeholder='Enter Your Email'
                    maxLength='50'
                />
                </label>
                <label>
                    Role:
                    <select name='role' value={memberToEdit ? memberToEdit.role: values.role} onChange={onChange}>
                        <option value="">---select role---</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="Team Lead">Team Lead</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
            
        </div>
    );
}
