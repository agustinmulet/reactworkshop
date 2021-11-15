import { useSwipeable } from "react-swipeable";

const Swipeable = ({ children, ...props }) => {
  const handlers = useSwipeable(props);
  return <div {...handlers}>{children}</div>;
};

export default Swipeable;
