import React from "react";
import FormGameRows from "../form_game_rows/FormGameRows";
import TableGame from "../table_game/TableGame";

function DivGameRows(props) {
    return (
        <div>
            <FormGameRows sizeTable={props.sizeTable} />
        </div>
    );
}

export default DivGameRows;