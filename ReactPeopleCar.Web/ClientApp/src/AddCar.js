import React from 'react';
import Axios from 'axios';
import {produce} from 'immer';

class AddCar extends React.Component{
    state={
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
        }
    }
    componentDidMount = () => {
        const nextState = produce(this.state, draftState => {
         draftState.car.personId = parseInt(this.props.match.params.id);
         })
        this.setState(nextState);
    }
        onTextChange = e => {
        const nextState = produce(this.state, draftState => {
        draftState.car[e.target.name] = e.target.value;
        })
        this.setState(nextState);
        }
        onYearChange = e => {
            const nextState = produce(this.state, draftState =>{
                draftState.car[e.target.name] = parseInt(e.target.value);
            })
            this.setState(nextState);
        }
        onSubmit = async () => {        
            await Axios.post('/api/pplcars/addcar', this.state.car);
            this.props.history.push('/');
        }
        render() {
            const { make, model, year } = this.state.car;
            return (
                <div className="container" style={{ marginTop: 60 }}>
                        <div className="row">
                        <div className="col-md-6 col-md-offset-3 well">
                            <input name='make'
                                className="form-control"
                                type="text"
                                placeholder="Make"
                                value={make}
                                onChange={this.onTextChange} />
                            <br />
                            <input
                                name='model'
                                className="form-control"
                                type="text"
                                placeholder="Model"
                                value={model}
                                onChange={this.onTextChange} />
                            <br />
                            <input
                                name='year'
                                className="form-control"
                                type="text"
                                placeholder="Age"
                                value={year}
                                onChange={this.onYearChange} />
                            <br />
                            <button onClick={this.onSubmit} className="btn btn-primary btn-lg btn-block">Submit</button>
                        </div>
                    </div>
                </div>
            )
        }
}
export default AddCar;