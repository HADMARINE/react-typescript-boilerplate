import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

@inject('ExStore')
@observer
export default class Index extends Component<any> {
  render(): React.ComponentElement<any, any> {
    return (
      <Wrapper>
        {this.props.ExStore.yourStore}
        <button onClick={this.props.ExStore.changeToggle}>Hello/World</button>
      </Wrapper>
    );
  }
}
