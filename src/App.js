import React from "react"
import CustomFooter from "./components/CustomFooter/CustomFooter"
import CustomHeader from "./components/CustomHeader/CustomHeader"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import BackDrop from './components/BackDrop/BackDrop'
import sideDrawer from "./components/SideDrawer/SideDrawer"

class App extends React.Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {
        let backDrop;

        if(this.state.sideDrawerOpen){
            backDrop = <BackDrop click={this.backDropClickHandler}/>
        }

        return (
            <div>
                <CustomHeader drawerClickHandler = {this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backDrop}
                {/* <CustomFooter /> */}
            </div>
        )
    }
}

export default App