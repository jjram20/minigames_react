import React, { useState, useEffect } from "react";
import TableGame from "../table_game/TableGame";
import './FormGameRows.css';

function FormGameRows(props) {
    let nrows = props.sizeTable;

    const [rows, setRows] = useState(nrows);
    const [minWinning, setMinWinning] = useState(nrows);
    const [gameStarted, setGameStarted] = useState(false);
    const [rowsGame, setRowsGame] = useState();
    const [minWinningGame, setMinWinningGame] = useState();

    const start_game = (e) => {
        console.log(minWinning);
        console.log(rows);
        if (minWinning > rows) {
            alert(`Length row for winning should be less than number rows`);
        } else {
            setGameStarted(true);
            setRowsGame(Array.from({ length: rows }, () => Array(rows).fill('')));
            setMinWinningGame(rows);
            alert(`Table created or updated. The number of rows is ${rows}`);
        }
    }
    
    return (
        <div>
            <label id="label_number_rows">Select number rows</label>
            <input id="number_rows" type="number" min="3" max="6" value={rows} onChange={(e) => setRows(e.target.value)} />
            <label id="label_length_row_win">Select length row for winning</label>
            <input id="length_row_winning" type="number" min="3" max="6" value={minWinning} onChange={(e) => setMinWinning(e.target.value)} />
            <button id="button_start_game" onClick={start_game}>Start game</button>
            { gameStarted && <TableGame sizeTable={rows} minWinning={minWinning} updateGame={setRowsGame} structureGame={rowsGame} />}
        </div>
    );
};

export default FormGameRows;