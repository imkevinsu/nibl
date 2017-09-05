import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Header, Icon} from 'semantic-ui-react'
import GridLayout from './sample';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Button color='facebook'>
          <Icon name='facebook'/>
          Facebook
        </Button>
        <Button color='twitter'>
          <Icon name='twitter'/>
          Twitter
        </Button>
        <Button color='instagram'>
          <Icon name='instagram'/>
          Instagram
        </Button>
        <Button
          content='Like'
          icon='heart'
          label={{
            as: 'a',
            basic: true,
            pointing: 'right',
            content: '2,048'
          }}
          labelPosition='left'
        />
        <Button
          icon='fork'
          label={{
            as: 'a',
            basic: true,
            content: '2,048'
          }}
          labelPosition='left'
        />
      </div>
    )
  }
}
export default Footer;
