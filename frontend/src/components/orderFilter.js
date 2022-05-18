import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { useHistory } from 'react-router-dom'

function OrderFilter() {
    const [keyword1, setKeyword1] = useState('')

    let history = useHistory()
    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword1) {
            history.push(`/?keyword1=${keyword1}`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
   
    return (<div>
        
        
        <Form onClick={submitHandler} className='input-group mb-3'>
            
            <DropdownItem 
            className='paid' onClick={(e)=>setKeyword1(1)}>Paid</DropdownItem>
            <DropdownItem
            className='not paid'onClick={(e)=>setKeyword1(0)}>not Paid</DropdownItem>
        </Form>    
            </div>
        
    )
}

export default OrderFilter
