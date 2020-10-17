import {
  Card,
  Divider,
  Grid,
  Typography,
  CardMedia,
  Hidden,
  Drawer,
  TextField,
} from '@material-ui/core';

import React, { Component } from 'react';

export default class ProductDetail extends Component {
  render() {
    const priceIn = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(this.props.detailProduct.priceIn);
    const priceOut = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'VND',
    }).format(this.props.detailProduct.priceOut);
    const percentSale =
      'Giảm -' +
      Math.ceil(
        (parseFloat(this.props.detailProduct.priceSale) /
          parseFloat(this.props.detailProduct.priceIn)) *
          100,
      );

    return (
      <Grid
        container
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: '',
          }}
        >
          <div style={{ width: '15%' }}></div>
          <div
            style={{
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div>
              <Hidden mdDown>
                <CardMedia>
                  <img
                    src={this.props.detailProduct.imageUrl}
                    style={{ height: '80%', width: '80%' }}
                  ></img>
                </CardMedia>
              </Hidden>
            </div>
          </div>
          <div style={{ alignItems: 'center', display: 'flex', width: '50%' }}>
            <Hidden mdDown>
              <Typography variant="h5" color="textPrimary">
                {this.props.detailProduct.display}
              </Typography>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 5,
                  paddingTop: 20,
                  height: '40%',
                  width: '100%',
                }}
              >
                <Typography variant="h5" color="textPrimary">
                  {priceOut}
                </Typography>
                <Typography
                  style={{
                    textDecoration: 'line-through',
                    color: '#9e9e9e',
                    marginLeft: 20,
                    marginTop: 8,
                  }}
                >
                  {priceIn}
                </Typography>
                <Typography
                  style={{
                    marginLeft: 10,
                    marginTop: 8,
                    width: 90,
                    height: 8,
                    color: '#ff1744',
                    backgroundColor: '#ffcdd2',
                  }}
                >
                  {percentSale}%
                </Typography>
              </div>
            </Hidden>
          </div>
        </Card>
        <Card>
          <Hidden lgUp>
            <CardMedia>
              <img
                src={this.props.detailProduct.imageUrl}
                style={{ height: '90%', width: '90%' }}
              ></img>
            </CardMedia>
            <Typography>{this.props.detailProduct.display}</Typography>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography variant="h6" style={{ color: '#c4001d' }}>
                {priceOut}
              </Typography>
              <Typography
                style={{
                  color: '#9e9e9e',
                  textDecoration: 'line-through',
                  marginLeft: 10,
                }}
              >
                {priceIn}
              </Typography>
            </div>
          </Hidden>
        </Card>
      </Grid>
    );
  }
}
