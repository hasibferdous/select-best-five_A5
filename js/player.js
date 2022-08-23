//player list section
const playerArray = [];
function display(players)
{
    console.log(players);
    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = "";
    
    for (let i= 0; i < 6; i++){
    
        

    //console.log(playerArray[i].playerName);
    const name = playerArray[i].playerName;

    const tr = document.createElement("tr");
    
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name} </td>
    `
    if(i<=4){
    tableBody.appendChild(tr);
    }

    else {
        alert('Only Five Players are allowed');
        return;
    }
}
}    
function addToList(player){
        //console.log(player.parentNode.parentNode.children[0].innerText);
        player.disabled = true;
        const playerName = player.parentNode.parentNode.children[0].innerText;
        //console.log(playerName);
    
        const playerObj = {
           playerName: playerName
        }
        //console.log(playerObj)
        playerArray.push(playerObj);
        //console.log(playerArray)
        //document.getElementById("total-added-player").innerText = playerArray.length;
        display(playerArray);
}

//budget section

function playerField() {
    
    const playerInputField = document.getElementById("player-field");
    const playerInputFieldString = playerInputField.value;
    const totalPlayer = parseFloat(playerInputFieldString);
    return totalPlayer*5;
}
document.getElementById("calculate-bt").addEventListener("click", function () {
    const totalPlayerE = totalPlayer*5;
    const totalPlayerElement = document.getElementById("total-player");
    totalPlayerElement.innerText = totalPlayerE;
})

document.getElementById("calculate-btn").addEventListener("click", function () {
    const totalPlayer = playerField();

    const managerInputField = document.getElementById("manager-field");
    const managerInputFieldString = managerInputField.value;
    const managerField = parseFloat(managerInputFieldString)
    managerInputField.value = "";

    const coachInputField = document.getElementById("coach-field");
    const coachInputFieldString = coachInputField.value;
    const coachField = parseFloat(coachInputFieldString);
    coachInputField.value = ""

    const totalExpences = totalPlayer + managerField + coachField;
    const totalExpencesElement = document.getElementById("total-expenses");
    totalExpencesElement.innerText = totalExpences;

})