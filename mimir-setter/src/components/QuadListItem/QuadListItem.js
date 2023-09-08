import { Paper, TextField, Typography, Grid, FormControlLabel, Switch } from "@mui/material";

function QuadListItem(props) {
    return (
        <Paper style={{display:'inline-block'}}>
            <Grid container spacing={5}>
                <Grid item xs={'auto'}>
                    <FormControlLabel control={<TextField style={{paddingLeft:"20px"}}/>} label={<Typography style={{minWidth:30}} align="center">{props.slno}</Typography>} style={{height:56,  minWidth:30}} labelPlacement="start"/>
                </Grid>
                <Grid item xs={'auto'}>
                <FormControlLabel control={<Switch onChange={null} checked={false}/>} label="Non ascending quad" style={{height:56}}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export {QuadListItem};