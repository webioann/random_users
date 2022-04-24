import React from 'react'
import { useSelector } from "react-redux"
import  nations  from '../../data/nations'
import useGenderHistogram from '../../hooks/useGenderHistogram'
import './range-box.scss'

function RangeBox() {

    const lang = useSelector((state) => state.dialect.lang)
    const { totalMen,totalWomen } = useGenderHistogram()

    return (
        <div className="range-box">
            <h3 className='header'>{ lang === 'eng' ? nations[0].rangeTitleEng : nations[0].rangeTitleRus }</h3>
            <div className="range">
                <div style={{width: `${totalMen}%`}} className="range-men">
                    {`${ lang === 'eng' ? 'men' : 'чоловіки'}  ${totalMen}%`}
                </div>
                <div style={{width: `${totalWomen}%`}} className="range-women">
                    {`${ lang === 'eng' ? 'women' : 'жінки'} ${totalWomen}%`}
                </div>
            </div>
        </div>
    )
}

export default RangeBox;