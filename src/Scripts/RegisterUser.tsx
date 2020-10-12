import axios from 'axios'
import UserRegistrationRequest from '../Models/UserRegistrationRequest';

export default function RegisterUser(
    req: UserRegistrationRequest
) {
    console.log("inside")
    axios.post('https://black-ninja.herokuapp.com/api/user'
    , {req}
    ).then(res => { console.log(res) });
}
