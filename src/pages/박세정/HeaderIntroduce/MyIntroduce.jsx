import { MyIntroduceMe } from "./MyIntroduce-me";
import { MyIntroduceSns } from "./MyIntroduce-sns";

export function MyIntroduce() {
  return (
    <div>
      <MyIntroduceMe name="박세정" mbti="ISTP" blood="A형" star="처녀자리" />
      <MyIntroduceSns />
    </div>
  );
}
