import { Wrapper } from "./Card.styled";
import pic from "../../images/picture2.png";
import Logo from "../../images/Logo.png";
import { FollowBtn } from "../FollowBtn/FollowBtn";

export const Card = ({ profile }) => {
  console.log(profile);
  const { user, avatar, id, tweets, followers } = profile;
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <img src={pic} alt="pic" />
      <img src={avatar} alt="" width="60" height="60" />
      <p>{user}</p>
      <p>{tweets} tweets</p>
      <p> {followers} followers</p>
      <FollowBtn />
    </Wrapper>
  );
};
