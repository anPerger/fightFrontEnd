
export default function DisplayStats(props) {
   
    let elems = Object.entries(props.TopResult).map(([key, value]) => (
    <li>{key}: {value}</li>
    ));
    // console.log(elems)
    return (
        <div>
            {elems}
        </div>
    )
}

