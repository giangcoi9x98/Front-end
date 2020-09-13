import React from 'react';
import {
  makeStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Grid,
} from '@material-ui/core';
import api from '../../api';

import { withSnackbar, SnackbarProvider } from 'notistack';
import Product from './Product';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
      total: 0,
      page: 1,
      size: 10,
    };
  }

  async fetchData() {
    const res = await api.product.getAllProduct({
      page: this.state.page,
      size: this.state.size,
    });
    console.log(res);

    this.props.enqueueSnackbar('tesst enque', { variant: 'success' });
    if (res.status) {
      this.setState({
        listProduct: res.data.data,
        total: res.data.metadata.total.total,
      });
      this.props.enqueueSnackbar('ok', { variant: 'success' });
    } else {
      console.log('props: ', this.props);
      console.log(res.message);
      this.props.enqueueSnackbar(res.message, { variant: 'error' });
    }
  }

  async componentDidMount() {
    await this.fetchData(); //?
  }

  async prevPage() {
    console.log(this.state);
    await this.setState({
      //? await
      page: this.state.page - 1,
    });
    console.log(this.state);
    await this.fetchData(); //reload
  }
  nextPage = async () => {
    await this.setState({
      page: this.state.page + 1,
    });
    await this.fetchData();
  };

  render() {
    return (
      <div >
        <Grid container  >
          <Grid style={{ flexDirection: 'row', display: 'flex',flexWrap:'wrap' }}   >
            {this.state.listProduct.map(product => 
              
            {
                return <Grid item xs ={12} sm ={6} md={3}>
                    <Product  product={product} ></Product>
                    </Grid>
                    
            })}
          </Grid>
        </Grid>

        <Button onClick={this.prevPage.bind(this)}>prev</Button>
        {/* //?bind */}
        <Button onClick={this.nextPage}>next</Button>
      </div>
    );
  }
}

export default withSnackbar(HomePage);
