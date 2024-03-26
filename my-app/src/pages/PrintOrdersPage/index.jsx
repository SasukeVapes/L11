import React, { useEffect, useState } from 'react';
import { Button, Container, Snackbar, Slide, Typography } from '@mui/material';
import CardContainer from '../../components/General/Cards/CardContainerGeneral';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const PrintOrdersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then(response => {
        console.log('Raw Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Parsed Data:', data);
        setCards(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleGoSomewhereClick = (card) => {
    setShowForm(true);
    setClickedCard(card);
  };

  const handleCloseClick = () => {
    setShowForm(false);
    setClickedCard(null);
  };

  const handleTokenClick = () => {
    navigator.clipboard.writeText(clickedCard?.customer.address).then(
      () => {
        alert('Address is copied to the clipboard!');
      },
      () => {
        console.error('Failed to copy');
      }
    );
  };

  const handlePlusButtonClick = () => {
    setShowForm(true);
  };
  const handleExportToExcel = () => {
    // Prepare data for export
    const data = [
        ['Price', 'Customer Name', 'Customer Address'],
        [clickedCard.product.price, clickedCard.customer.name, clickedCard.customer.address]
    ];

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Add data to the worksheet
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Export the workbook as an Excel file
    XLSX.writeFile(wb, 'orders.xlsx');
};
const handleExportToPDF = () => {
  // Prepare data for export
  const data = [
      ['Price', 'Customer Name', 'Customer Address'],
      [clickedCard.product.price, clickedCard.customer.name, clickedCard.customer.address]
  ];

  // Create a new PDF document
  const doc = new jsPDF();

  // Set document properties
  doc.setProperties({
      title: 'Order Details',
      subject: 'Order Information',
      author: 'Your Company Name'
  });

  // Add data to the PDF document
  doc.text('Order Details', 10, 10);
  doc.autoTable({ startY: 20, head: [['Price', 'Customer Name', 'Customer Address']], body: data });

  // Save the PDF file
  doc.save('order_details.pdf');
};
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCard = { ...newCardData };
    // Instead of updating the local state directly, send a POST request to the server
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
        // Assuming the server responds with success: true
        setCards([...cards, newCard]);
        setSnackbarOpen(true);
      })
      .catch(error => console.error('Error posting data:', error));

    setNewCardData({
      title: '',
      description: '',
      price: '',
      customerName: '',
      customerAddress: '',
      picture: '', // Add default value for picture
    });
    setShowForm(false);
  };

  const [newCardData, setNewCardData] = useState({
    title: '',
    description: '',
    price: '',
    customerName: '',
    customerAddress: '',
    picture: '', // Initialize picture state
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <Container>
      <div className="card text-bg-dark text-white border-0">
        <img
          src="/Book1.jpg"
          className="card-img"
          alt="Background"
          height="350px"
          style={{ objectFit: 'cover' }}
        />
        <div
          className="card-img-overlay d-flex flex-column justify-content-center"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="container">
            <Typography
              className="card-title display-3 fw-bolder mb-0 d-flex 
            justify-items-center align-items-center flex-column"
              variant="h5"
            >
              Leathered Parchment Manufacture
            </Typography>
            <Typography
              className="card-text lead fs-2 d-flex 
            justify-items-center align-items-center flex-column"
              variant="body1"
            >
              Since 1955
            </Typography>
          </div>
        </div>
      </div>
      <Typography className="d-flex justify-content-center mt-4 fw-bold" variant="h2">
        Orders
      </Typography>
      <CardContainer cards={cards} onGoSomewhereClick={handleGoSomewhereClick} />
      <div className="d-flex justify-content-center">
        <Button variant="contained" color="secondary" onClick={handlePlusButtonClick}>
          Plus
        </Button>
      </div>
      <div>
        {showForm && (
          <Slide direction="up" in={showForm}>
            <div className="form-container2">
              <form onSubmit={handleFormSubmit}>
                <Typography variant="h2">Add New Card</Typography>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={newCardData.title}
                    onChange={(e) => setNewCardData({ ...newCardData, title: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={newCardData.description}
                    onChange={(e) =>
                      setNewCardData({ ...newCardData, description: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={newCardData.price}
                    onChange={(e) => setNewCardData({ ...newCardData, price: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="customerName" className="form-label">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="customerName"
                    value={newCardData.customerName}
                    onChange={(e) =>
                      setNewCardData({ ...newCardData, customerName: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="customerAddress" className="form-label">
                    Customer Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="customerAddress"
                    value={newCardData.customerAddress}
                    onChange={(e) =>
                      setNewCardData({ ...newCardData, customerAddress: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="picture" className="form-label">
                    Picture
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="picture"
                    value={newCardData.picture}
                    onChange={(e) => setNewCardData({ ...newCardData, picture: e.target.value })}
                  />
                </div>
                <Button type="submit" variant="contained" color="primary">
                  Add Card
                </Button>
              </form>
            </div>
          </Slide>
        )}
      </div>
      <div>
        {showForm && clickedCard && (
          <div className="form-container">
            <div className="overlay"></div>
            <div className="container form-content">
              <Typography variant="h2">Client Info</Typography>
              <Typography variant="body1">Price: {clickedCard.product.price}</Typography>
              <Typography variant="body1">Customer Name: {clickedCard.customer.name}</Typography>
              <Typography variant="body1">Customer Address: {clickedCard.customer.address}</Typography>
              <Button
                className="btn btn-lg btn-danger downloadbtn"
                variant="contained"
                onClick={handleCloseClick}
              >
                Close
              </Button>
              <Button
                className="btn btn-lg btn-primary token"
                variant="contained"
                onClick={handleTokenClick}
              >
                Copy Address
              </Button>
              <Button
                className="btn btn-lg btn-success"
                variant="contained"
                onClick={handleExportToExcel}
            >
                Export to Excel
            </Button>
            <Button
              className="btn btn-lg btn-primary"
              variant="contained"
              onClick={handleExportToPDF}
          >
              Export to PDF
          </Button>
            </div>
          </div>
        )}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="New card added!"
      />
    </Container>
  );
};
