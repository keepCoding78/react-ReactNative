import React, { Component } from 'react';

export default class IncrementView extends Component {

  render() {
    const { increment, decrement, count } = this.props;
    return (
     <div  className='main' style={{'align-items': 'center', display: 'flex', 'flex-direction': 'column'}}>
      <div  className='like' style={{ marginTop: 40 }}>{'Total Likes:'}</div>
      <div  className='count'>{`${count}`}</div>
      <div  className='buttons' style={{ 'flex-direction': 'row', 'justify-content': 'center', marginTop: 20,  display: 'flex' }}>
      <div  className='likeview' onClick={increment}>
        <img
        className='like'
          width={100}
          height={100}
          src={'../../app/assets/images/like.png'}
        />
      </div>
      <div  className='dislikeView' onClick={decrement}>
        <img
        className='dislike'
          width={100}
          height={100}
          src={'../../app/assets/images/dislike.png'}
        />
      </div>
    </div>
    </div>
    );
  }
}