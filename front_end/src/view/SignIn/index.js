import React, { Component  } from 'react'
import { Paper, withStyles, Grid,
     TextField, Button, 
     FormControlLabel, Checkbox } 
     from '@material-ui/core';
 import {Link, Redirect} from 'react-router-dom'    
 import { Face, Fingerprint,Lock } from '@material-ui/icons'
 import api from '../../api';
 import axios from 'axios';

export default class SignIn extends Component {
    constructor(props) {
        super();
        this.state = {
            sign:false,
            login:false,
            username:'',
            password:'',
        }
    }
    handleLogin = async() =>{
       try{
       const res  = await axios.post('http://localhost:7000/api/v1/signin',{
           username:this.state.username,
           password:this.state.password
       })
       alert("Dang nhap thanh cong")
        await this.setState({
           login:true
          
       })
     
        console.log(res.status);
        console.log("seccess");
        console.log(res.data.token);
       
      }catch(err){
          console.log(err);
          console.log('user is not exists');
       
      }
      
     
       }
        
    async componentDidMount(){
        await this.handleLogin();
    }
   

    render() {
        if(this.state.login){
            return <Redirect to="/"/>
        }
        const { classes } = this.props;
        return (
           <Grid style={{justifyContent :'center' }}container >
                <Paper  style={{ minHeight:500}} >
                <div >
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required  
                            value={this.state.username}
                            onChange={e=>this.setState({username:e.target.value})}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Lock />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="password" label="Password" type="password" fullWidth required 
                             value={this.state.password}
                             onChange={e=>this.setState({password:e.target.value})}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-around"  style={{ marginTop: '10px' }}>
                        <Button onClick={this.handleLogin} variant="outlined" color="primary" style={{ textTransform: "none" }}>SignIn</Button>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>SignUp</Button>
                    </Grid>
                </div>
            </Paper>
           </Grid>
        );
    }
}
