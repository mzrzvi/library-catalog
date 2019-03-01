import React from 'react';

import { List } from 'antd';

const AuthorFilterList = ({ filterFunc, items, counter }) => (
  <List
    size='small'
    bordered
    dataSource={items}
    renderItem={item => (
      <List.Item>
        <a
          href=""
          style={{ width: '100%', color: '#000' }}
          onClick={(e) => {
            e.preventDefault();
            filterFunc('author', item);
        }}>
          <span style={{ float: 'left' }}>{item || 'No Author'}</span>
          <span style={{ float: 'right' }}>{counter[item] || 0}</span>
        </a>
      </List.Item>
    )}
  />
);

export default AuthorFilterList;
