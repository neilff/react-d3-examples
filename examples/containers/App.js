import React from 'react';
import { connect } from 'react-redux';

import { randomizeDataset } from '../reducers/data';

import { PercentageDonut, Donut } from '../../src';

import Button from '../components/Button';
import Container from '../components/Container';
import Column from '../components/Column';
import Row from '../components/Row';
import Debug from '../components/Debug';

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    generateRandomDataset: () => dispatch(randomizeDataset()),
  };
}

const App = ({ data, generateRandomDataset }) => {
  return (
    <Container>
      <Row>
        <Column className="col-12">
          <h1>D3 React Examples</h1>

          <div className="mt2 mb2">
            <Button onClick={ generateRandomDataset }>
              Randomize Dataset
            </Button>
          </div>
        </Column>
      </Row>
      <Row>
        <Column className="col-4 center">
          <PercentageDonut
            value={ data.get('percentageDonut') }
            width={ 100 }
            radius={ 15 }/>

          <Debug value={ `${ data.get('percentageDonut') }%` } />
        </Column>

        <Column className="col-4 center">
          <Donut
            values={ data.get('donut').toJS() }
            width={ 100 }
            radius={ 15 }/>

          <Debug
            value={ data.get('donut').toJS() }
            spacing={ 0 } />
        </Column>
      </Row>
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
