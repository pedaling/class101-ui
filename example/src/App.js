import React, { Component } from 'react';

import { Grid, Row, Col } from 'class101-ui';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col lg={ 4 } sm={ 12 }>
            Col1
          </Col>
          <Col lg={ 4 } sm={ 12 }>
            Col2
          </Col>
          <Col lg={ 4 } sm={ 12 }>
            Col3
          </Col>
        </Row>
      </Grid>
    );
  }
}
