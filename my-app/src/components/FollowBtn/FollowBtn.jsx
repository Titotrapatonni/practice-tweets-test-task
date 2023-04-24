export const FollowBtn = ({ onClick, following }) => {
  return (
    <button type="button" onClick={onClick}>
      {following ? "Following" : "Follow"}
    </button>
  );
};
