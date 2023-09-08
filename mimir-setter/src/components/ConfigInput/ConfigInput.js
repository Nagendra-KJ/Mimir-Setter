import { Switch, FormControlLabel, Box, Grid, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfigInput(props) {

    const [seats, setSeats] = useState(4);
    const [rounds, setRounds] = useState(5);
    const [qpRound, setQPRound] = useState(3);
    const [errSeats, setErrSeats] = useState(false);
    const [errRounds, setErrRounds] = useState(false);
    const [errQPRound, setErrQPRound] = useState(false);
    const [quadPresent, setQuadPresent] = useState(true);
    
    const isNum = (str) => /^[0-9\b]+$/.test(str) || str === '';

    const navigate = useNavigate();

    const onSeatsChange = (e) => {
        const {value} = e.target;
        if (isNum(value)) {
            setSeats(value);
        }

    }

    const onRoundsChange = (e) => {
        const {value} = e.target;
        if (isNum(value)) {
            setRounds(value);
        }

    }

    const onQPRoundChange = (e) => {
        const {value} = e.target;
        if (isNum(value)) {
            setQPRound(value);
        }

    }

    const validateForm = () => {
        if (seats === '' || rounds === '' || qpRound === '') {
            if (seats === '')
                setErrSeats(true);
            else
                setErrSeats(false);
            if (rounds === '')
                setErrRounds(true);
            else
                setErrRounds(false);
            if (qpRound === '')
                setErrQPRound(true);
            else
                setErrQPRound(false);
        }
        else {
            setErrSeats(false);
            setErrRounds(false);
            setErrQPRound(false);
            navigate('/layout', {state:{seats, rounds, qpRound, quadPresent}})
        }

    }

    const onQuadPresentChange = (e) => {
        const val = e.target.checked;
        setQuadPresent(val);
    }

    return(
        <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"100vh"}>
            <Grid container direction={"column"} spacing={2} alignItems="center" justifyContent={"center"}>
                <Grid item>
                    <TextField label="Number of Rounds" inputProps={{inputMode: 'numeric', pattern: '[0-9]', style: {textAlign: 'center'}}}
                                    value={rounds} onChange={onRoundsChange} error={errRounds} style={{width:375}}
                                    helperText={errRounds ? "Please enter the number of rounds" : ""}/>
                </Grid>
                <Grid item>
                    <TextField label="Number of Seats" inputProps={{inputMode: 'numeric', pattern: '[0-9]', style: {textAlign: 'center'}}}
                                value={seats} onChange={onSeatsChange} error={errSeats} style={{width:375}}
                                helperText={errSeats ? "Please enter the number of seats" : ""}/>
                </Grid>
                <Grid item>
                    <TextField label="Number of Questions Per Round Per Seat" inputProps={{inputMode: 'numeric', pattern: '[0-9]', style: {textAlign: 'center'}}}
                                value={qpRound} onChange={onQPRoundChange} error={errQPRound} style={{width:375}}
                                helperText={errQPRound ? "Please enter the number of questions per round per seat" : ""}/>
                </Grid>
                <Grid item>
                    <FormControlLabel control={<Switch onChange={onQuadPresentChange} checked={quadPresent}/>} label="All my questions fit nicely into quads" />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success" size="large" onClick={validateForm}>Save And Continue</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
export {ConfigInput};