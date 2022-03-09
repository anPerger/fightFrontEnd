import React, {useState} from 'react';
import Plot from 'plotly.js';

export default function ScatterPlot(props) {

    console.log(props.TopResult)
    console.log(props.AllStats)
    // console.log(typeof(props.AllStats))

    let first = props.AllStats[0];
    let firstCopy = Object.assign({}, first);
    delete firstCopy["Name"]
    delete firstCopy["Full Name"]
    delete firstCopy["First Name"]
    delete firstCopy["Last Name"]
    delete firstCopy["Nickname"]
    delete firstCopy["Stance"]
    delete firstCopy["Weight Class"]
    // console.log(firstCopy)
    let keys = Object.keys(firstCopy);
    // console.log(keys)

    let [XAxis, setXAxis] = useState("Select X Axis")
    let [YAxis, setYAxis] = useState("Select Y Axis")


    let handleXChange = (x) => {
        setXAxis(x.target.value)
        // console.log(x.target.value)
      }

    let handleYChange = (y) => {
        setYAxis(y.target.value)
        // console.log(y.target.value)
      }
    
    // let allX = Object.entries(props.AllStats.XAxis);
    // let allY = Object.entries(props.AllStats.YAxis);

    // let allX = props.AllStats.map(a => a[XAxis]);
    // let allY = props.AllStats.map(a => a[YAxis]);
    // let names = props.AllStats.map(a => a["Name"]);
    // console.log(typeof(allX))
    // console.log(allY)
    // let selX = props.TopResult[`${XAxis}`];
    // // console.log(selX)
    // let selY = props.TopResult[`${YAxis}`];
    // // console.log(selY)
    // let selName = props.TopResult["Name"];
    // console.log(selName)
//     let data =[
//         {
//         mode: "markers",
//         type: "scatter",
//         x: [allX],
//         y: [allY],
//         text: names,
//         hovermode: "closest",
//         hovertemplate:  "<b>%{text}</b><br><br>" +
//         "%{yaxis.title.text}: %{y:,.0f}<br>" +
//         "%{xaxis.title.text}: %{x:.}<br>" +
//         "<extra></extra>"
        
//     },
//     {
//         mode: "marker",
//         type: "scatter",
//         x: [selX],
//         y: [selY],
//         text: [selName],
//         marker:{color:"rgba(200, 50, 100, .7)", size:16},
//         hovermode: "closest",
//         hovertemplate:  "<b>%{text}</b><br><br>" +
//         "%{yaxis.title.text}: %{y:,.0f}<br>" +
//         "%{xaxis.title.text}: %{x:.}<br>" +
//         "<extra></extra>"
        
//     }
// ]

//     let layout = {
//         title: "All fighters",
//         hovermode: "closest",
//         showlegend: false,
//         height: 600,
//         width: 600,
//         xaxis: {
//             title: {
//             text: `${XAxis}`,
//             font: {
//                 family: "Courier New, monospace",
//                 size: 18,
//                 color: "#7f7f7f"
//             }
//             },
//         },
//         yaxis: {
//             title: {
//             text: `${YAxis}`,
//             font: {
//                 family: 'Courier New, monospace',
//                 size: 18,
//                 color: '#7f7f7f'
//             }
//             }
//         }
//         };
        
//     Plotly.newPlot('scatter', data, layout);



    return (
            <div>
              <h5>Select X Axis:
                <select onChange={handleXChange}>
                    <option value="Select X Axis">Select X Axis</option>
                    {keys.map((key) => <option value={key.value}>{key.value}</option>)}
                </select>
              </h5>
              <h5>Select Y Axis:
              <select onChange={handleYChange}>
                    <option value="Select Y Axis">Select Y Axis</option>
                    {keys.map((key) => <option value={key.value}>{key.value}</option>)}
                </select>
              </h5>
              <div id="scatter" className="scatter">
               {/* <Plot data={data} layout={layout} /> */}
            
{/*            
                //         mode: "markers",
                //         type: "scatter",
                //         x: [allX],
                //         y: [allY],
                //         text: names,
                //         hovermode: "closest",
                //         hovertemplate:  "<b>%{text}</b><br><br>" +
                //         "%{yaxis.title.text}: %{y:,.0f}<br>" +
                //         "%{xaxis.title.text}: %{x:.}<br>" +
                //         "<extra></extra>"
                        
                //     },
                //     {
                //         mode: "marker",
                //         type: "scatter",
                //         x: [selX],
                //         y: [selY],
                //         text: [selName],
                //         marker:{color:"rgba(200, 50, 100, .7)", size:16},
                //         hovermode: "closest",
                //         hovertemplate:  "<b>%{text}</b><br><br>" +
                //         "%{yaxis.title.text}: %{y:,.0f}<br>" +
                //         "%{xaxis.title.text}: %{x:.}<br>" +
                //         "<extra></extra>"
                //     }]}

                // layout={{
                //     title: "All fighters",
                //     hovermode: "closest",
                //     showlegend: false,
                //     height: 600,
                //     width: 600,
                //     xaxis: {
                //         title: {
                //         text: `${XAxis}`,
                //         font: {
                //             family: "Courier New, monospace",
                //             size: 18,
                //             color: "#7f7f7f"
                //         }
                //         },
                //     },
                //     yaxis: {
                //         title: {
                //         text: `${YAxis}`,
                //         font: {
                //             family: 'Courier New, monospace',
                //             size: 18,
                //             color: '#7f7f7f'
                //         }
                //         }
                //     }
                //     }} />
                 */}
            </div>
            </div>
        )
}
    