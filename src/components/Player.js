import React from 'react'
import Card from 'react-bootstrap/Card'

const Player = ({name,team,nationality, jerseyNumber, age , imageUrl}) => {
    const imagestyle={
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px'
  
    }
  return (
    <div>
         <Card style={{ height: '100%', borderRadius: '3px'}}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imagestyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'Unknown',
    jerseyNumber: 'N/A',
    age: 'N/A',
    imageUrl: 'https://ih1.redbubble.net/image.5265707378.9716/ssrco,baseball_cap,product,FFFFFF:97ab1c12de,front,square,600x600-bg,f8f8f8.jpg' 
  };

export default Player