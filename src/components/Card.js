import React from 'react';

const Card = (props: any) => {
  return (
    <div className="card" onClick={props.onClickVideo}>
      <img src={props.image} alt="" onClick={props.onClickVideo} />
      <h5 onClick={props.onClickVideo}>{props.title}</h5>
    </div>
  )
}

export default Card;