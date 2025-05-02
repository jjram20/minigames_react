import React, { useState, useEffect } from 'react';
import './TableGame.css';

function TableGame (props) {
    const createTable = () => {
        let table = [];
        let size = parseInt(props.sizeTable);
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(<td className="cell_table_game" onClick={ () => newTurn(i, j) } key={`${i}-${j}`}>{ props.structureGame[i][j] }</td>)
            }
            table.push(<tr key={`row-${i}`}>{row}</tr>)
        }
        return table;
    }

    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState(false);

    const newTurn = (posx, posy) => {
        if (props.structureGame[posx][posy] === '' ) {
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
        }
    }

    /*useEffect(() => {

    }, props.structureGame);*/

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