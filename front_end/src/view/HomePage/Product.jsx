import React, { Component } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider
 
} from '@material-ui/core';
import { Link ,useHistory,Redirect} from 'react-router-dom';
import Image from 'material-ui-image';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId:''
    }
  }
  handleOrder =async () => {
    await this.setState({
      productId:this.props.product.productId
    })
    window.location = `/detail/${this.state.productId}`;

 }
  render() {
    return (
      <div style={{}}>
        <Card style={{ margin: 5, maxHeight: 450, minHeight:450,justifyContent: 'center' ,alignItems:'center'}}>
          
                <CardMedia style={{justifyContent:'center',alignItems:'center',display:'flex'}} ><img src={this.props.product.imageUrl}></img> </CardMedia>


          <CardContent>
            <Typography
              
              variant="body1"
              color="textPrimary"
              component="p"
              align="center"
              display="initial"
            >
              {this.props.product.display}
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent:'center'}}>
            
              <Button color="primary" variant="outlined" onClick={this.handleOrder} className='productId'>Dat Mua</Button>
              <Button color="primary" variant="outlined">Chi tiet</Button>
            
          </CardActions>
        </Card>
      </div>
    );
  }
}
