import { Wrapper } from "./Card.styled";
import pic from "../../images/picture2.png";
import Logo from "../../images/Logo.png";
import { FollowBtn } from "../FollowBtn/FollowBtn";
import { useState } from "react";

let finalFollowers;

export const Card = ({ profile }) => {
  const { user, avatar, id, tweets, followers } = profile;
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem(`localIsFollowing ${id}`)) || false
  );

  const toggle = () => setFollowing((prevState) => !prevState);

  finalFollowers = following ? followers + 1 : followers;

  localStorage.setItem(`localFollowers ${id}`, JSON.stringify(finalFollowers));
  localStorage.setItem(`localIsFollowing ${id}`, JSON.stringify(following));

  const handleClick = () => {
    toggle();
  };
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <img src={pic} alt="pic" />
      <img src={avatar} alt="" width="60" height="60" />
      <p>{user}</p>
      <p>{tweets} tweets</p>
      <p> {+finalFollowers} followers</p>
      <FollowBtn onClick={handleClick} following={following} />
    </Wrapper>
  );
};
