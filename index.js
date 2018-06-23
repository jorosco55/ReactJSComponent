import React from 'react';
import ReactDOM from 'react-dom';



alert("it's alive");





const App = props => {

    return <NumberOfStudents/>

};

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 87,
            addStudent: 1
        };

    }



    increment () {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + 1
        });
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addStudent)
        });
    }

    render() {
        return (
            <div>
                <h3> Enrolled Students: {this.state.enrolledStudents}</h3>
                <button onClick={this.increment.bind(this)}> Increase Enrollment by 1</button>
                <h4> Add Multiple Students: </h4>
                <input type="number" onChange={event => this.setState({ addStudent:event.target.value})}
                       value={this.state.addStudent}/>
                <button onClick={this.increment.bind(this)}>Increase Students</button>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



   /*
    increment() {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount)
        });
    }

    render() {
        return (
            <div>
                <h3>Enrolled Students:  {this.state.enrolledStudents}</h3>
                <input type="number" onChange={event => this.setState({ addStudent: event.target.value })}
                       value={this.state.addStudent} />
                <button onClick={this.increment.bind(this)}>Increase Total</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

*/
