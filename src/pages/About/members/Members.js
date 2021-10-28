import React from 'react';
import { useSelector } from 'react-redux';
import Member from './Member';

import "./members.css";



//data example

const Members = () => {
  
  const {membersList, loading, error} = useSelector(state => state.members);
  
 return (
  <div className="containerMembers">
    { !loading &&
      membersList.map(member => 
        <Member 
          key={member.id}
          name={member.name} 
          image={member.image}
          description={member.description}
          facebookUrl={member.facebookUrl}
          linkedinUrl={member.linkedinUrl}
          />
      )
    }
  </div>
 );
}

export default Members;
