import React, { Component } from 'react';
import Container from './components/Container';
import Row from './components/Row';
import Copy from './components/Copy';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import TextareaInput from './components/TextareaInput';
import './App.css';
import Label from './components/Label';
import RadioInput from './components/RadioInput';
import Button from './components/Button';
import Title from './components/Title';
import CheckboxInput from './components/CheckboxInput';
const appProps = {
  dropdownProps: [
    'Student',
    'Fulltimejob',
    'Fulltimeleaner',
    'Prefer not to say',
    'other'
  ],
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
        <Title size='lg'>Survey Form</Title>
        <Container>
          <Copy size='md'>Let us know how we can improve freeCodeCamp</Copy>
          <Row>
            <Label name='name' id='name'>
              Name
            </Label>
            <Input
              name='name'
              type='text'
              id='name'
              placeholder='Enter your name'
            />
          </Row>
          <Row>
            <Label name='email' id='email'>
              Email
            </Label>
            <Input
              name='email'
              type='email'
              id='email'
              placeholder='Enter your email'
            />
          </Row>
          <Row>
            <Label name='age' id='number'>
              Age
            </Label>
            <Input
              name='age'
              type='number'
              id='number'
              placeholder='Enter your Age'
              pattern='\d*'
              min={1}
              max={100}
            />
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
            <RadioInput
              name='recommend'
              value={appProps.radioProps}
              type='radio'
            />
          </Row>
          <Row>
            <Label name='dropdown'>What do you like most in FCC:</Label>
            <Dropdown value={appProps.secondDropdownProps} type='dropdown' />
          </Row>
          <Row>
            <Label name='radio'>What do you like most in FCC:</Label>
            <CheckboxInput
              name='preferences'
              value={appProps.secondRadioProps}
              type='radio'
            />
          </Row>
          <Row>
            <Label name='radio'>
              Things that should be improved in the future (Check all that
              apply):
            </Label>
            <RadioInput
              name='improvements'
              value={appProps.secondRadioProps}
              type='radio'
            />
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
