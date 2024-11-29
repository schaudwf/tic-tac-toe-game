let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const resetgame =()=>{
    turnO = true;
    enabledButton();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Was clicked");
        if(turnO === true)
        {
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const disabledButton = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledButton = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner1)=>{
    msg.innerText= `congratulations, Winner is ${winner1}`;
    msgContainer.classList.remove("hide");
    disabledButton();
}


const checkWinner=()=>{
    for( let pattern of winpattern){
       
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText
        if(pos1Val!=""&& pos2Val!="" && pos3Val!="")
        {
            if(pos1Val===pos2Val && pos2Val ===pos3Val){
                console.log("WINNER",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newgameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
