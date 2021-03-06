import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersList, deleteDataUser } from '../actions/userAction'
import TableComponent from '../components/TableComponent'


class HomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList())
        this.props.dispatch(deleteDataUser())
    }
    render() {
        return (
            <div>
                <TableComponent />
                
            </div>
        )
    }
}

export default connect()(HomeContainer)
