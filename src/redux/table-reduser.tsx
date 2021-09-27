import { Dispatch } from "react"
import { tableAPI } from "../api/tableApi/tableApi"



const SET_TABLE_ITEMS = 'SET-TABLE-ITEMS'

export type TableItemType = {
    Cur_ID: number|null,
    Date: string|null,
    Cur_Abbreviation: string|null,
    Cur_Scale: number|null,
    Cur_Name: string|null,
    Cur_OfficialRate: number|null
}

type InitialType = {
    tableItems: Array<TableItemType>
}

let initialState:InitialType = {
    tableItems: [{
        "Cur_ID":null,
        "Date":null,
        "Cur_Abbreviation":null,
        "Cur_Scale":null,
        "Cur_Name":null,
        "Cur_OfficialRate":null
    }]
}



const tableReduser = (state=initialState, action: ActyonsTypes) =>{

    switch(action.type){
        case SET_TABLE_ITEMS:{
            return{...state,
                    tableItems: [...action.tableItems]}
        }
        default: return state
    }
}

type ActyonsTypes = SetTableItemsActionType

type SetTableItemsActionType = {
    type: typeof SET_TABLE_ITEMS,
    tableItems: Array<TableItemType>
}

export const setTableItems = (tableItems: Array<TableItemType>):SetTableItemsActionType => ({type: SET_TABLE_ITEMS, tableItems})

export const getTableItems = () =>
    (dispatch: Dispatch<ActyonsTypes>) => {
    tableAPI.getTableItems().then(data => {
        dispatch(setTableItems(data))
    })
}

export default tableReduser

