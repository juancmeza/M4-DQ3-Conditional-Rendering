import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {


  state = {
    itemSelected: <Profile />
  }

  handleClick = (e) => {
    debugger
    switch(e.target.id) {
      case 'profile':
        let profile = <Profile />
        this.setState({
          itemSelected: profile
        })
      case "photo":
        let photo = <Photos />
        this.setState({
          itemSelected: photo
        })
      case "cocktail":
        let cocktails = <Cocktails />
        this.setState({
          itemSelected: cocktails
        })      
      case "pokemon":
        let pokemon = <Pokemon />
        this.setState({
          itemSelected: pokemon
        })      
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.state.itemSelected}</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
