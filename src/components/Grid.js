import * as React from "react";
import DynamicComponent from "./dynamicComponent";

const Grid = ({ blok }) => (
    <div className="grid grid-cols-3">
        {blok.columns.map(blok => {
            return (
                <DynamicComponent blok={blok} />
            );
        })}
    </div>
)
 
export default Grid;