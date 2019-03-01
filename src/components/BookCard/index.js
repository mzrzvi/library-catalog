import React from 'react';

import { Card } from 'antd';

const BookCard = ({ book }) => (
  <Card style={{ margin: 5 }}>
    {book.Title}
    <br/>
    {book.Author}
  </Card>
);

export default BookCard;
