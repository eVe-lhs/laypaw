import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Segment,
  Icon,
  Input,
  Radio,
  Select,
  TextArea,
  Header,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

function SignUp() {
  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon name="user" circular />
        <Header.Content>Sign Up</Header.Content>
      </Header>
      <Segment raised>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Field>
            <label>Email</label>
            <input type="text" placeholder="example123@gmail.com" />
          </Form.Field>{" "}
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </Form.Field>{" "}
          <Form.Field>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
          </Form.Field>
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Field>
            <Button fluid primary>
              Sign Up
            </Button>
            <Form.Field>
              Already have an account?<Link to="/signin"> Sign In</Link>
            </Form.Field>
          </Form.Field>
        </Form>
      </Segment>
    </>
  );
}

export default SignUp;
