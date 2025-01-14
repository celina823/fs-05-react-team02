import { MyGoal } from "./MyGoal";
import { MyHope } from "./MyHope";
import "./Main.css";

export function MainIntroduce() {
  return (
    <div id="MainIntroduceContainer">
      <MyGoal />
      <MyHope />
    </div>
  );
}
