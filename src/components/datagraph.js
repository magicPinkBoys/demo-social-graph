import { useState } from "react";
import Papa from "papaparse"


export var nodes = [
    {id: 1, label: "Node 1", title: "node 1 tooltip text",
    shape: "box"},
    {id: 2, label: "Node 2", title: "node 2 tooltip text",
    shape: "circle"},
    {id: 3, label: "Node 3", title: "node 3 tooltip text",
    shape: "diamond"},
    {id: 4, label: "Node 4", title: "node 4 tooltip text",
    shape: "star"},
    // {id: 5, label: "Node 5", title: "node 5 tooltip text"},
    // {id: 6, label: "Node 6", title: "node 6 tooltip text"},
    // {id: 7, label: "Node 7", title: "node 7 tooltip text"},
    // {id: 8, label: "Node 8", title: "node 8 tooltip text"},
    // {id: 9, label: "Node 9", title: "node 9 tooltip text"}
];
export var edges = [
    // {from: 1, to: 1, smooth: {type: "curvedCW"}, arrows: {from: {enabled: true, type: "circle"}, to: {enabled: true, type: "circle"}}},
    // {from: 1, to: 7, arrows: {from: {enabled: true, type: "vee"}, to: {enabled: true, type: "vee"}}},
    // {from: 1, to: 3, arrows: {to: {enabled: true, type: "curve"}}},
    // {from: 6, to: 5, color: {highlight: "#fff", opacity: 0.2}},
    // {from: 6, to: 2},
    // {from: 7, to: 2},
    // {from: 6, to: 7},
    // {from: 6, to: 8},
    // {from: 7, to: 8},
    // {from: 8, to: 2},
    // {from: 3, to: 7},
    {from: 4, to: 3 },
    {from: 1, to: 2 },
    {from: 4, to: 2 }
];

// export function readDB () {
//     // const [data, setData] = useState([]);

//     const handleFileUpload = (e) => {
//         const file = e.target.file[0];
//         Papa.parse(file, {
//             header: true,
//             complete: (results) => {
//                 setData(results.data);
//             },
//         });
//     };

//     return(
//         <div className="readDB">
//             <input type="file" accept=".csv" onChange={handleFileUpload} />

//             {data.length ? () : null}
//         </div>
//     </div>);
// }

// export function readCsv () {
//     const fs = require('fs');
// const raw = fs.readFileSync('./data.csv', 'utf8');

// const data  = raw.split(/\r?\n/);

// console.log('result', data);

// }

const fs = require('fs')