import React, { useEffect, useRef } from "react";
import {
  Menu,
  Grid,
  Feed,
  Dropdown,
  Label,
  Input,
  Segment,
  Image,
} from "semantic-ui-react";
import profilePic from "../../assets/profile.png";

const ChatBoxHeader = () => {
  return (
    <Menu fluid size="large">
      <Menu.Header style={{ padding: 8 }}>
        <Feed size="small">
          <Feed.Event>
            <Feed.Label image={profilePic} />
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User>
                <Feed.Date>Active 1 Hour Ago</Feed.Date>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Menu.Header>
      <Menu.Menu position="right">
        <Dropdown item icon="ellipsis vertical">
          <Dropdown.Menu>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>Edit Permissions</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Export</Dropdown.Header>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

function ChatBox() {
  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  });

  const OtherSenderMessage = () => {
    return (
      <Segment floated="left" basic>
        <Image src={profilePic} circular size="mini" avatar />
        <Label pointing="left" size="large">
          This segment will appear to the right
        </Label>

        <span style={{ color: "grey", fontSize: 12 }}>3:14 AM</span>
      </Segment>
    );
  };

  const CurrentSenderMessage = () => {
    return (
      <>
        <Segment floated="right" basic>
          <span style={{ color: "grey", fontSize: 12 }}>3:14 AM</span>
          <Label pointing="right" size="large" color="black">
            This segment will appear to the right
          </Label>
        </Segment>
      </>
    );
  };

  return (
    <Grid container>
      {/* Chat box header */}

      <Grid.Row verticalAlign="top">
        <ChatBoxHeader />
      </Grid.Row>

      {/* Chat box messages */}

      <Grid.Row verticalAlign="middle">
        <Segment
          style={{ height: "70vh", width: "100%", overflow: "auto" }}
          className="chatMessages"
        >
          <OtherSenderMessage />
          <CurrentSenderMessage />
          <CurrentSenderMessage />
          <CurrentSenderMessage />
          <CurrentSenderMessage />
          <OtherSenderMessage />
          <OtherSenderMessage />
          <CurrentSenderMessage />
          <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
        </Segment>
      </Grid.Row>

      {/* Chat box input */}

      <Grid.Row verticalAlign="bottom">
        <Input
          action={{
            color: "teal",
            icon: "paper plane",
          }}
          placeholder="Write a message"
          style={{ width: "100%" }}
        />
      </Grid.Row>
    </Grid>
  );
}

export default ChatBox;
