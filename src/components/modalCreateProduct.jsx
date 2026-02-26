import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { axiosClient } from '../helpers/axiosClient';

function ModalCreateProduct() {
  const [ categories, setCategories ] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCreateProduct(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
  }
  
  async function getCategories(){
      try {
          const response = await axiosClient.get('/categories');
          console.log('EJECUTADO')
          setCategories(response.data.data);
      } catch (error) {
          
      }
  }
  useEffect(() => {
      getCategories();
  }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={(e) => handleCreateProduct(e)}>
                <label >Nombre:</label>
                <input type="text" name='name'/>
                <label >Precio:</label>
                <input type="number" name='price'/>
                <label >Stock:</label>
                <input type="number" name='stock'/>
                <select name="category">
                    <option disabled selected>Seleccionar Categoria</option>
                    {
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                      ))
                    }
                </select>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" type='submit' onClick={handleClose}>
                  Crear
                </Button>
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCreateProduct;