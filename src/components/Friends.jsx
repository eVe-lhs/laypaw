import React, { useState } from "react";
import { Menu, Grid, Item, Button, Input } from "semantic-ui-react";

const FriendItem = ({ name, profile, activeStatus }) => {
  return (
    <Item>
      <Item.Image size="tiny" src={profile} />

      <Item.Content verticalAlign="middle">
        <Item.Header>{name}</Item.Header>
        <Item.Meta>{activeStatus}</Item.Meta>
        <Item.Extra>
          <Button floated="right">Send Message</Button>
          <Button floated="right">View Profile</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

const AllFriends = () => {
  return (
    <>
      <FriendItem
        name="Lin Htet Swe"
        profile="http://react.semantic-ui.com/images/avatar/large/stevie.jpg"
        activeStatus="Active Now"
      />
      <FriendItem
        name="Veronika Ossi"
        profile="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
        activeStatus="Active 2 hrs ago"
      />
      <FriendItem
        name="Jenny Hess"
        profile="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
        activeStatus="Active 1 hr ago"
      />{" "}
      <FriendItem
        name="Lin Htet Swe"
        profile="http://react.semantic-ui.com/images/avatar/large/stevie.jpg"
        activeStatus="Active Now"
      />{" "}
      <FriendItem
        name="Lin Htet Swe"
        profile="http://react.semantic-ui.com/images/avatar/large/stevie.jpg"
        activeStatus="Active Now"
      />{" "}
      <FriendItem
        name="Lin Htet Swe"
        profile="http://react.semantic-ui.com/images/avatar/large/stevie.jpg"
        activeStatus="Active Now"
      />
    </>
  );
};

const Groups = () => {
  return (
    <>
      <Item>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">Cute Dog</Item.Header>
          <Item.Description>
            <h4>
              Lin Htet Swe, Hein Htet Kyaw, Su Yanant Hlaing, Pan Khin Khin Zaw
              and +12 more..
            </h4>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">Cute Dog</Item.Header>
          <Item.Description>
            <h4>
              Lin Htet Swe, Hein Htet Kyaw, Su Yanant Hlaing, Pan Khin Khin Zaw
              and +12 more..
            </h4>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <Item.Content header="Cute Dog">
          <Item.Description>
            <h4>
              Lin Htet Swe, Hein Htet Kyaw, Su Yanant Hlaing, Pan Khin Khin Zaw
              and +12 more..
            </h4>
          </Item.Description>
        </Item.Content>
      </Item>
    </>
  );
};

function Friends() {
  const [activeItem, setActiveItem] = useState("AllFriends");
  let activeMenu;
  switch (activeItem) {
    case "AllFriends":
      activeMenu = <AllFriends />;
      break;
    case "ActiveFriends":
      activeMenu = <AllFriends />;
      break;
    case "Groups":
      activeMenu = <Groups />;
      break;
  }

  return (
    <Grid container centered>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Menu pointing widths={3} secondary>
            <Menu.Item
              name="AllFriends"
              onClick={() => {
                setActiveItem("AllFriends");
              }}
              active={activeItem === "AllFriends"}
            >
              All Friends (500)
            </Menu.Item>
            <Menu.Item
              name="ActiveFriends"
              onClick={() => {
                setActiveItem("ActiveFriends");
              }}
              active={activeItem === "ActiveFriends"}
            >
              Active Friends (200)
            </Menu.Item>{" "}
            <Menu.Item
              name="Groups"
              onClick={() => {
                setActiveItem("Groups");
              }}
              active={activeItem === "Groups"}
            >
              Groups (5)
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Input
            icon="search"
            placeholder="Search Friends..."
            style={{
              width: "100%",
            }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Item.Group
            link
            divided
            style={{
              overflow: "auto",
              maxHeight: "70vh",
              width: "100%",
            }}
          >
            {activeMenu}
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Friends;
