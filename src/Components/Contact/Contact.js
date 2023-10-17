import React from 'react';
import './Contact.scss';

// import pfp from '../../Images/defaultpfp.jpg';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Contact() {

  // const myName = 'Nathaniel Lester';
  // const myLicense = '0000000'
  // const myEmail = 'youremail@gmail.com';
  // const myPhone = '123-456-7890';

  const phoneRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name must not be empty."),
    email: Yup.string().email('Please enter valid email.').required("Email must not be empty."),
    phone: Yup.string().matches(phoneRegEx, 'Phone number must be in correct format (Ex. 000-000-0000).').required('Phone Number must not be empty.'),
    message: Yup.string().required("Message must not be empty."),
  });
  
  const onSubmit = (data) => {
    alert(data.name);
  }

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip disableFocusListener {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));


  return (
    <div id='contact'>
      <div className='page-header'>
        <p>Contact Nathaniel</p>
      </div>
      {/* <div className='contact-left'>
        <div className='pfp-img'>
          <img src={pfp} alt='profile-img'/>
        </div>

        <div className='contact-info'>
          <h4>
            <PersonIcon/>
            {myName} | Realtor | License #{myLicense}
          </h4>
          <h4>
            <EmailIcon/>
            {myEmail}
          </h4>
          <h4>
            <LocalPhoneIcon/>
            {myPhone}
          </h4>
        </div>
      </div> */}
      <div className='contact-right'>
        <div className='contact-box-title'>
          <h1 className=''>Let’s Get In Touch!</h1>
          <BootstrapTooltip placement='bottom' title='Contact me if you have any question.'>
            <HelpIcon/>
          </BootstrapTooltip>
        </div>
        <hr/>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='post-form'>
                {/* <label> Name * </label> */}
                <Field id='inputCreatePost' name='name' placeholder="Full Name" autoComplete="off"/>
                <ErrorMessage name='name' component='span'/>

                {/* <label> Email * </label> */}
                <Field id='inputCreatePost' name='email' placeholder="Email" autoComplete="off"/>
                <ErrorMessage name='email' component='span'/>
                
                {/* <label>Phone Number* </label> */}
                <Field id='inputCreatePost' name='phone' placeholder="Phone" autoComplete="off"/>
                <ErrorMessage name='phone' component='span'/>

                {/* <label>Phone Number* </label> */}
                <Field as='textarea' id='inputCreatePost' className='message-label' name='message' placeholder="Question or Message" autoComplete="off"/>
                <ErrorMessage name='message' component='span'/>

                <Button type='submit'> Submit </Button>
            </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Contact;