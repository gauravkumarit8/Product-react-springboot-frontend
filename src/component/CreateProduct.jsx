import { useEffect, useState } from "react";

const URL = `http://localhost:8080/api/product`;

export default function CreateProduct() {
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');


  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price,
          quantity,
        }),
      });
      const data = await response.json();
      setTitle('');
      setPrice('');
      setQuantity('');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL,{

      });
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchData();
  }, []);

  const handleEdit = (product) => {
    setTitle(product.title);
    setPrice(product.price);
    setQuantity(product.quantity);
  };

  return (
    <>
      <div>
        <ul>
          {product.map((list, index) => (
            <li key={index} onClick={() => handleEdit(product)}>
                <a href={`${URL}/${list.id}`}>{list.title}</a> | {list.price} | {list.quantity} | 
                <button type="submit" onClick={handleEdit} >Edit</button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={submit}>
        <div className="cont">
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
            cols={40}
            rows={1}
          ></textarea>
          <br></br>
          <textarea
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter the Price"
            cols={40}
            rows={1}
          ></textarea>
          <br></br>
          <textarea
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter the Quantity"
            cols={40}
            rows={1}
          ></textarea>
          <br></br>

          <button type="submit">Submit</button>
        </div>
      </form>

     
    </>
  );
}
