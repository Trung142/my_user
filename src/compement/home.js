import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import basoc from '../image/basoc.webp';
import nike from '../image/nike.jpg';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Moddal } from './Model';
const Home = (props) => {
    const [add, setadd] = useState(0);
    const [show, setshow] = useState(false);
    const handleMode = () => {
        setshow(true);
    }
    const handlecole = () => {
        setshow(false);
    }
    let count = add;
    const render = (count) => {
        setadd(count)
    }

    const handleadd = () => {
        count++;
        render(count);
    }
    const handle = () => {
        count--;
        render(count);
    }
    return (
        <>
            <main className='mb-3'>
                <Container className='mb-3'>
                    <Row className='mb-3'>
                        <Col className='col-sm-5 col-12'>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <Image src={basoc} fluid
                                        className='rounded'
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <Image src={basoc} fluid
                                        className='rounded'
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={basoc} fluid
                                        className='rounded'
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col>
                            <h2>Giày đá bóng Wika 3 sọc CT3 màu đỏ</h2>
                            <p className='d-flex flex-column pt-3'>
                                <span><b>– Chất liệu:</b> công nghệ da nhăn mới (PU), chống bám bẩn</span>
                                <span><b>– Màu sắc:</b> màu đỏ</span>
                                <span><b>– Bảo hành:</b> 30 ngày</span>
                                <span><b>– Vận chuyển:</b> Giá chưa gồm phí ship</span>
                                <span><b>– Thiết kế:</b> Đế giày đinh răm TF, khâu đế 100%</span>
                            </p>
                            <Button variant="outline-danger">MUA NGAY</Button>
                            <Row className='mt-3 text-center'>
                                <Col className='col-4'><span><b>Kích thước </b></span></Col>
                                <Col>
                                    <Form.Select aria-label="Default select example">
                                        <option>Tự động chọn size </option>
                                        <option value="1">Size: 39</option>
                                        <option value="2">Size: 40</option>
                                        <option value="3">Size: 41</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <div className='row mt-3'>
                                <div className='text-center col-5 '>
                                    <span className='add' onClick={() => handle()}><i class="fa-solid fa-minus"></i></span>
                                    <button className='border'>{add}</button>
                                    <span className='add' onClick={() => handleadd()}><i class="fa-solid fa-plus"></i></span>
                                </div>
                                <button className='col btn btn-danger pr-3' variant="outline-danger">Thêm vào giỏ hàng</button>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <div className="container-fluid mt-3 border border-danger">
                            <div className='row p-3'>
                                <div className='col '>
                                    <Image src={nike} fluid />
                                    <span>Nike</span>
                                    <button type="summit" className='mt-3 btn btn-danger ' variant="outline-danger" >Thêm vào giỏ</button>
                                </div>
                                <div className='col'>
                                    <Image src={nike} alt="" fluid />
                                    <span>Nike</span>
                                    <button type="summit" className='mt-3 btn btn-danger ' variant="outline-danger">Thêm vào giỏ</button>
                                </div>
                                <div className='col'>
                                    <Image src={nike} alt="" fluid />
                                    <span>Nike</span>
                                    <button type="summit" className='mt-3 btn btn-danger ' variant="outline-danger">Thêm vào giỏ</button>
                                </div>
                                <div className='col'>
                                    <Image src={nike} alt="" fluid />
                                    <span>Nike</span>
                                    <button type="summit" className='mt-3 btn btn-danger ' variant="outline-danger">Thêm vào giỏ</button>
                                </div>
                                <div className='col'>
                                    <Image src={nike} alt="" fluid />
                                    <span>Nike</span>
                                    <button type="summit" className='mt-3 btn btn-danger ' variant="outline-danger">Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='mt-3 text-center'>
                            <h1><b>SẢN PHẨM MỚI </b></h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='container-fluid mt-3'>
                            <Image src={nike} fluid />
                        </div>
                    </Row>
                    <Row>
                        <div className=" product d-flex flex-column flex-sm-row">
                            <Card className="mt-3" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={basoc} />
                                <Card.Body>
                                    <Card.Title>basoc Wika</Card.Title>
                                    <Card.Text>
                                        Giầy đá bóng basoc wika
                                    </Card.Text>
                                    <Button onClick={handleMode} variant="outline-danger">MUA NGAY</Button>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 " style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={basoc} />
                                <Card.Body>
                                    <Card.Title>basoc Wika</Card.Title>
                                    <Card.Text>
                                        Giày đá bóng basoc wika
                                    </Card.Text>
                                    <Button onClick={handleMode} variant="outline-danger">MUA NGAY</Button>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 " style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={basoc} />
                                <Card.Body>
                                    <Card.Title>basoc Wika</Card.Title>
                                    <Card.Text>
                                        Giày đá bóng basoc Wika
                                    </Card.Text>
                                    <Button onClick={handleMode} variant="outline-danger">MUA NGAY</Button>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 " style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={basoc} />
                                <Card.Body>
                                    <Card.Title>basoc Wika</Card.Title>
                                    <Card.Text>
                                        Giày đá bóng basoc Wika
                                    </Card.Text>
                                    <Button onClick={handleMode} variant="outline-danger">MUA NGAY</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </main>
            <Container className='footer'>
                <Row >
                    <div className=' text-center'>
                        copyscrip 2023
                    </div>
                </Row>
            </Container>
            <Moddal
                show={show}
                handlecole={handlecole}

            />
        </>
    )
}
export default Home;