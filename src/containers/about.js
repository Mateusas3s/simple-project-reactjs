import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import About from "../pages/About"
import { updateUserName } from "../actions/user"

const mapStateProps = state => {
    return {
        user: state.user,
        employer: state.employer
    }
}

const mapDispachToProps = dispatch => {
    return {
        updateUserName: data => {
            dispatch(updateUserName(data))
        }
    }
}

export default withRouter(
    connect(
        mapStateProps,
        mapDispachToProps
    )(About)
)