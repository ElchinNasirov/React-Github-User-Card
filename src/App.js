import React from 'react';
import UserCard from "./components/UserCard";
import './App.css';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      image: [],
      location: [],
      followers: [],
      bio: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/ElchinNasirov")
      .then(res => res.json())
      .then(user => {
        this.setState({ name: user.login })
        this.setState({ image: user.avatar_url })
        this.setState({ location: user.location })
        this.setState({ followers: user.followers })
        this.setState({ bio: user.bio })


      })
      .catch(err => {
        console.log("Error: ", err);
        console.log(this.state.users)
      });
  }

  render() {
    return (
      <div className="App">
        <UserCard
          name={this.state.name}
          image={this.state.image}
          location={this.state.location}
          followers={this.state.followers}
          bio={this.state.bio}
        />
        <FollowerCard />

      </div>
    );
  }
}
export default App;