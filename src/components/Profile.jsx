import React from "react";
import { Segment, Image, Item, Button, Icon, Label } from "semantic-ui-react";
import Cover from "../assets/blackbg.jpg";
import profilePic from "../assets/profile.png";

function Profile() {
  return (
    <div>
      <Segment.Group>
        <Image fluid src={Cover} style={{ maxHeight: "50vh" }} />
        <Segment style={{ marginBottom: -90 }}>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            size="small"
            circular
            bordered
            style={{
              top: -90,
              borderColor: "white",
              borderWidth: "4px",
              borderStyle: "solid",
            }}
          />
        </Segment>
        <Segment basic size="large">
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">Lin Htet Swe</Item.Header>
                <Item.Meta>
                  <span>linhtetswe@gmail.com</span>
                </Item.Meta>
                <Item.Description>This is my very best quote</Item.Description>
                <Item.Meta>
                  <span>Born: 20.6.01</span>
                </Item.Meta>
                <Item.Meta>
                  <span>First Joined: 20.12.20</span>
                </Item.Meta>
                <Item.Meta>
                  <span>
                    {" "}
                    <Icon name="map marker" /> Yangon,Myanmar
                  </span>
                </Item.Meta>
                <Item.Meta>
                  <span>
                    <Icon name="user" />
                    22 Friends
                  </span>
                </Item.Meta>{" "}
                <Item.Extra>
                  <Label>Gaming</Label>
                  <Label>Football</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Button color="green">Edit Profile</Button>
          </Item.Group>
        </Segment>
      </Segment.Group>
    </div>
  );
}

export default Profile;
