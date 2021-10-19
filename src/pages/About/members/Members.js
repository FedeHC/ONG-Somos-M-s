import React from 'react';
import Member from './Member';

import "./members.css";



//data example
const listMembers = [
  {
   name:"tes1",
   image:"https://thispersondoesnotexist.com/image",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit iste porro animi repudiandae sapiente magnam, voluptates incidunt! Repudiandae, recusandae?",
   facebookUrl:"https://www.facebook.com/",
   linkedinUrl:"https://ar.linkedin.com/"
  },
  {
   name:"tes2",
   image:"https://thispersondoesnotexist.com/image",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit iste porro animi repudiandae sapiente magnam, voluptates incidunt! Repudiandae, recusandae?",
   facebookUrl:"https://www.facebook.com/",
   linkedinUrl:"https://ar.linkedin.com/"
  },
  {
   name:"tes3",
   image:"https://thispersondoesnotexist.com/image",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit iste porro animi repudiandae sapiente magnam, voluptates incidunt! Repudiandae, recusandae?",
   facebookUrl:"https://www.facebook.com/",
   linkedinUrl:"https://ar.linkedin.com/"
  },
  {
   name:"tes4",
   image:"https://thispersondoesnotexist.com/image",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit iste porro animi repudiandae sapiente magnam, voluptates incidunt! Repudiandae, recusandae?",
   facebookUrl:"https://www.facebook.com/",
   linkedinUrl:"https://ar.linkedin.com/"
  },
  {
   name:"tes5",
   image:"https://thispersondoesnotexist.com/image",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit iste porro animi repudiandae sapiente magnam, voluptates incidunt! Repudiandae, recusandae?",
   facebookUrl:"https://www.facebook.com/",
   linkedinUrl:"https://ar.linkedin.com/"
  },
  {
   name:"tes6",
   image:"https://thispersondoesnotexist.com/image",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit iste porro animi repudiandae sapiente magnam, voluptates incidunt! Repudiandae, recusandae?",
   facebookUrl:"https://www.facebook.com/",
   linkedinUrl:"https://ar.linkedin.com/"
  },
 ]

const Members = () => {
 return (
  <div className="containerMembers">
    { 
      listMembers.map(member => 
        <Member 
          key={member.name}
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
