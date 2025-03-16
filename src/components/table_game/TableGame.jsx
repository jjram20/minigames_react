import React from 'react';
import './TableGame.css';

function TableGame (props) {
    const createTable = () => {
        let table = [];
        let size = parseInt(props.sizeTable);
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(<td game_row_id={i} game_col_id={j}>a</td>)
            }
            table.push(<tr>{row}</tr>)
        }
        return table;
    }

    return (
        <div id="div_table_game">
            <table id="table_game">
                {createTable()}
            </table>
        </div>

    )
}

export default TableGame;