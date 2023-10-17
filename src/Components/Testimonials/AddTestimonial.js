import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AddTestimonial() {
    const [open, setOpen] = React.useState(false);


    // Variables for form
    const initialValues = {
        text: '',
        clientName: '',
        title: '',
        city: ''
      }
    
    const validationSchema = Yup.object().shape({
        text: Yup.string().required("Testimonial text must not be empty."),
        clientName: Yup.string().required("Client Name must not be empty."),
        title: Yup.string().required("Client title (Buyer/Seller) must not be empty."),
        city: Yup.string().required("City must not be empty."),
    });

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    // Add Submit function so when admin presses post the testimonial gets added to the page and database
    const onSubmit = (data) => {
        alert(data.text);
        handleClose();
    }


    return (
      <div id='add-testimonial'>
        <Button id='add-testim-btn' variant="outlined" onClick={handleClickOpen}>
          Add Testimonial
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Testimonial</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new testimonial, please fill out the information below. 
            </DialogContentText>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='post-form'>
                    <label className='testim-form-label'> Client Name </label>
                    <Field id='inputCreatePost' className='testim-form-field' name='clientName' placeholder="Client Name" autoComplete="off"/>
                    <ErrorMessage name='clientName' component='span'/>

                    <label className='testim-form-label'> Client Title (Home Buyer / Home Seller) </label>
                    <Field id='inputCreatePost' className='testim-form-field' name='title' placeholder="Home Buyer or Home Seller" autoComplete="off"/>
                    <ErrorMessage name='title' component='span'/>
                    
                    <label className='testim-form-label'>Where does this client live? </label>
                    <Field id='inputCreatePost' className='testim-form-field' name='city' placeholder="Enter city/state" autoComplete="off"/>
                    <ErrorMessage name='city' component='span'/>

                    <label className='testim-form-label'>Enter testimonial: </label>
                    <Field as='textarea' id='inputCreatePost' className='testim-form-field message-label' name='text' placeholder="Testimonial Message" autoComplete="off"/>
                    <ErrorMessage name='text' component='span'/>

                    <DialogActions id='add-testim-btns'>
                        <Button id='cancel-testim-btn'onClick={handleClose}>Cancel</Button>
                        <Button type='submit' id='post-testim-btn'>Post</Button>
                    </DialogActions>
                </Form>
            </Formik>
          </DialogContent>
        
        </Dialog>
      </div>
    );
  }