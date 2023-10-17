import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AddBlog() {
    const [open, setOpen] = React.useState(false);


    // Variables for form
    const initialValues = {
        title: '',
        image: '',
        body: '',
      }
    
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title must not be empty."),
        image: Yup.string().required("You must select an image."),
        body: Yup.string().required("Blog text must not be empty."),
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
      <div id='add-blog'>
        <Button id='add-blog-btn' variant="outlined" onClick={handleClickOpen}>
          Add New Blog Post
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id='add-blog-title'>New Blog Post </DialogTitle>
          <DialogContent>
            <DialogContentText>
                Fill out the information below: 
            </DialogContentText>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='post-form'>
                    <label className='testim-form-label'> Title </label>
                    <Field id='inputCreatePost' className='testim-form-field' name='title' placeholder="Title" autoComplete="off"/>
                    <ErrorMessage name='title' component='span'/>

                    <label className='testim-form-label'> Image: </label>
                    {/* <Field id='inputCreatePost' className='testim-form-field' name='image' placeholder="Image" autoComplete="off"/>
                    <ErrorMessage name='image' component='span'/> */}
                    {/* https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik */}
                    <input 
                        className='blog-file' 
                        id="file" 
                        name="file" 
                        type="file"
                        accept='image/*'
                    />
                    
                    <label className='testim-form-label'>Blog Text:  </label>
                    <Field as='textarea' id='inputCreatePost' className='testim-form-field message-label' name='body' placeholder="Enter Your Blog Text" autoComplete="off"/>
                    <ErrorMessage name='body' component='span'/>

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