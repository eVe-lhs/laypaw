import React from "react";
import { Feed } from "semantic-ui-react";
import profilePic from "../../assets/profile.png";

const ChatHistories = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src={profilePic} alt="profile" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User>
          <Feed.Date>Active 1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Have you seen what's going on in Israel? Can you believe it.
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default ChatHistories;
