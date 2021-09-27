import s from "./Main.module.css"
import { RefObject, useEffect } from "react";
import React from "react";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import { TableItemType } from "../redux/table-reduser";

type PropsType = {
    tableItems: Array<TableItemType>,
    getTableItems: ()=>void
}


const Main:React.FC<PropsType> = (props) => {

    let cellRefs: Array<RefObject<HTMLDivElement>> = []
    let headCellRefs: Array<RefObject<HTMLDivElement>> = []

    for (let i = 0; i < 6; i++) {
        cellRefs[i] = React.createRef<HTMLDivElement>();
        headCellRefs[i] = React.createRef<HTMLDivElement>();
    }

    useEffect(() => {
        props.getTableItems();
    }, []);

    useEffect(() => {
        headCellRefs.map((item, index) =>{
            (cellRefs[index].current!.offsetWidth > headCellRefs[index].current!.offsetWidth)?
            headCellRefs[index].current!.style.minWidth = (cellRefs[index].current!.offsetWidth-20)+"px":            
            cellRefs[index].current!.style.minWidth = (headCellRefs[index].current!.offsetWidth-20)+"px"
        })
    }, [props.tableItems]);



    return (
        <ScrollSync>
        <>      
        <ScrollSyncPane>
        <div className={s.headlinesContainer}>
            <div className={s.headlines}>
                <div ref={headCellRefs[0]} className={s.tableHeadCell}>
                    Cur_ID
                </div>
                <div ref={headCellRefs[1]} className={s.tableHeadCell}>
                    Date
                </div>
                <div ref={headCellRefs[2]} className={s.tableHeadCell}>
                    Cur_Abbreviation
                </div>
                <div ref={headCellRefs[3]} className={s.tableHeadCell}>
                    Cur_Scale
                </div>
                <div ref={headCellRefs[4]} className={s.tableHeadCell}>
                    Cur_Name
                </div>
                <div ref={headCellRefs[5]} className={s.tableHeadCell}>
                    Cur_OfficialRate
                </div>
            </div>
            </div>
            </ScrollSyncPane>
            <ScrollSyncPane>
            <div className={s.mainBlock}>
                <div className={s.table}>
                    {props.tableItems.map((item:TableItemType) => {
                        return (
                            <div className={s.tableItem}>
                                <div ref={cellRefs[0]} className={s.tableCell}>
                                    {item.Cur_ID}
                                </div>
                                <div ref={cellRefs[1]} className={s.tableCell}>
                                    {item.Date}
                                </div>
                                <div ref={cellRefs[2]} className={s.tableCell}>
                                    {item.Cur_Abbreviation}
                                </div>
                                <div ref={cellRefs[3]} className={s.tableCell}>
                                    {item.Cur_Scale}
                                </div>
                                <div ref={cellRefs[4]} className={s.tableCell}>
                                    {item.Cur_Name}
                                </div>
                                <div ref={cellRefs[5]} className={s.tableCell}>
                                    {item.Cur_OfficialRate}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </ScrollSyncPane>
        </>
        </ScrollSync>
    )
}

export default Main