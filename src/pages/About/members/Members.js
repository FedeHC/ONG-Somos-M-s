import React from 'react';
import { useSelector } from 'react-redux';
import Member from './Member';
import { Spinner } from '../../../features/spinner';
import ErrorAlert from '../../../features/errorAlert/errorAlert';
import { Skeleton } from '@chakra-ui/react';

import './members.css';

//data example

const Members = () => {
  const { membersList, loading, error } = useSelector(state => state.members);

  return (
    <div className="containerMembers">
      {loading ? (
        <>
          <Skeleton className="skeletonMember" />
          <Skeleton className="skeletonMember" />
          <Skeleton className="skeletonMember" />
          <Skeleton className="skeletonMember" />
        </>
      ) : membersList ? (
        membersList.map(member => (
          <Member
            key={member.id}
            name={member.name}
            image={member.image}
            description={member.description}
            facebookUrl={member.facebookUrl}
            linkedinUrl={member.linkedinUrl}
          />
        ))
      ) : (
        <ErrorAlert />
      )}
    </div>
  );
};

export default Members;
