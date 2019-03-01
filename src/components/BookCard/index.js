import React from 'react';

import { Card } from 'antd';

const BookCard = ({ book }) => (
  <Card style={{ margin: 5, textAlign: 'center', height: 100 }}>
    <b>{book.Title}</b>
    <br/>
    {book.Author}
  </Card>
);

export default BookCard;
