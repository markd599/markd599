document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Bitte gib einen Namen ein.");
        return;
    }
    
    const canRide = confirm("Kann " + name + " heute Moped fahren?");
    
    addVoteResult(name, canRide);
    document.getElementById('nameInput').value = "";
});

function addVoteResult(name, canRide) {
    const resultsDiv = document.getElementById('results');
    
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.textContent = name + " kann " + (canRide ? "fahren." : "nicht fahren.");
    
    resultsDiv.appendChild(resultItem);
}
