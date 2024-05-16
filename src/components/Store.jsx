import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from "../data/storeItem.json"
import StoreItem from "./StoreItem"
import { Container } from 'react-bootstrap'

function Store() {
  return (
    <>
    <Container>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
      {storeItems.map((item)=> (
        <Col key={item.id}>
          <StoreItem {...item}/>
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default Store