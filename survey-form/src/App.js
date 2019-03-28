import React, { Component } from 'react';
import Container from './components/Container';
import Row from './components/Row';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import TextareaInput from './components/TextareaInput';
import './App.css';
import Label from './components/Label';
import RadioInput from './components/RadioInput';
import Button from './components/Button';
import Title from './components/Title';
const appProps = {
  dropdownProps: ['optionOne', 'optionsTwo', 'optionThree'],
  radioProps: ['Definitely', 'Maybe', 'Not Sure'],
  secondDropdownProps: ['Challenges', 'Projects', 'Community', 'OpenSource'],
  secondRadioProps: [
    'Front-End Projects',
    'BackEnd-Projects',
    'Data Visualization',
    'Challenges',
    'OpenSource',
    'Gitter help room',
    'Videos',
    'City Meetups',
    'Wiki',
    'Forum',
    'Additional Courses'
  ]
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Title>Survey Form</Title>
        <Container>
          <Title>Let us know how we can improve freeCodeCamp</Title>
          <Row>
            <Label name='name'>Name</Label>
            <Input name='name' type='text' />
          </Row>
          <Row>
            <Label name='email'>Email</Label>
            <Input name='email' type='email' />
          </Row>
          <Row>
            <Label name='age'>Age</Label>
            <Input name='age' type='age' />
          </Row>
          <Row>
            <Label name='dropdown'>
              Which option best describes your current role?
            </Label>
            <Dropdown value={appProps.dropdownProps} type='dropdown' />
          </Row>
          <Row>
            <Label name='radio'>
              * How likely is that you would recommend freeCodeCamp to a friend?
            </Label>
            <RadioInput value={appProps.radioProps} type='radio' />
          </Row>
          <Row>
            <Label name='dropdown'>What do you like most in FCC:</Label>
            <Dropdown value={appProps.secondDropdownProps} type='dropdown' />
          </Row>
          <Row>
            <Label name='radio'>What do you like most in FCC:</Label>
            <RadioInput value={appProps.secondRadioProps} type='radio' />
          </Row>
          <Row>
            <Label name='radio'>
              Things that should be improved in the future (Check all that
              apply):
            </Label>
            <RadioInput value={appProps.secondRadioProps} type='radio' />
          </Row>
          <Row>
            <Label name='radio'>Any Comments or Suggestions?</Label>
            <TextareaInput />
          </Row>
          <Button type='submit'>Submit</Button>
        </Container>
      </div>
    );
  }
}

export default App;
