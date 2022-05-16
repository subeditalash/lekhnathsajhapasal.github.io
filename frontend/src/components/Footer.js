import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container bg="light" variant="light" expand="lg">
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Saja Pasal</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
