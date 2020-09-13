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
import { Link } from 'react-router-dom';
import Image from 'material-ui-image';
export default class Product extends Component {
  render() {
    return (
      <div>
        <Card style={{ margin: 5 ,minHeight:450}}>
    <CardMedia  > <img src={this.props.product.imageUrl}></img></CardMedia>
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
          <CardActions>
            <Link to="/order">
              <Button>Dat Mua</Button>
            </Link>
            <Link to="/detail">
              <Button>Chi tiet</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}
