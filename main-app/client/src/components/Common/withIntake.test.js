import React from 'react';
import renderer from 'react-test-renderer';
import withIntake from './withIntake';

it('renders correctly intake component', () => {
  const WrappedComponent = withIntake(() => <div>I'm wrapped</div>);
  const IntakeComponent = renderer.create(<WrappedComponent />).toJSON();
  expect(IntakeComponent).toMatchSnapshot();
});
