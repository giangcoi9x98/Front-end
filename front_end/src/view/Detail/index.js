import React, { Component } from 'react'
import { useLocation } from 'react-router';
import api from '../../api'
import DetailProduct from './ProductDetail'
export default class Detail extends Component {
    constructor(props) {
        super();
        this.state = {
            productId: window.location.pathname.split('/')[2],
            productDetail:{},
        }      
    }
    fetchData = async () => {
        try {
         const res =await api.product.getProductById(this.state.productId)
            if (res.status) {
                this.setState({
                    productDetail: res.data.data
                })
            } ;   
        } catch (err) {
            console.log(err);
         }
    }
    async componentDidMount() {
        await this.fetchData()
    }
    render() {
        return <div style={{padding:20}}>
                <DetailProduct detailProduct={this.state.productDetail}></DetailProduct>
        </div>
    }
}