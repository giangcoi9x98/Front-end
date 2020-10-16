import React ,{Component} from 'react';
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
  
  Hidden, Drawer, Box
} from '@material-ui/core';
import {Pagination} from '@material-ui/lab'
import api from '../../api';
import SideBar from '../SideBar/index'
import AdminSideBar from '../Admin/SideBar/index'
import { withSnackbar, SnackbarProvider } from 'notistack';
import Product from './Product';
import TopBar from '../utils/AppBar'


 class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
      total: 0,
      page: 1,
      size: 20,
      isShowSideBar: false,
      isCloseSideBar: true,
      isAdmin: false,
      test:'giang'
    };
  }
  
  async fetchData() {
    const res = await api.product.getAllProduct({
      page: this.state.page,
      size: this.state.size,
    });
    console.log(res);

  
    if (res.status) {
      this.setState({
        listProduct: res.data.data,
        total: res.data.metadata.total.total,
      });
      console.log('prodcut',this.state.listProduct);
    } else {
      console.log('props: ', this.props);
     
    }
  }
   isCloseSideBar =async () => {
    await this.setState({isShowSideBar:false})
  }
  async componentDidMount() {
    await this.fetchData(); //?
  }
  //  async handlePageChange(event, value) {
  //      await this.setState({
  //        page:value
  //      })
  //    await this.fetchData();
  // } 
   //Khi dung phai bind() =)))
   
   handlePageChange = async (event,value) => {
     await this.setState({
       page:value
     })
     await this.fetchData()
   }
  
   render() {
     console.log("test",this.state.test);
     const isAdmin = this.state.isAdmin;
     let sidebar;
     if (isAdmin===true) {
       sidebar=<AdminSideBar></AdminSideBar>
       
     } else {
       sidebar=<SideBar></SideBar>
     }
    return (
      <div>
        <TopBar
          isShowSideBar={() => this.setState({ isShowSideBar: true })}
          isAdmin={() => this.setState({ isAdmin: true })}
          test={(name)=>this.setState({test: name})}
        >

        </TopBar>
         <div style={{display:'flex'}}>
          <div style={{}}>
             <Hidden lgUp>
          <Drawer
                open={this.state.isShowSideBar}
                onClose={this.isCloseSideBar}
            >
                {sidebar}
               
            </Drawer>
          </Hidden>
           <Hidden mdDown>
              {sidebar}

            </Hidden>
           
           </div>
        <div style={{ flexDirection: 'column', display: 'flex'}}>
          <Grid container >
          <Grid style={{ flexDirection: 'row', display: 'flex',flexWrap:'wrap',}}   >
            {this.state.listProduct.map(product => 
            {
                return <Grid item xs ={12} sm ={6} md={3} >
                    <Product  product={product} ></Product>
                    </Grid>   
            })}
          </Grid>
        
        </Grid>

       
      </div>
        </div>
        <Box  mt={3} style={{justifyContent:'center',display:'flex'}}>
          <Pagination color='primary' 
            count={Math.ceil(this.state.total / this.state.size)} size='small'
            onChange={this.handlePageChange} >

          </Pagination>
        </Box>
     </div>
    );
  }
}

export default HomePage;
