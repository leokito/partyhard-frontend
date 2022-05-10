import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

const Room = () => {

    const [isHost, setIsHost] = useState(false)
    const [votesToSkip, setVotesToSkip] = useState(1)
    const [guestCanPause, setGuestCanPause] = useState(false)

    const {roomCode} = useParams()

    useEffect(() => {
        console.log(roomCode)
        api
        .get(`/get_room/?code=${roomCode}`)
        .then((response)=> {
            setIsHost(response.data.is_host)
            setVotesToSkip(response.data.votes_to_skip)
            setGuestCanPause(response.data.guest_can_pause)
            console.log(response)
        })
    },[])

  return (
    <>
    <h3>{roomCode}</h3>
    <div>Host: {isHost.toString()}</div>
    <div>Votes: {votesToSkip}</div>
    <div>Guest: {guestCanPause.toString()}</div>
    </>
  )
}

export default Room