import React from "react";
import {
  Segment,
  Form,
  Checkbox,
  Button,
  Header,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon name="user" circular />
        <Header.Content>Login To Your Account</Header.Content>
      </Header>
      <Segment raised>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Keep me logged in" />
          </Form.Field>
          <Form.Field>
            <a href="#"> Forgot password </a>
          </Form.Field>
          <Button type="submit">Login</Button>
          <Form.Field>
            Don't have an account?<Link to="/signup"> Sign Up</Link>
          </Form.Field>
        </Form>
      </Segment>
    </>
  );
}

export default SignIn;
