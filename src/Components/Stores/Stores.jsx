import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storesItems from "../data/storeitems.json"
import Cart2 from '../Cart2/Cart2'
const Stores = () => {
  return ( <>
  <h1>Store</h1>
  <br />
    <Row  style={{gap:"13px"}} >
        {storesItems.map((item) => (
            <Col key={item.id}>
                <Cart2 {...item}/>
            </Col>
            
        ))}
    </Row>
  </>
  );
}

export default Stores