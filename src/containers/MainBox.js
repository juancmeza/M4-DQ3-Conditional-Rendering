import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
class MainBox extends React.Component {
 state={
   profile: false,
   photo: false,
   cocktails: false,
   pokemon: false
 }
 displayProfile = (id) => {
   if(id === 'profile'){
    let prevProfile = this.state.profile
      this.setState({
        profile: !prevProfile,
        photo: false,
        cocktails: false,
        pokemon: false
      })
   } else if (id === 'photo'){
     let prevPhoto = this.state.photo
     this.setState({
       photo: !prevPhoto,
       profile: false,
       cocktails: false,
       pokemon: false
     })
   } else if (id === 'cocktail'){
     let prevCocktails = this.state.cocktails
     this.setState({
       cocktails: !prevCocktails,
       profile: false,
       photo: false,
       pokemon: false
     })
   } else if (id === 'pokemon'){
     let prevPokemon = this.state.pokemon
     this.setState({
       pokemon: !prevPokemon,
       profile: false,
       photo: false,
       cocktails: false
     })
   }
 }
  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */
    // const detailsToDisplay = <div>{this.state.profile == true ? <Profile /> : null}</div>
    return (
      <div>
        <MenuBar profile={this.state.profile} photo={this.state.photo} cocktails={this.state.cocktails} pokemon={this.state.pokemon} displayProfile={this.displayProfile}/>
        {this.state.profile === true ? <Profile /> : null}
        {this.state.photo === true ? <Photos /> : null}
        {this.state.cocktails === true ? <Cocktails /> : null}
        {this.state.pokemon === true ? <Pokemon /> : null}
      </div>
    )
  }
}
export default MainBox