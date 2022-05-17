import React from 'react'
import nations from '../../data/nations'
import { useDispatch,useSelector } from "react-redux"
import { getNatId } from '../../Redux/reduxSlice'
import { ImCheckboxChecked,ImCheckboxUnchecked } from "react-icons/im"
import './nat-filter-list.css'

function NatFiltersList() {

    const dispatch = useDispatch()
    const activeNationality = useSelector(state => state.redux.nationality)
    const themeMode = useSelector(state => state.dialect.themeMode)
    const lang = useSelector((state) => state.dialect.lang)

    function chooseNationality (event) {
        let id = event.target.id //event.target.id it is nationality code FN,GB,CA,US...
        dispatch(getNatId(id)) //put active nationality code in the redux store
    }

    return (
        <ul className= 'list'>
            {nations.map((nation) => (
            <li className={activeNationality === nation.code ? `nat-${themeMode} active-${themeMode}` : `nat-${themeMode}` }
                key={nation.code}
                onClick={chooseNationality} 
                id={nation.code}>
                <i className={`checkbox-${themeMode}`}>
                    {(activeNationality === nation.code) ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                </i>
                { lang === 'eng' ? nation.nameEng : nation.nameUkr }
            </li>))}   
        </ul>
    )
}

export default NatFiltersList;
