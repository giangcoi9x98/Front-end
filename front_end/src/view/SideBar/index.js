import React, { Component } from 'react';
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
} from '@material-ui/core'
import CategoryId from './CategoryId'
import api from '../../api'
import {
    Link,
} from 'react-router-dom'


import { withSnackbar, SnackbarProvider } from 'notistack';
class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategoryId: []
        }
    }

    fetchData = async () => {
        const res = await api.category.getAllcategoryId();
        if (res.status) {
            this.setState({
                listCategoryId: res.data.data
            })
        } else {
            console.log('props: ', this.props);
            console.log(res.message);
            this.props.enqueueSnackbar(res.message, { variant: 'error' })
        }
    }

    async componentDidMount() {
        await this.fetchData();
    }
    render() {
        return (
            <div style={{ flexFlow: "row" }}>
                {this.state.listCategoryId.map(
                    (category) => <CategoryId category={category}></CategoryId>
                )}
            </div>
        )
    }
}

export default withSnackbar(SideBar)
