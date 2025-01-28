import React , {useState} from 'react'

const Members = () => {
const [members, setMembers] = useState([]);
const [name, setName] = useState('');
const addMember = () => {
  if(name === '') {
    alert('Please fill all the fields');
    return;
  }
  if(name) {
    setMembers([...members, { id: Date.now(), name }]);
    setName('');
  }
}
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Members</h2>
      <div className='mb-4'>
        <input
        type='text'
        placeholder='Member Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        
        className='border border-gray-400 p-2 w-full mb-4'
        />
        <button onClick={addMember}
        
        className='bg-blue-600 text-white p-2 w-full cursor-pointer'>add members</button>
        </div>
       
        <ul>
          <button className='bg-red-600 cursor-pointer text-white p-2 w-full'>delete</button>
          {members.map((member) => (
            <li key={member.id} className='flex justify-between items-center mb-4'>
              <div>
                <h3 className='font-bold'>{member.name}</h3>
              </div>
              <button className='bg-red-600 cursor-pointer text-white p-2'>Delete</button>
            </li>
          ))}
        </ul>
       
    </div>
  )
}

export default Members
