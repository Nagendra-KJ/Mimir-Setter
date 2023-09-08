import { Box, Card, CardContent, Typography} from "@mui/material";
import { useLocation } from "react-router-dom";
import { QuadListItem } from "../QuadListItem/QuadListItem";
import { QuadList } from "../QuadList/QuadList";

const cardStyle = {
    backgroundColor: 'transparent',
    borderColor:'transparent',
    outerHeight:'200'
}


function ConfigCard(props) {

    const location = useLocation();
    console.log(location);

    return (
        <QuadList numQuads={(location.state.seats * location.state.rounds * location.state.qpRound)/4}/>
    );
}



export {ConfigCard}