import { Box, Card, CardContent, Typography} from "@mui/material";
import {InputField}  from "../InputField/InputField";

const cardStyle = {
    backgroundColor: 'transparent',
    borderColor:'transparent',
    outerHeight:'200'
}


function ConfigCard(props) {
    return (
        <Box sx={{maxWidth:200}}>
            <Card variant="outlined" raised="true" style={cardStyle}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 28, opacity:1 }} color="text.primary" align="center" gutterBottom variant="h1">
                        {props.title}
                    </Typography>
                    <InputField disableInput={props.disableInput} textValue={props.value}/>
                    </CardContent>
                </div>
            </Card>
        </Box>
    );
}



export {ConfigCard}