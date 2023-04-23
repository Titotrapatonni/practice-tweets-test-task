import { useState } from "react";

export const FollowBtn = () => {
  const [following, setFollowing] = useState(false);

  const toggle = () => setFollowing((following) => !following);
  console.log(following);
  if (!following) {
    console.log("tweets + 1");
  } else {
    console.log("tweets");
  }

  return (
    <button type="button" onClick={toggle}>
      FollowBtn
    </button>
  );
};
