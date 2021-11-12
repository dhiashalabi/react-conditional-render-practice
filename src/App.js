import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    class-based component
    constructor method
2. Have state keep track of whether the user is logged in or not
    isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    Conditional Rendering
*/

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.trackUser = this.trackUser.bind(this);
    }

    trackUser() {
        this.setState(prevStat => {
            return {
                isLoggedIn: !prevStat.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.trackUser}>{this.state.isLoggedIn ? "log in" : "log out"}</button>
                <h1>{this.state.isLoggedIn ? "Logged in" : "Logged out"}</h1>
            </div>
        );
    }
}
