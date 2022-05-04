import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Product = ({product}) => {
    const navigate=useNavigate()
    const { _id, picture, name, description, price, quantity, supplierName } = product;

    const handleUpdate = id => {
       const url=`http://localhost:5000/inventory/${id}`
       fetch(url)
       .then(res=> res.json())
       .then(data => console.log(data))
       navigate(`/inventory/${id}`)
    }
    return (
        <div className='border p-3 m-3 rounded'>
            <img style={{height:"250px"}} src={picture} className='img-fluid' alt='product imgage' />
            <h4>Name: {name}</h4>
            <h4>Type: {description}</h4>
            <h4>Price: {price} taka</h4>
            <h4>Quantity: {quantity} pc </h4>
            <h4>SupplierName: {supplierName}</h4>
            <Button onClick={() => handleUpdate(_id)}>Update</Button>
        </div>
    );
};

export default Product;