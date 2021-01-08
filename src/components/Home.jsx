import React, { useState } from "react";
import { Grid, Segment, Menu, Input } from "semantic-ui-react";
import ChatHistories from "./HomePage/ChatHistories";
import ChatBox from "./HomePage/ChatBox";
import ChatSetting from "./HomePage/ChatSetting";

function Home() {
  const [activeItem, setActiveItem] = useState("item1");
  return (
    <Grid celled="internally" container stackable mobile reversed>
      <Grid.Row>
        {/* the chat history box */}
        <Grid.Column width={4}>
          {/* <Grid
            style={{ overflow: "auto", maxHeight: "85vh" }}
            celled="internally"
          >
            <Grid.Row style={{ paddingTop: 10 }}>
              <ChatHistories />
            </Grid.Row>
            <Grid.Row style={{ paddingTop: 10 }}>
              <ChatHistories />
            </Grid.Row>
            <Grid.Row style={{ paddingTop: 10 }}>
              <ChatHistories />
            </Grid.Row>
          </Grid> */}
          <Input
            icon="search"
            placeholder="Search Friend..."
            style={{
              width: "100%",
            }}
            inverted
          />
          <Menu
            vertical
            style={{
              overflow: "auto",
              maxHeight: "80vh",
              width: "100%",
              border: "none",
            }}
          >
            <Menu.Item
              name="item1"
              active={activeItem === "item1"}
              onClick={() => setActiveItem("item1")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item2"
              active={activeItem === "item2"}
              onClick={() => setActiveItem("item2")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item3"
              active={activeItem === "item3"}
              onClick={() => setActiveItem("item3")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item4"
              active={activeItem === "item4"}
              onClick={() => setActiveItem("item4")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item5"
              active={activeItem === "item5"}
              onClick={() => setActiveItem("item5")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item6"
              active={activeItem === "item6"}
              onClick={() => setActiveItem("item6")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item7"
              active={activeItem === "item7"}
              onClick={() => setActiveItem("item7")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item8"
              active={activeItem === "item8"}
              onClick={() => setActiveItem("item8")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
            <Menu.Item
              name="item9"
              active={activeItem === "item9"}
              onClick={() => setActiveItem("item9")}
              style={{ maxHeight: 80, overflow: "hidden", padding: 12 }}
            >
              <ChatHistories />
            </Menu.Item>
          </Menu>
        </Grid.Column>

        {/* the chat box itself */}
        <Grid.Column width={8}>
          <ChatBox />
        </Grid.Column>

        {/* chat settings */}
        <Grid.Column width={4}>
          <ChatSetting />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
