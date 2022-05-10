import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Grid, RadioGroup, Radio, TextField, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const CreateRoom = () => {

  const navigate = useNavigate()

  const [ votes, setVotes ] = useState(1)
  const [pause, setPause] = useState(true)

  const handleSubmit = () => {
    api
    .post('/create_room/', {guest_can_pause: pause, votes_to_skip: votes})
    .then((response) => navigate(`/room/${response.data.code}`))
    .catch((e)=> console.log(e))
  }

  return (
    
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component={"h4"} variant="h4">
          Create A Room
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">Guest Control of Playback State</div>
          </FormHelperText>
          <RadioGroup row defaultValue="true"
          onChange={(e)=> setPause(e.target.value)}
          >
            <FormControlLabel value={true} 
            control={<Radio color='primary'/>}
            label="Play/Pause"
            labelPlacement='bottom'
            />
            <FormControlLabel value={false} 
            control={<Radio color='secondary'/>}
            label="No Control"
            labelPlacement='bottom'
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl onChange={(e)=> setVotes(e.target.value)}>
          <TextField variant="standard" required={true} type="number" defaultValue={votes} 
          inputProps={{
            min: 1,
            style: { textAlign: "center"},
          }}/>
          <FormHelperText>
            <div align="center">
              Votes required to skip song.
            </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant='contained' onClick={()=> handleSubmit()}>Create A Room</Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant='outlined' to="/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  )
}

export default CreateRoom