import { Image, Parag, Wrapper } from "./Card.styled";
import pic from "../../images/picture2.png";
import Logo from "../../images/Logo.png";
import { FollowBtn } from "../FollowBtn/FollowBtn";
import { useState } from "react";

let finalFollowers;

export const Card = ({ profile }) => {
  const { avatar, id, tweets, followers } = profile;
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem(`myFollowings ${id}`)) || false
  );

  const toggle = () => setFollowing((prevState) => !prevState);

  finalFollowers = following ? followers + 1 : followers;

  localStorage.setItem(`myFollowings ${id}`, JSON.stringify(following));
  const handleClick = () => {
    toggle();
  };

  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <img src={pic} alt="pic" />
      <div>
        <Image src={avatar} alt="" width="60" height="60" />
      </div>

      <Parag>{tweets} TWEETS</Parag>
      <Parag> {+finalFollowers} FOLLOWERS</Parag>
      <FollowBtn onClick={handleClick} following={following} />
    </Wrapper>
  );
};
