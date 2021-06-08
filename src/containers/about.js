import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import About from "../pages/About"

const mapStateProps = state => {
    return {
        user: state.user,
        employer: state.employer
    }
}

const mapDispachToProps = dispatch => {
    return {}
}

export default withRouter(
    connect(
        mapStateProps,
        mapDispachToProps
    )(About)
)