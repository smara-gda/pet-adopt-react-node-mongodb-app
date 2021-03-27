import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { listPets } from './../services/pet';

class Home extends Component {
  state = {
    pets: []
  };

  async componentDidMount() {
    const pets = await listPets();
    this.setState({ pets });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.state.pets.map(pet => (
          <Link to={`/pet/${pet._id}`}>
            <img
              src="https://source.unsplash.com/200x200/?dog"
              alt={pet.name}
            />
            <h4>{pet.name}</h4>
            <span>{pet.size}</span>
            <br />
            <span>{pet.age}</span>
            <br />
            <span>{pet.breed}</span>
            <br />
            <span>{pet.species}</span>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
