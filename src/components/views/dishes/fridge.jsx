import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Image,
  Modal,
  Comment,
  Feed,
  Icon,
  Card,
  Rating
} from 'semantic-ui-react';
import MenuCard from '../restaurants/menuCard';

const sampleFav = [
  {
    avgDishRating: 4,
    description: 'this fresh mozz is from italy',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '8.25'
  },
  {
    avgDishRating: 3,
    description: 'this dish is from',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '2.25'
  },
  {
    avgDishRating: 1,
    description: 'this is a dish',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '5.25'
  },
  {
    avgDishRating: 2.5,
    description: 'great great great',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '1.25'
  },
  {
    avgDishRating: 3.2,
    description: 'great great great',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '2.25'
  },
  {
    avgDishRating: 4,
    description: 'great great great',
    foursquarEntryId: '17270633',
    imageUrl: 'https://www.placecage.com/g/300/300',
    name: 'fresh-stretched mozz',
    price: '8.00'
  },
]

class Fridge extends Component {
  constructor() {
    super();
    this.state = {
      favorites: sampleFav,
    }

  }
  componentDidMount() {
    const firebaseId = String(localStorage.getItem('UserId'));
    const reqQuery = {
      params: {
        firebaseId
      }
    }
    console.log('reqQuery', reqQuery);

    axios.get(`${process.env.HOST}/api/user/fridge`, reqQuery)
      .then(req => this.setState({ favorites: req.data }))
      .then(req => console.log('get favorited! success', req.data))
      .catch(err => console.log('get favorited! fail', err))
  }
  render() {
    return (
      <div className="ui container ">
        <br />
        <br />
        <center>
          <Header style={{fontSize: '4em'}}>
            <Icon size="small" name="empty heart" />
            <Header.Content>SAVED DISHES</Header.Content>
          </Header>
        </center>
        <br />
        <br />

        <Card.Group itemsPerRow={4}>
          {this.state.favorites.map((r, i) => {
            return (
              <li className="menuliststyle" key={i}>
                <Card color="red" image={r.imageUrl} />
                description: {r.description} <br/>
                rating: {r.avgDishRating} <br/>
                name: {r.name} <br/>
                price: {r.price} <br/>

              </li>
            );
          })}
        </Card.Group>
      </div>
    );
  }
}

export default Fridge;