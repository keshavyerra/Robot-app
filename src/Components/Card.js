import React from 'react';

const Card = ({id,name,email}) => {
  
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
           <img alt='robots' height="150" width="150" src={`https://robohash.org/${id}`}/>
           <div>
               <h2>{name}</h2>
               <p>{email}</p>
           </div>
		</div>
	);
}
export default Card;