import * as React from "react";
import uniqueId from 'uniqid';
import DynamicComponent from "./DynamicComponent";

const Grid = ({ blok }) => (
    <div className="px-4 lg:px-0 lg:container lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blok.columns.map(blok => {
                return (
                    <DynamicComponent
                        blok={blok}
                        key={uniqueId('sb')}
                    />
                );
            })}
        </div>
    </div>
);
 
export default Grid;