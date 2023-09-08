import { FixedSizeList } from "react-window";
import { QuadListItem } from "../QuadListItem/QuadListItem";

function QuadList(props) {
    const generateID= () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }

    const numQuads = props.numQuads;
    const quadArray = [];
    for (var i = 0; i < numQuads; ++i) {
        var id = generateID();
        quadArray.push({slno: i, name:'', nonAscending:false, id: id});
    }

    return (
           quadArray.map((elem,index) => {
            <QuadListItem key={elem.id} slno={elem.slno + 1}/>
        })       
    );
}
export {QuadList}