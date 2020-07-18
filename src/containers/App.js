import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
}
}

class App extends Component {
    componentDidMount() {      
        this.props.onRequestRobots()
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading</h1>:
            (
            <div className= 'tc'>
                <h1 className='f1'>RoboPals</h1> 
                <SearchBox searchChange={onSearchChange}/> 
                <Scroll>
                <CardList robots={filterRobots}/>
               </Scroll>
            </div>        
          );
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { Component } from 'react';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import { robots } from './robots';

// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             robots: robots,
//             searchfield: ''
//         }
//     }

//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value})
//     }

//     render() {
//         const filteredRobots = this.state.robots.filter(robots =>{
//             return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
//         })
//     return (
//         <div className= 'tc'>
//             <h1>RoboPal</h1>
//             <SearchBox searchChange={this.onSearchChange} />
//             <CardList robots={filteredRobots}/>
//         </div>
     
//     );
//     }
// }

// export default App;

