import React from 'react';
import { Typography, Button, Link, TextField, CardContent, Card } from '@material-ui/core';
import ContactUs from './ContanctUs'
import { Link as LinkRouter} from 'react-router-dom';

const facebook = "https://www.facebook.com/prakhar.verma.58"
const linkedIn = "https://www.linkedin.com/in/prakhar-verma-49862b125/"
let contactProp = {"contactDetails": {
    "linkedIn":linkedIn, 
    "facebook":facebook
}}

const Login = () => {
    
        return(
            <div style={{
            position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'
            }}>
                <Card variant="outlined" style={{width: 400, height: 450}}>
                    <CardContent>
                        <div>
                            <Typography variant="h4" style={{paddingBottom: 35}}>Welcome
                                <Typography style={{color:"grey"}}>Please login to continue</Typography>
                            </Typography>
                            <TextField 
                                id="standard-basic" 
                                label="username"
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="password" 
                                type="password"
                                style={{paddingBottom: 15}}
                            />
                        </div>
                        <div>
                            <Button color="primary" variant="outlined" style={{position: "absolute", top: "55%", right: "40%"}}>login</Button>
                        </div>
                        <Typography>
                            <Link variant="body2">
                                <LinkRouter to="/registration" style={{position: "absolute", top: "70%", left: "37%"}}>Register Yourself</LinkRouter>
                            </Link>
                            <Link href="#" variant="body2" style={{position: "absolute", top: "75%", left: "37%"}}>
                            <LinkRouter to={
                                {
                                    pathname: "/wip", search : "?feature=Forgot Password"
                                }
                            }>Forgot Password ?</LinkRouter>
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
                <ContactUs {...contactProp}/>
            </div>
        );
}

export default Login;