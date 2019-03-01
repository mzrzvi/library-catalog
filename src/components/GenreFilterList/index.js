import React from 'react';

import { List } from 'antd';

import { startCase } from 'lodash/string';

const GenreFilterList = ({ filterFunc, items, counter }) => (
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
            filterFunc('genre', item);
        }}>
          <span style={{ float: 'left' }}>{startCase(item)}</span>
          <span style={{ float: 'right' }}>{counter[item] || 0}</span>
        </a>
      </List.Item>
    )}
  />
);

export default GenreFilterList;
