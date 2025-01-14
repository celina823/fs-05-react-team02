import { PokemonGet } from "./PokemonGet";
import { PokemonImageGet } from "./PokemonImageGet";
import "./Sejeong.css";
import { typoStyles } from "../../../../utils/Typo/Typo";

export function PokemonCard({ pokemonId }) {
  return (
    <div id="PokemonCardZ">
      <PokemonImageGet pokemonId={pokemonId} />
      <PokemonGet pokemonId={pokemonId} />
    </div>
  );
}
