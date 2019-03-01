import React from 'react';
import { withRouter } from 'react-router-dom';

import { Row, Col } from 'antd';

import Sidebar from '../../components/Sidebar';
import BookGrid from '../../components/BookGrid';

import qs from 'query-string';

import { isEmpty, isString } from 'lodash/lang';
import { toLower } from 'lodash/string';
import { filter, some, includes, countBy } from 'lodash/collection';
import { values } from 'lodash/object';

import { books, genres, authors } from '../../constants/books';

class CatalogScreen extends React.Component {
  state = {
    visibleBooks: []
  }

  componentDidMount() {
    this._filterBooks();
  }

  componentWillReceiveProps(newProps) {
    this._filterBooks(qs.parse(newProps.location.search));
  }

  _getQueryParams() {
    return qs.parse(this.props.location.search);
  }

  _setQueryParams(key, value) {
    const params = this._getQueryParams();

    if (!isEmpty(value)) {
      params[key] = value;
    } else {
      delete params[key];
    }

    this.props.history.push({
      pathname: '/catalog',
      search: qs.stringify(params)
    });
  }

  _clearQueryParams() {
    this.props.history.push('/catalog');
  }

  _filterBooks(params) {
    params = params || this._getQueryParams();
    const { author, genre, search } = params;

    var visibleBooks = [...books];

    if (!isEmpty(author)) {
      visibleBooks = filter(visibleBooks, ['Author', author]);
    }

    if (!isEmpty(genre)) {
      console.log(genre);
      visibleBooks = filter(visibleBooks, ['Genre', genre]);
    }

    if (!isEmpty(search)) {
      visibleBooks = filter(visibleBooks, (book) => (
        some(values(book), (val) => (isString(val) && includes(toLower(val), search)))
      ));
    }

    this.setState({ visibleBooks });
  }

  render() {
    const { visibleBooks } = this.state;

    const sidebarProps = {
      authors,
      genres,
      genreCounter: countBy(visibleBooks, 'Genre'),
      authorCounter: countBy(visibleBooks, 'Author'),
    }

    return (
      <Row>
        <Col span={6}>
          <Sidebar
            clearFunc={() => this._clearQueryParams()}
            filterFunc={(k, v) => this._setQueryParams(k, v)}
            {...sidebarProps}
          />
        </Col>
        <Col style={{ borderLeft: '1px solid black' }} span={18}>
          <BookGrid books={visibleBooks}/>
        </Col>
      </Row>
    )
  }
}

export default withRouter(CatalogScreen);
