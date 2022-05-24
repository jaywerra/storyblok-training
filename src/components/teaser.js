import * as React from "react";
 
const Teaser = ({ blok }) => (
    <div className="teaser">
        <div className="px-4 lg:px-0 lg:container lg:mx-auto py-10">
            <h2>{blok.headline}</h2>
        </div>
    </div>
)
 
export default Teaser;