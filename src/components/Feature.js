import * as React from "react";
 
const Feature = ({ blok }) => (
    <div className="feature rounded border-blue-500 border-opacity-100 border p-8">
        <h2 className="font-bold text-xl mb-2">
            {blok.name}
        </h2>
        <div>
           Body: {blok.body}
        </div>
    </div>
)
 
export default Feature;