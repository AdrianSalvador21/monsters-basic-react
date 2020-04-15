import React from 'react';
import './card-list.styles.css';
import Card from "../card/card.component";
const CardList = (props) => {
  console.log(props);
  return (
    <div className='card-list'>
      {
        props.users.map(user => (
          <Card user={user} key={user.id}/>
        ))
      }
    </div>
  );
};

export default CardList;
