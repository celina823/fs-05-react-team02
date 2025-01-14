import axios from "axios";
import { useState, useEffect } from "react";
import { typoStyles } from "../../../../utils/Typo/Typo";
// 포켓몬 속성(타입)별 svg파일
import BugIcon from "./PokemonType/bug.svg";
import DarkIcon from "./PokemonType/dark.svg";
import DragonIcon from "./PokemonType/dragon.svg";
import ElectricIcon from "./PokemonType/electric.svg";
import FairyIcon from "./PokemonType/fairy.svg";
import FightingIcon from "./PokemonType/fighting.svg";
import FireIcon from "./PokemonType/fire.svg";
import FlyingIcon from "./PokemonType/flying.svg";
import GhostIcon from "./PokemonType/ghost.svg";
import GrassIcon from "./PokemonType/grass.svg";
import GroundIcon from "./PokemonType/ground.svg";
import IceIcon from "./PokemonType/ice.svg";
import NormalIcon from "./PokemonType/normal.svg";
import PoisonIcon from "./PokemonType/poison.svg";
import PsychicIcon from "./PokemonType/psychic.svg";
import RockIcon from "./PokemonType/rock.svg";
import SteelIcon from "./PokemonType/steel.svg";
import WaterIcon from "./PokemonType/water.svg";
import "./PokemonType/PokemonTypeStyle.css";

export function PokemonGet({ pokemonId = 413 }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 포켓몬 api 가져오기
  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      setPokemonData(response.data);
      // console.log("Pokemon Data 확인용", response.data);
    } catch (error) {
      console.error("설명 에러", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [pokemonId]);

  // 한국어 이름을 찾고, 없으면 영어 이름 사용
  const getPokemonName = (names) => {
    const nameObj =
      names.find((name) => name.language.name === "ko") ||
      names.find((name) => name.language.name === "en");
    return nameObj ? nameObj.name : "Unknown";
  };

  //egg_groups에서 가져온 속성값
  const getType = (eggGroups) => {
    if (!eggGroups || !Array.isArray(eggGroups)) {
      return []; // eggGroups가 배열이 아니면 빈 배열 반환
    }
    // eggGroups에서 name 값들만 추출하여 배열로 반환
    return eggGroups.map((group) => group.name);
  };

  // 타입에 따라 SVG 반환
  const getTypeIcon = (type) => {
    switch (type) {
      case "bug":
        return (
          <img
            src={BugIcon}
            alt="Bug Type"
            className="icon bug"
            id="PokemonTypeIcon"
          />
        );
      case "dark":
        return (
          <img
            src={DarkIcon}
            alt="Dark Type"
            className="icon dark"
            id="PokemonTypeIcon"
          />
        );
      case "dragon":
        return (
          <img
            src={DragonIcon}
            alt="Dragon Type"
            className="icon dragon"
            id="PokemonTypeIcon"
          />
        );
      case "electric":
        return (
          <img
            src={ElectricIcon}
            alt="Electric Type"
            className="icon electric"
            id="PokemonTypeIcon"
          />
        );
      case "fairy":
        return (
          <img
            src={FairyIcon}
            alt="Fairy Type"
            className="icon fairy"
            id="PokemonTypeIcon"
          />
        );
      case "fighting":
        return (
          <img
            src={FightingIcon}
            alt="Fighting Type"
            className="icon fighting"
            id="PokemonTypeIcon"
          />
        );
      case "fire":
        return (
          <img
            src={FireIcon}
            alt="Fire Type"
            className="icon fire"
            id="PokemonTypeIcon"
          />
        );
      case "flying":
        return (
          <img
            src={FlyingIcon}
            alt="Flying Type"
            className="icon flying"
            id="PokemonTypeIcon"
          />
        );
      case "ghost":
        return (
          <img
            src={GhostIcon}
            alt="Ghost Type"
            className="icon ghost"
            id="PokemonTypeIcon"
          />
        );
      case "grass":
      case "plant":
        return (
          <img
            src={GrassIcon}
            alt="Grass Type"
            className="icon grass"
            id="PokemonTypeIcon"
          />
        );
      case "ground":
        return (
          <img
            src={GroundIcon}
            alt="Ground Type"
            className="icon ground"
            id="PokemonTypeIcon"
          />
        );
      case "ice":
        return (
          <img
            src={IceIcon}
            alt="Ice Type"
            className="icon ice"
            id="PokemonTypeIcon"
          />
        );
      case "normal":
        return (
          <img
            src={NormalIcon}
            alt="Normal Type"
            className="icon normal"
            id="PokemonTypeIcon"
          />
        );
      case "poison":
        return (
          <img
            src={PoisonIcon}
            alt="Poison Type"
            className="icon poison"
            id="PokemonTypeIcon"
          />
        );
      case "psychic":
        return (
          <img
            src={PsychicIcon}
            alt="Psychic Type"
            className="icon psychic"
            id="PokemonTypeIcon"
          />
        );
      case "rock":
        return (
          <img
            src={RockIcon}
            alt="Rock Type"
            className="icon rock"
            id="PokemonTypeIcon"
          />
        );
      case "steel":
        return (
          <img
            src={SteelIcon}
            alt="Steel Type"
            className="icon steel"
            id="PokemonTypeIcon"
          />
        );
      case "water":
      case "water1":
        return (
          <img
            src={WaterIcon}
            alt="Water Type"
            className="icon water"
            id="PokemonTypeIcon"
          />
        );
      default:
        return <div></div>;
    }
  };

  // 여러 개의 타입 아이콘을 렌더링하도록 수정
  const getTypeIcons = (eggGroups) => {
    const types = getType(eggGroups); // eggGroups에서 타입들 추출
    if (!Array.isArray(types) || types.length === 0) {
      return <div>타입 정보 없음</div>; // types가 배열이 아니거나 비어 있으면 메시지 반환
    }
    return types.map((type) => getTypeIcon(type)); // 각 타입에 맞는 아이콘을 렌더링
  };

  //한국어로 된 flavor text 가져오기
  const getKoreanFlavorText = (flavorTextEntries) => {
    const koreanEntry = flavorTextEntries.find(
      (entry) => entry.language.name === "ko"
    );
    return koreanEntry ? koreanEntry.flavor_text : "설명 없음";
  };

  if (loading) return <div>로딩중!</div>;
  if (!pokemonData) return <div>포켓몬 없음</div>;

  // console.log("pokemondata.egg확인용", pokemonData.egg_groups);
  //리턴값
  return (
    <div id="pokemonTextZone">
      <div id="pokemonNumAndType">
        {/* 여러 개의 타입 아이콘 출력 */}
        <div id="pokemonTypeIcons">{getTypeIcons(pokemonData.egg_groups)}</div>
        <p id="pokemonId" className={typoStyles.textLgBold}>
          no. {pokemonData.id}
        </p>
      </div>
      <p className={typoStyles.text2xlBold}>
        {getPokemonName(pokemonData.names)}
      </p>
      {/* <p>Base Happiness: {pokemonData.base_happiness}</p>
      <p>Is Legendary: {pokemonData.is_legendary ? "Yes" : "No"}</p> */}
      <p id="pokemonType" className={typoStyles.textLgMedium}>
        #속성
      </p>
      <p id="pokemonTypeText" className={typoStyles.textMdMedium}>
        {getType(pokemonData.egg_groups).join(", ")}
      </p>
      <p id="pokemonFlavor" className={typoStyles.textLgMedium}>
        #특성
      </p>
      <p id="pokemonFlavorText" className={typoStyles.textMdMedium}>
        {getKoreanFlavorText(pokemonData.flavor_text_entries)}
      </p>
    </div>
  );
}
