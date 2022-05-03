import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Product = ({product}) => {
    const { _id, name, description, price, quantity, supplierName } = product;
    const navigate= useNavigate();

  
    const handleUpdate = (id, product) => {
        navigate('/inventory/')
    }
    return (
        <div className='border p-3 m-3 rounded'>
            <h4>Name: {name}</h4>
            <h4>Type: {description}</h4>
            <h4>Price: {price} taka</h4>
            <h4>Quantity: {quantity} pc </h4>
            <h4>SupplierName: {supplierName}</h4>
            <Button onClick={() => handleUpdate(_id, product)}>Update Product</Button>
        </div>
    );
};

export default Product;