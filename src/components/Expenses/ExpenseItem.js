import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem({date, title, amount}) {
  const [titleState, setTitle] = useState(title);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const clickHandler = () => {
    setTitle('clicked!');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titleState}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
