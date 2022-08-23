//player list section
const playerArray = [];
function display(players)
{
    console.log(players);
    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = "";
    

   
    for (let i= 0; i < 6; i++){
    
        if(i<5){

    //console.log(playerArray[i].playerName);
    const name = playerArray[i].playerName;

    const tr = document.createElement("tr");
    
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name} </td>
    `
    
    tableBody.appendChild(tr);
    }

    else {
        alert('Only Five Player is allowed');
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




