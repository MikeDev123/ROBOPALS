import React, {Component} from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
        .then(users => {this.setState({ robots: users})});
    }
    onSearchChange = (event) => {
        this.setState( { searchfield : event.target.value})              
    }
    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1>:
            (
            <div className= 'tc'>
                <h1 className='f1'>RoboPals</h1> 
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                <CardList robots={filterRobots}/>
               </Scroll>
            </div>        
          );
        
    }
}
export default App;

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

