import React from "react"
import "../../styles/App.css"

class Link extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a href={this.props.link}>
                {this.props.text}
            </a>
        )
    }
}

export default Link