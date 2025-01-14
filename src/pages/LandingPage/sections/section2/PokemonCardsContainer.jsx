import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import "./Sejeong.css";
import { typoStyles } from "../../../../utils/Typo/Typo";

export function PokemonCardsContainer() {
  const [peopleData, setPeopleData] = useState([
    { name: "김조순", intro: "나는 날 수 있다!", pokemonId: 149 },
    { name: "박세정", intro: "코딩을 썰어버리겠다!", pokemonId: 152 },
    { name: "유호은", intro: "코딩을 불태우겠다!", pokemonId: 37 },
    {
      name: "최수빈",
      intro: "코딩은 내 먹잇감이다!",
      pokemonId: 69,
    },
    {
      name: "봉재완",
      intro: "코딩은 머리 아프다!",
      pokemonId: 54,
    },
    { name: "윤민호", intro: "나에게 코딩은 꿀이다!", pokemonId: 216 },
    { name: "나의 포켓몬은?", intro: "클릭!", pokemonId: 1 },
  ]);

  // 랜덤한 pokemonId를 생성하는 함수
  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 493) + 1; // 1부터 493까지 랜덤 값 생성 (포켓몬 4세대까지 범위)
  };

  // '나의 포켓몬은?'인 항목 클릭 시 핸들클릭
  const handleIntroClick = (index) => {
    const newPeopleData = [...peopleData];

    // '나의 포켓몬은?'인 항목만 랜덤 pokemonId 변경
    if (newPeopleData[index].name === "나의 포켓몬은?") {
      newPeopleData[index].pokemonId = getRandomPokemonId(); // 랜덤 pokemonId로 변경
    }

    setPeopleData(newPeopleData); // 상태 업데이트
  };

  return (
    <div id="PokemonCardWrapper">
      {peopleData.map((person, index) => (
        <div
          key={index}
          id="PokemonCardZone"
          style={
            person.name === "나의 포켓몬은?"
              ? { gridColumn: "span 2" } // '나의 포켓몬은?'인 항목에만 2칸 차지하도록 설정
              : {}
          }
        >
          <div id="CardMyNameZone">
            <div id="CardMyName" className={typoStyles.text3xlBold}>
              {person.name}
            </div>
            <div
              id="CardMyIntro"
              className={typoStyles.textXlSemibold}
              onClick={() => handleIntroClick(index)} // intro 클릭 시 pokemonId 변경
              style={
                person.name === "나의 포켓몬은?" ? { cursor: "pointer" } : {}
              } // '나의 포켓몬은?'인 항목에만 cursor: pointer 적용
            >
              {person.intro}
            </div>
          </div>
          <PokemonCard pokemonId={person.pokemonId} />
        </div>
      ))}
    </div>
  );
}
