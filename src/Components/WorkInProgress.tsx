import React from 'react'
import '../App.css'
import { Link, withRouter } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

class WorkInProgress extends React.Component {

    getLocation() {
        let feature = decodeURIComponent(window.location.search)
        let string = feature.split("=")[1]
        return (string === "" || string == null) ? "feature" : feature.split("=")[1]
    }

    render () {
        return (
            <div className="App">
                <div style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
                <Card variant="outlined" style={{width: 400, height: 300}}>
                    <CardMedia
                    style={{height: 140}}
                    image="https://blog.apbbuilders.com/hubfs/Imported_Blog_Media/Blog%20Posts%20Featured%20Images/WIPAA-e1490930889545.jpg"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Be Patient, We are on it !
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {this.getLocation()}  is currently under development, please visit again to check on this
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        <Link to='/login'>Back</Link>
                    </Button>
                    </CardActions>
                </Card>
                </div>
            </div>
        );
    }
}

export default WorkInProgress
