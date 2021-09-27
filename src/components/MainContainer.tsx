import Main from "./Main";
import {connect} from "react-redux";
import {getTableItems} from "../redux/table-reduser"
import { AppStateType } from "../redux/store";


let mapStateToProps = (state: AppStateType) => {
    return {
        tableItems: state.table.tableItems,
    }
}

const MainContainer = connect(mapStateToProps, {getTableItems})(Main);

export default MainContainer;