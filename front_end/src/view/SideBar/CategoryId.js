import React, { Component } from 'react'
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Divider,
} from '@material-ui/core'
import Image from 'material-ui-image'
export default class Product extends Component {
    render() {
        return <div>
           <Grid style={{padding:5}}>
               <Card>
               <Typography style={{maxWidth:100 ,flexWrap:'nowrap',maxHeight:30 ,justifyContent:'center',background:'#fce4ec'}}>{this.props.category.display}</Typography>
               </Card>
           </Grid>
        </div>
    }

}