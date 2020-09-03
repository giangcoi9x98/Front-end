import React from 'react';


import {
    Grid,
    TextField,
    Typography,
    Button,
    Paper,
    ListItemText,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Divider,
    ListItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Image from 'material-ui-image'

import Axios from 'axios'



class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            total: 0,

            page: 1,
            size: 12


        }

    }

    async componentDidMount() {


        const res = await Axios.get('http://127.0.0.1:7000/api/v1/product');
        console.log(res);
        this.setState({
            products: res.data.data,
            total: res.data.metadata.total.total
        })

    }
    prevPage = () => {
        if (this.state.page > 1) {
            this.setState({
                ...this.state,
                page: this.state.page - 1
            })
        }
    }
    nextPage = () => {
        if (this.state.page <= Math.ceil(this.state.total / this.state.size) - 1)
            this.setState({
                ...this.state,
                page: this.state.page + 1
            })
    }
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {

                maxWidth: 345,
                maxHeight: 330,

            },
            '& p': {
                color: 'green'
            },
            media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
            },
            expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                }),
            },
            expandOpen: {
                transform: 'rotate(180deg)',
            },

        }));


        return <div className={useStyles.root} >
            <Typography>{this.state.total}</Typography>
            <Typography>pagging:{this.state.page}-{Math.ceil(this.state.total / this.state.size)}</Typography>

            <Grid container spacing={2} >
                {this.state.products.map((product) => {
                    return <Grid item xs={12} sm={6} md={2}>
                        <Card >
                            <CardMedia> <Image src="http://loremflickr.com/300/200"></Image></CardMedia>
                            <CardContent>
                                <Typography variant="body1" color="textPrimary" component="p" align='center' display="initial">
                                    {product.display}
                                </Typography>
                            </CardContent>
                            <Card style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Typography color="error" component="p" display="inline" > {product.priceOut}</Typography>
                                <Typography color='primary'  > Da ban {product.shipday}</Typography>
                            </Card>
                        </Card>
                    </Grid>
                })}
            </Grid>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button onClick={this.prevPage} variant='outlined' >Prev</Button>
                <Button onClick={this.nextPage} variant='outlined'>Next</Button>
            </CardActions>
        </div >

    }
}

export default HomePage;