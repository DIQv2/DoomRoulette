function use() {
  const list = document.getElementById('list');
  list.innerHTML = "Who to who?" + "<br>";
  const names = ["Dragos", "Brandy", "Stefan", "Thea", "Bia", "Gabriela"];
  let text = "<br> ";
  for (let i = 0; i < names.length; i++) {
    let possibleCandidate1 = Math.floor(Math.random() * names.length);
    while (text.includes("<br> " + names[possibleCandidate1])) {
      possibleCandidate1 = Math.floor(Math.random() * names.length);
    }
    text += names[possibleCandidate1] + " -> ";
    let possibleCandidate2 = Math.floor(Math.random() * names.length);
    while (text.includes("-> " + names[possibleCandidate2]) || possibleCandidate2==possibleCandidate1) {
      possibleCandidate2 = Math.floor(Math.random() * names.length);
    }
    text += names[possibleCandidate2] + " <br> ";
  }
  console.log(text);
  list.innerHTML += text;
}  