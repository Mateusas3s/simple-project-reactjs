import React from "react"
import "../../styles/App.css"

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="App-header">
                {this.props.children}
            </div>
        )
    }
}

export default Header