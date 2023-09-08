import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { object, number, boolean } from "yup";

function ButtonChoice(props) {

    const configSchema = object({
        seats: number().required().integer().min(1),
        rounds: number().required().integer().min(1),
        qpRound: number().required().integer().min(1),
        quadPresent: boolean().required()
    })

    const navigate = useNavigate();

    async function parseConfig(text) {
        const config = JSON.parse(text);
        const isValid = await configSchema.isValid(config);
        if (!isValid) {
            alert('Invalid configuration file provided')
        }
        else {
            navigate('/layout', {state:config})
        }
    }

    const readFile = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = e.target.result;
            parseConfig(text);
        }
        if (e.target.files[0].type !== "application/json")
            alert('Invalid file uploaded');
        else
            reader.readAsText(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const VisuallyHiddenInput = styled('input')`
                    clip: rect(0 0 0 0);
                    clip-path: inset(50%);
                    height: 1px;
                    overflow: hidden;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    white-space: nowrap;
                    width: 1px;
                    `;
    return(
        <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            minHeight={"100vh"}>
            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Grid container direction={"column"} spacing={2} xs={6} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs>
                        <Button size="large" color="secondary" variant="contained" style={{width:300}} component="label">Upload configuration<VisuallyHiddenInput type="file" onChange={(e) => readFile(e)}/></Button>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body1" gutterBottom>
                            Choose this if you have a preset configuration file to upload.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction={"column"} spacing={2} xs={6} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs>
                        <Button size="large" color="primary" variant="contained" style={{width:300}} component={Link} to="/config">Create configuration</Button>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body1" gutterBottom>
                            Choose this if you do not have a present configuration file to upload.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export {ButtonChoice}