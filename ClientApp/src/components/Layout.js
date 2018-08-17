import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import HeadMenu from './HeadMenu';

export default props => (
  <Grid fluid>
    <Row>
      <Col md={12}>
        <HeadMenu/>
      </Col>
      <Col md={12}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);
