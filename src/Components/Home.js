import NewSegment from "./NewSegment";
import { useState } from "react";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const popUpShowHandler = () => {
    setShowPopUp(true);
  };
  const popUpHideHandler = () => {
    setShowPopUp(false);
  };
  return (
    <div>
      <button onClick={popUpShowHandler}>Save Segment</button>
      {showPopUp && <NewSegment onClosePopUp={popUpHideHandler} />}
    </div>
  );
};
export default Home;
