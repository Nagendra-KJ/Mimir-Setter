import { Checkbox, FormControlLabel, Box, Grid } from '@mui/material';
import { ConfigCard } from '../ConfigCard/ConfigCard';

function ConfigInput(props) {
    return(
        <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            columnSpacing={1}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                <ConfigCard title={"Number of Seats"}/>
                <ConfigCard title={"Number of Rounds"}/>
                <ConfigCard title={"Questions per Round"}/>
                <ConfigCard title={"Total Questions"} value={60} disableInput={true}/>
                <ConfigCard title={"Number of Quads"} value={15} disableInput={true}/>
            </Box>
            <FormControlLabel control={
                    <Checkbox defaultChecked/>
                }
                label={"My Set Has Quads"}/>
        </Grid>
    );
}
export {ConfigInput};