import React from 'react';

import { Row, Col } from 'antd';
import BookCard from '../BookCard';

import { map, chunk } from 'lodash';

const ROW_SIZE = 3;
const GRID_TOTAL = 24;

const BookGrid = ({ books }) => (
  <div style={{ padding: 20 }}>
    <p style={{ textAlign: 'left' }}>{`${books.length} Results`}</p>
    {
      map(chunk(books, ROW_SIZE), (bookRow, rowNum) => (
        <Row key={rowNum} gutter={8}>
          {
            map(bookRow, (book, bookNum) => (
              <Col key={bookNum} span={GRID_TOTAL/ROW_SIZE}>
                <BookCard key={`${rowNum-bookNum}`} book={book}/>
              </Col>
            ))
          }
        </Row>
      ))
    }
  </div>
);

export default BookGrid;
