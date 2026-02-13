let divs = document.querySelectorAll('.parent-div div')
let turn = 0
let player1moves = []
let player2moves = []

let winningmoves = [
    // Horizontal
    [1,2,3],
    [4,5,6],
    [7,8,9],

    // Vertical
    [1,4,7],
    [2,5,8],
    [3,6,9],

    // Diagonal
    [1,5,9],
    [3,5,7]
]

function checkWinner(){

    for (let pattern of winningmoves){

        let p1win = pattern.every(num => player1moves.includes(num))
        let p2win = pattern.every(num => player2moves.includes(num))

        if (p1win){
            console.log("Player 1 wins")
        }

        if (p2win){
            console.log("Player 2 wins")
        }
    }

}

divs.forEach((d) => {
    d.addEventListener('click', () => {

        if (turn == 0) {
            d.innerText = 'x'
            turn = 1

            player1moves.push(([...divs].indexOf(d) + 1))
            console.log(player1moves)

            checkWinner()
        }

        else {
            d.innerText = 'o'
            turn = 0

            player2moves.push(([...divs].indexOf(d) + 1))
            console.log(player2moves)

            checkWinner()
        }

    })
})
