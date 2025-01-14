export function MyIntroduceMe({ name, mbti, blood, star }) {
  return (
    <div>
      <div>
        이름 <div>{name}</div>
      </div>
      <div>
        MBTI <div>{mbti}</div>
      </div>
      <div>
        혈액형 <div>{blood}</div>
      </div>
      <div>
        별자리 <div>{star}</div>
      </div>
    </div>
  );
}
