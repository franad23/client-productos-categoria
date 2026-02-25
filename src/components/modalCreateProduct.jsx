import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreateProduct() {
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
                    <option value="ID">CAT 1</option>
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