import Table from "react-bootstrap/esm/Table"
import cart from "../image/basoc.webp";
import Image from "react-bootstrap/esm/Image";

export const Product = (props) => {
    const { show, handlecole } = props;

    return (
        <>
            <Table variant="secondary"
                className="cart w-25"
                hidden={show}

            >

                <thead >
                    <tr>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th> SL</th>
                        <th>Action  <button type="button" onClick={handlecole} class="btn-close btn-close-white" aria-label="Close"></button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Image src={cart} fluid className='roundeds' /></td>
                        <td><span>100.000</span></td>
                        <td>1</td>
                        <td><button className=" btn bg-danger bg-gradient" type="">Delete</button></td>
                    </tr>
                    <tr>
                        <td><Image src={cart} fluid className='roundeds' /></td>
                        <td><span>100.000</span></td>
                        <td>1</td>
                        <td><button className=" btn bg-danger bg-gradient" type="">Delete</button></td>
                    </tr>
                    <tr>
                        <td><Image src={cart} fluid className='roundeds' /></td>
                        <td><span>100.000</span></td>
                        <td>1</td>
                        <td><button className=" btn bg-danger bg-gradient" type="">Delete</button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}