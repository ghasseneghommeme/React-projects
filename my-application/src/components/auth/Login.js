import React, {Component} from 'react';
import {firebaseApp} from "../../firebase/firebase";
import {Link} from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.Create = this.Create.bind(this);
        this.state = {
            email: '',
            password: '',
            error:{
                message:''
            },

        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log('success')



        }).catch((error) => {
            console.log('error',error);
            this.setState({error});
            // this.props.history.push("/home");
        });
    }

    Create(e){
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
            .catch((error) => {
                console.log('error',error);
                this.setState({error});
            })
    }
    render() {
        return (
            <div className="col-md-6">
                <h1>LOGIN FORM</h1>
                <form>
                    <div className="form-group">
                        <label  htmlFor="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button onClick={this.Create} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>


                    <div >{this.state.error.message}</div>
                </form>

            </div>
        );
    }
}
export default Login;


