import { MyIntroduce } from "./MyIntroduce";
import { MyHope } from "../MainIntroduce/MyHope";
import { MyGoal } from "../MainIntroduce/MyGoal";

export function HeaderIntroduce() {
  return (
    <div>
      <MyIntroduce name="박세정" mbti="ISTP" blood="A" star="처녀자리" />
    </div>
  );
}
