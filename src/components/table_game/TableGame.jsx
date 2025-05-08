import React, { useState, useEffect } from 'react';
import './TableGame.css';

function TableGame (props) {
    const createTable = () => {
        let table = [];
        let size = parseInt(props.sizeTable);
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(<td className="cell_table_game" onClick={ () => { console.log(`Winner: ${winner}`); !winner && newTurn(i, j)  }} key={`${i}-${j}`}>{ props.structureGame[i][j] }</td>)
            }
            table.push(<tr key={`row-${i}`}>{row}</tr>)
        }
        return table;
    }

    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(false);

    const newTurn = (posx, posy) => {
        console.log("Applying new turn");
        console.log(`Actual value cell: ${props.structureGame[posx][posy]}`);
        console.log(props.structureGame);
        if (props.structureGame[posx][posy] === '' ) {
            console.log("Getting mark");
            let mark = '';
            if (turn % 2 === 1) {
                mark = 'O';
            } else {
                mark = 'X';
            }
            let newGameStructure = props.structureGame.map(row => [...row]);
            newGameStructure[posx][posy] = mark;
            props.updateGame(newGameStructure);
            setTurn(turn + 1);
            console.log("New turn applied");
        } else {
            console.log("Was not possible to apply turn");
        }
    }

    const verifyWinner = (rows, minWinner, structureGame) => {
        // Verify horizontally
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j <= (rows - minWinner); j++) {
                let value = structureGame[i][j];
                if (value === "X" || value === "O") {
                    let result = true;
                    for (let k = (j+1); k < (j + minWinner); k++) {
                        if (value !== structureGame[i][k]) {
                            result = false;
                            break;
                        }
                    }
                    if (result === true) {
                        return true;
                    }
                }
            }
        }

        // Verify vertically
        console.log("Vertical");
        for (let i = 0; i <= (rows - minWinner); i++) {
            for (let j = 0; j < rows; j++) {
                let value = structureGame[i][j];
                if (value === "X" || value === "O") {
                    let result = true;
                    for (let k = (i+1); k < (i + minWinner);  k++) {
                        console.log(k);
                        if (value !== structureGame[k][j]) {
                            result = false;
                            break;
                        }
                    }
                    if (result === true) {
                        return true;
                    }
                }
            }

        }

        // Verify diagonally
        console.log("Diagonal");
        for (let i = 0;  i <= (rows - minWinner);  i++) {
            for (let j = 0; j <= (rows - minWinner); j++) {
                let value = structureGame[i][j];
                if (value === "X" || value === "O") {
                    let result = true;
                    for (let k = (i+1); k < (i + minWinner); k++) {
                        if (value !== structureGame[k][k]) {
                            result = false;
                            break;
                        }
                    }
                    if (result === true) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    useEffect(() => {
        console.log("Game updated");
        setWinner(verifyWinner(props.sizeTable, props.minWinning, props.structureGame));
        console.log(props.structureGame);
        console.log("Winner");
        console.log(winner);
    }, [props.structureGame]);

    // Logic to print instructions message
    let statusMessage;

    if (winner) {
        if (turn % 2 === 1) {
            statusMessage = "Player 1 won";
        } else {
            statusMessage = "Player 2 won";
        }
    } else {
        if (turn % 2 === 0) {
            statusMessage = "Turn Player 1";
        } else {
            statusMessage = "Turn Player 2";
        }

    }

    return (
        <div id="div_table_game">
            <div>{ statusMessage }</div>
            <table id="table_game">
                <tbody>{createTable()}</tbody>
            </table>
        </div>

    )
}

function statusMessage() {

}

export default TableGame;