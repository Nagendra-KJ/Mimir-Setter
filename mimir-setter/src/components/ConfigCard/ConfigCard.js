import { Box, Card, CardContent, Typography} from "@mui/material";
import { useLocation } from "react-router-dom";

const cardStyle = {
    backgroundColor: 'transparent',
    borderColor:'transparent',
    outerHeight:'200'
}


function ConfigCard(props) {

    const location = useLocation();
    console.log(location);

    return (
        <Box sx={{maxWidth:200}}>
            <Card variant="outlined" style={cardStyle}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 28, opacity:1 }} color="text.primary" align="center" gutterBottom variant="h1">
                        {"I am here"}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
        </Box>
    );
}



export {ConfigCard}