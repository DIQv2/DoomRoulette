function use() {
    const list = document.getElementById('list');
    list.innerHTML = "Who to who?" + "<br><br>";
    const names = ["Brandy", "Stefan", "Bia", "Dragos", "Gabriela", "Thea"];
    let possibleMatches = [...names.keys()];
    let candidateList = '';
    names.forEach(name=>{
      	let currentCandidate = names.indexOf(name);
	try {
		let matchingCandidate = getPossibleCandidate(currentCandidate, possibleMatches);
		possibleMatches = possibleMatches.filter(candidate => candidate !== matchingCandidate);
	      	candidateList += names[currentCandidate] + " -> " + names[matchingCandidate] + "<br>";
	} catch (error) {
		candidateList = 'Something went wrong, please try again!';
	}
    })
    list.innerHTML += candidateList;
  }

function getPossibleCandidate(currentCandidateIndex, possibleMatches) {
	let matchedCandidate = -1;
	shuffle(possibleMatches).every(possibleCandidate => {
		if (possibleCandidate === currentCandidateIndex) {
			return true;
		}
		matchedCandidate = possibleCandidate;
		return false;	
	})
	if(matchedCandidate === -1) {
		throw new Error();
	}
	return matchedCandidate;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}