import { useState } from "react";
import FilterButton from "./FilterButton";
function AuthorProfile() {
  const name = ["A","b","c","d","E","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"];
  const vowels = ["a", "e", "i", "o", "u"];
  const [state, setState] = useState(name);
  
  const renderOnlyVowel = (name) => {
    const result = [];
    const vowel = vowels.map((vo) => vo.toLowerCase());
    name.filter((name) => {
      if (vowel.includes(name.toLowerCase())) {
        result.push(name);
      }
    });
    setState(result);
  };
  
  const showAll = (name) => {
    setState(name);
  };
  
  const renderOnlyConsonents = (name) => {
    const result = [];
    const vowel = vowels.map((vo) => vo.toLowerCase());
    name.filter((name) => {
      if (!vowel.includes(name.toLowerCase())) {
        result.push(name);
      }
    });
    setState(result);
  };
  
  return (
    <div>
      <FilterButton
        name={name}
        state={state}
        renderOnlyVowel={renderOnlyVowel}
        showAll={showAll}
        renderOnlyConsonents={renderOnlyConsonents}
      />
    </div>
  );
}
export default AuthorProfile;