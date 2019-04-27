import * as React from "react";
import {AppState} from '../features/redux/state/appState'
import { connect } from "react-redux";
import {dashBoardAction} from '../features/redux/action/dashboard'
interface dashBoardProps {
    dashboard?: any
    dispatch?:any
  }
class UserDashBoard extends React.Component<dashBoardProps>{
    componentDidMount(){
        this.props.dispatch(dashBoardAction())
    }
    render(){
       const {dashBoard} = this.props.dashboard
      const dashBoardDATA =this.props.dashboard.dashBoard && dashBoard.user.map((e,i)=>{
        return  <tr key={i}>
          <td className="pv3 pr3 bb b--black-20">{e.id}</td>
          <td className="pv3 pr3 bb b--black-20">{e.name}</td>
          <td className="pv3 pr3 bb b--black-20">{e.gender}</td>
          <td className="pv3 pr3 bb b--black-20">{e.age} </td>
          <td className="pv3 pr3 bb b--black-20">{e.phoneNo} </td>
          <td className="pv3 pr3 bb b--black-20">{e.email} </td>
        </tr>
      })
        return (
            <div>
<div className="pa4">
<h1 className="pl6 pb3">Dashboard</h1>
  <div className="overflow-auto">
    <table className="f6 w-100 mw8 center">
      <thead>
        <tr>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Gender</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Age</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Phone No</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      {dashBoardDATA}
      </tbody>
    </table>
  </div>
</div>
            </div>
            
        )
    }
}
function mapStatetoProps(state:AppState) {
    return {
      dashboard: state.dashboardDATA
    }
  }
export default connect(mapStatetoProps)(UserDashBoard)