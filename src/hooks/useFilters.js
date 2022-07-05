import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { putFilteredData } from '../Redux/reduxSlice'

const useFilters = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.redux.data)
    const gender = useSelector((state) => state.redux.gender)
    const nationality = useSelector((state) => state.redux.nationality)
    const[filteredData,setFilteredData] = useState([])

    useEffect(() => {
        if( gender === 'both-sex' && nationality === 'ALL') {
            setFilteredData( data )
        }
        else if( gender !== 'both-sex' && nationality === 'ALL') {
            setFilteredData( data.filter(unit => unit.gender === gender))
        }
        else if( gender === 'both-sex' && nationality !== 'ALL') {
            setFilteredData( data.filter(unit => unit.nat === nationality))
        }
        else{
            setFilteredData( data.filter(unit => unit.gender === gender && unit.nat === nationality))
        }

    }, [data, gender, nationality])

    //we put the filteredData in redux.currentData for use in a Pagination.js
    dispatch(putFilteredData(filteredData)) 
}

export default useFilters;