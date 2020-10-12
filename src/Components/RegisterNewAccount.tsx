import React from 'react'
import '../App.css';
import { Card, CardContent, Typography, TextField, Button, Link } from '@material-ui/core';
import { Link as LinkRouter} from 'react-router-dom';
import RegisterUser from '../Scripts/RegisterUser'

interface RegisterNewAccountState {
     firstName: '',
     lastName: '',
     email: '',
     phone: ''
}

class RegisterNewAccount extends React.Component<{}, RegisterNewAccountState> {

    constructor(props:any) {
        super(props);
        this.setState({
            firstName: "", lastName: "", email: "", phone: ""
        })
        this.register = this.register.bind(this)
        this.handleFirstNameChanges = this.handleFirstNameChanges.bind(this)
        this.handleLastNameChanges = this.handleLastNameChanges.bind(this)
        this.handleEmailChanges = this.handleEmailChanges.bind(this)
        this.handlePhoneChanges = this.handlePhoneChanges.bind(this)
    }

    
    register() {
        if(this.state && this.state.firstName !=null && this.state.lastName!=null && this.state.email!=null && this.state.phone!=null) {
            console.log(this.state)
            RegisterUser({ 
                "firstname":this.state.firstName, 
                "lastname":this.state.lastName, 
                "email":this.state.email ,
                "phone":this.state.phone,
                "companyName":"HI",
                "password": "ppp"
            })
        } else {
            console.log("Madatory feilds missing")
        }
    }

    handleFirstNameChanges = (e: any) => this.setState({ firstName: e.target.value })
    handleLastNameChanges = (e: any) => this.setState({ lastName: e.target.value })
    handleEmailChanges = (e: any) => this.setState({ email: e.target.value })
    handlePhoneChanges = (e: any) => this.setState({ phone: e.target.value })

    render() {
        return(
            <div className="App" style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}> 
                <Card variant="outlined" style={{width: 400, height: 450}}>
                    <CardContent>
                        <Typography variant="h5" style={{paddingBottom: 35}}>New User Registration
                            <Typography style={{color:"grey"}}>Enter your details</Typography>
                        </Typography>
                        <TextField
                                id="standard-basic" 
                                label="First Name"
                                required={true}
                                onChange={this.handleFirstNameChanges}
                        />
                        <TextField 
                                id="standard-basic" 
                                label="Last Name"
                                required={true}
                                onChange={this.handleLastNameChanges}
                        />
                        <TextField 
                                id="standard-basic" 
                                label="Email"
                                required={true}
                                onChange={this.handleEmailChanges}
                        />
                        <TextField 
                                id="standard-basic" 
                                label="Phone"
                                required={true}
                                onChange={this.handlePhoneChanges}
                        />
                        <div>
                            <Button 
                                onClick = {() => this.register()}
                                color="primary" 
                                variant="outlined" 
                                style={{position: "absolute", top: "80%", right: "37%"}}
                            >Register!
                            </Button>
                            <Link variant="body2">
                                <LinkRouter 
                                    to = "/login" 
                                    style={{position: "absolute", top: "89%", right: "32%"}}
                                >Take me back to login
                                </LinkRouter>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default RegisterNewAccount
