import React from 'react'
import { Card } from 'react-bootstrap'

export default function StatsCard({data}) {
  return (
    <Card className='stats-card me-2 mb-2'>
        <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text className='mb-1'>{data.amount}</Card.Text>
            <Card.Subtitle>{data.type}</Card.Subtitle>
        </Card.Body>
    </Card>
  )
}
