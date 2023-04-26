import { FollowButton } from "./FollowBtn.styled";

export const FollowBtn = ({ onClick, following }) => {
  return (
    <FollowButton
      type="button"
      onClick={onClick}
      style={{ backgroundColor: following || "#EBD8FF" }}
    >
      {following ? "Following" : "Follow"}
    </FollowButton>
  );
};
