import React, { useState, useEffect } from 'react';
import { Link as RouterLink, Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Grid,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Page from '../HomePage/index';
import Axios from 'axios';
import api from '../../api';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default function SignUp() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUp = async () => {
    try {
      const data = await api.account.signUp({
        username: username,
        password: password,
        email: email,
        firstname: firstName,
        lastname: lastName,
      });
      console.log('signup', data.data.status);
      if (data.data.status === 200) {
        await setIsSignUp(true);
        alert('Tao moi thanh cong !');
        window.location = '/sign-in';
      }
    } catch (err) {
      console.log(err);
    }
  };
  // deep
  // shallow
  const checkExists = (values) => {
    if (values) {
      return false;
    } else {
      return true;
    }
  };
  const classes = useStyles();

  return (
    <Grid
      style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
      container
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              username: '',
              policy: false,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              firstName: Yup.string()
                .max(255)
                .required('First name is required'),
              lastName: Yup.string().max(255).required('Last name is required'),
              username: Yup.string().max(255).required('Username is required'),
              password: Yup.string().max(255).required('password is required'),
              policy: Yup.boolean().oneOf([true], 'This field must be checked'),
            })}
            onSubmit={() => {
              console.log('isSubmit');
            }}
          >
            {({
              errors,
              handleSubmit,
              handleChange,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                    color="textPrimary"
                    variant="h4"
                  >
                    Create new account
                  </Typography>
                </Box>
                <TextField
                  error={checkExists(firstName) && errors.firstName}
                  fullWidth
                  helperText={checkExists(firstName) && errors.firstName}
                  label="First name"
                  margin="normal"
                  name="firstName"
                  //onBlur={handleBlur}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(checkExists(lastName) && errors.lastName)}
                  fullWidth
                  helperText={checkExists(lastName) && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  //onBlur={handleBlur}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(checkExists(email) && errors.email)}
                  helperText={checkExists(email) && errors.email}
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  //onBlur={handleBlur}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(checkExists(username) && errors.username)}
                  fullWidth
                  helperText={checkExists(username) && errors.username}
                  label="Username"
                  margin="normal"
                  name="username"
                  //onBlur={handleBlur}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(checkExists(password) && errors.password)}
                  fullWidth
                  helperText={checkExists(password) && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  // onBlur={handleBlur}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Box alignItems="center" display="flex" ml={-1}>
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography color="textSecondary" variant="body1">
                    I have read the{' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleSignUp}
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account?{' '}
                  <Link
                    style={{ textDecoration: 'none' }}
                    to="/sign-in"
                    variant="h6"
                  >
                    Sign In
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Grid>
  );
}
