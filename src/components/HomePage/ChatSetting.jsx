import React from "react";
import { Menu, Image, Segment, Header, Icon, Label } from "semantic-ui-react";
import profilePic from "../../assets/profile.png";

const ChatSetting = () => {
  return (
    <>
      <Image src={profilePic} circular size="small" centered />
      <Segment basic textAlign="center" size="medium">
        <Header as="h2">Khine Zin Thant</Header>
      </Segment>
      <Menu vertical secondary size="huge" color="red" fluid>
        <Menu.Item name="Change Theme" onClick={() => {}}>
          <Header as="h3" style={{ display: "inline" }}>
            Change Theme
          </Header>
          <Icon name="paint brush" />
        </Menu.Item>
        <Menu.Item name="Mute" onClick={() => {}}>
          <Header as="h3" style={{ display: "inline" }}>
            Mute
          </Header>{" "}
          <Icon name="bell slash" />
        </Menu.Item>
        <Menu.Item name="Change Nickname" onClick={() => {}}>
          <Header as="h3" style={{ display: "inline" }}>
            Change Nickname
          </Header>
          <Icon name="smile" />
        </Menu.Item>
        <Menu.Item name="Delete Conversation" onClick={() => {}}>
          <Header as="h3" color="red" style={{ display: "inline" }}>
            Delete Conversation
          </Header>
          <Icon name="trash" color="red" />
        </Menu.Item>
        <Menu.Item name="Block this user" onClick={() => {}}>
          <Header as="h3" color="red" style={{ display: "inline" }}>
            Block This User
          </Header>
          <Icon name="ban" color="red" />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default ChatSetting;
