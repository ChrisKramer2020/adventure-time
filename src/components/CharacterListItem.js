import React, { Component } from 'react'
import styles from './CharacterListItem.scss'

class CharacterListItem extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  render () {
    return <li className={styles.root}>
      {this.props.name}
    </li>
  }
}

export default CharacterListItem
