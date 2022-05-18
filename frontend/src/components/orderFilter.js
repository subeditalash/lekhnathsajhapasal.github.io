import React, { useState } from 'react'
import { Button, Form, Row, Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function OrderFilter() {
    const [value, setvalue] = useState('')

    let history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault()
        if (value) {
            history.push(`/?value=${value}`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
   
    return (<div>
        <Dropdown onClick={submitHandler}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select paid
            </Dropdown.Toggle>

            <Dropdown.Menu  >
                <Dropdown.Item
                  onClick={(e)=>setvalue(1)}>Paid</Dropdown.Item>
                <Dropdown.Item
                    onClick={(e)=>setvalue(0)}>not Paid</Dropdown.Item>
                
            </Dropdown.Menu>
        </Dropdown>
        
        
         
            </div>
        
    )
}

export default OrderFilter
