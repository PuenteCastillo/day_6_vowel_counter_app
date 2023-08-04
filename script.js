// varaibles
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const input = document.querySelector(".input-text");

// events

btn.addEventListener("click", vowelCount);

// functions

function vowelCount() {
  let vowelCount = 0;
  let wordValue = input.value.toLowerCase();

  for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    if (letter.match(/[aeiou]/g)) {
      vowelCount++;
    }
  }
  result.innerHTML = `The word ${wordValue} has ${vowelCount} vowels`;
}
