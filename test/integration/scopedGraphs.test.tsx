/* eslint-disable arrow-body-style */
import React from 'react';
import { ReactTestRenderer, act, create } from 'react-test-renderer';
import { injectComponent } from '../../src';
import MainGraph from './fixtures/MainGraph';
import { SOME_STRING } from './fixtures/StringProvider';

interface InjectedComponentProps {
  someString: string;
}

const Component: React.FunctionComponent<InjectedComponentProps> = ({ someString }: InjectedComponentProps) => {
  return <>{someString}</>;
};

describe('Scoped graphs', () => {
  let InjectedComponent: React.FunctionComponent;
  let testRenderer!: ReactTestRenderer;

  beforeEach(() => {
    InjectedComponent = injectComponent(Component, MainGraph);
  });

  it('Dependencies are injected from subgraphs', () => {
    act(() => {
      testRenderer = create(<InjectedComponent />);
    });
    expect(testRenderer.root.findByType(InjectedComponent).children[0]).toEqual(SOME_STRING);
  });
});
