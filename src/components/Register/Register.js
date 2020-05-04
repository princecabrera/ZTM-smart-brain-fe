import React from 'react';

class Register extends React.Component {
    
    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            password:'',

        }
    }
    onEmailChange = evt => this.setState({email:evt.target.value})
    onNameChange = evt => this.setState({name:evt.target.value})
    onPasswordChange = evt => this.setState({password:evt.target.value})
    onRegisterSubmit = () => {

        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })

    }
    render() {
        
        return (
            <article className="br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <div className="pa4 white-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Name</label>
                                <input 
                                    onChange={this.onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="text"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Email</label>
                                <input 
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" 
                                    type="email" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" >Password</label>
                                <input 
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="password"   />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" >Confirm Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onRegisterSubmit}
                                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Register" />
                            </div>
                            <div className="lh-copy mt3">
                        </div>
                    </div>
                </div>
            </article>

        )
    }
}

export default Register;