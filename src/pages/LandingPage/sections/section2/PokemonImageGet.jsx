import axios from "axios";
import { useState, useEffect } from "react";
import "./Sejeong.css";

export function PokemonImageGet({ pokemonId = 413 }) {
  const [pokemonImage, setPokemonImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        // 포켓몬 API 호출하여 이미지 데이터 가져오기
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        );
        setPokemonImage(response.data.sprites.front_default); // front_default 이미지
        setLoading(false);
      } catch (error) {
        console.error("이미지 에러", error);
        setLoading(false);
      }
    };

    fetchPokemonImage();
  }, [pokemonId]);

  if (loading) return <div>로딩중!</div>;

  return (
    <div id="pokemonImageZone">
      {pokemonImage ? (
        <img
          id="pokemonImage"
          className="animationPokemon"
          src={pokemonImage}
          alt={`Pokemon ${pokemonId}`}
        />
      ) : (
        <p>이미지가 없는 포켓몬</p>
      )}
    </div>
  );
}
