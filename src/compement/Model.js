import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/esm/Image';
import Table from 'react-bootstrap/esm/Table';
import basoc from '../image/basoc.webp';
import { useState } from 'react';

export const Moddal = (props) => {
    const { show, handlecole } = props;
    const [total, settotal] = useState(0);
    const [totals, settotals] = useState({

    });
    const handleTotal = (event) => {
        settotals(event.targetr.innerText)

    }
    console.log(totals)

    // add
    let count = total;
    const handle = () => {
        count++;
        render(count);
    }
    const handles = () => {
        count--;
        render(count);
    }
    const render = (count) => {
        settotal(count);
    }
    const handleModal = () => {

    }
    //total
    return (
        <>
            <Modal
                show={show}
                onHide={handlecole}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton>
                    <Modal.Title>Sản Phẩm</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>SL</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Image src={basoc} className='img' />
                                </td>
                                <td><span><b onClick={(event) => handleTotal(event)}>{300.000}</b></span></td>
                                <td>
                                    <button className='btn'>
                                        {total}
                                        <span className='caret'>
                                            <i onClick={handle} className="fa-solid fa-caret-up"></i>
                                            <i onClick={() => handles()} className="fa-solid fa-caret-down"></i>
                                        </span>

                                    </button>
                                </td>
                                <td><button className='btn btn-secondary' type="">Edit</button></td>
                            </tr>
                        </tbody>

                    </Table>

                    <div>
                        <b>Total:</b>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handlecole} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleModal()} >
                        Mua Ngay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}