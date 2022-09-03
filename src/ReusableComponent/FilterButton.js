import React from "react";
import Author from "./Author";
function FilterButton({
  name,
  state,
  renderOnlyVowel,
  showAll,
  renderOnlyConsonents,
}) {
  return (
    <div>
      <button onClick={() => renderOnlyVowel(name)}>Only vowels</button>
      <button onClick={() => renderOnlyConsonents(name)}>Consonants</button>
      <button onClick={() => showAll(name)}>Show All</button>
      <Author state={state} />
    </div>
  );
}
export default FilterButton;