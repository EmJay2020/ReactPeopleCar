import React from 'react';
import Axios from 'axios';
import {produce} from 'immer';

class AddPerson extends React.Component{
    state={
        person:{
            firstName: '',
            lastName: '',
            age:''
        }
    }
    onTextChange = e => {
    const nextState = produce(this.state, draftState => {
    draftState.person[e.target.name] = e.target.value;
    })
    this.setState(nextState);
    }
    onAgeChange = e => {
        const nextState = produce(this.state, draftState =>{
            draftState.person[e.target.name] = parseInt(e.target.value);
        })
        this.setState(nextState);
    }
    onSubmit = async () => {
        await Axios.post('/api/pplcars/addperson', this.state.person);
        this.props.history.push('/');
    }
    render() {
        const { firstName, lastName, age } = this.state.person;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                    <div className="row">
                    <div className="col-md-6 col-md-offset-6 card">
                        <br/>
                        <input name='firstName'
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={this.onTextChange} />
                        <br />
                        <input
                            name='lastName'
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={this.onTextChange} />
                        <br />
                        <input
                            name='age'
                            className="form-control"
                            type="text"
                            placeholder="Age"
                            value={age}
                            onChange={this.onAgeChange} />
                        <br />
                        <button onClick={this.onSubmit} className="btn btn-primary btn-lg btn-block">Submit</button>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
export default AddPerson;