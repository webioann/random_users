import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import nations from "../../data/nations"
import './user-full-info.css'

function UserFullData() {

    const oneUserId = useSelector(state => state.redux.uuid)
    const currentData = useSelector((state) => state.redux.currentData)
    const[favorit,setFavorit] = useState("start")
    const [nationality,setNat] = useState('all')


    useEffect(() => {
        setFavorit(currentData.filter(unit => unit.login.uuid === oneUserId))
    },[oneUserId])

    useEffect(() => {
        if(favorit !== "start") {
            let natio = nations.find(nation => nation.code === favorit.nat)
            setNat('natio')
            console.log(`nat ${natio}`);
        }
        else{
            setNat("all")
        }
    },[favorit])

    if( favorit !== "start" ) {
        return (
            <ul>
                {favorit.map((user) => (
                <li className="user-full-info" key={user.login.uuid}>
                    <header className="user-header">
                        <div className="user-avatar">
                            <img
                                src={user.picture.medium}
                                className="user-photo"
                                alt=""
                                />
                        </div>

                        <div className="passport">
                            <h2 className="name">
                                {user.name.first} {user.name.last}
                            </h2>
                            <p className="age">{user.dob.age} years ( {new Date(user.dob.date).toLocaleDateString()} )</p>
                        </div>
                    </header>
                    <div className="field">
                        <p className="left-p">Gender: </p>
                        <p className="right-p">{user.gender}</p>
                    </div>

                    <div className="field">
                        <p className="left-p">Nationality:</p>
                        <p className="right-p">
                            {nationality}
                        </p>
                    </div>
                    <div className="field">
                        <p className="left-p">Phone:</p>
                        <p className="right-p">{user.phone}</p>
                    </div>

                    
                    <div className="field">
                        <p className="left-p">Email:</p>
                        <p className="right-p">{user.email}</p>
                    </div>
                    <div className="field">
                        <p className="left-p">Country:</p>
                        <p className="right-p">{user.location.country}</p>
                    </div>

                    <div className="field">
                        <p className="left-p">Street:</p>
                        <p className="right-p">{user.location.postcode}</p>
                    </div>



                    <div className="field">
                        <p className="left-p">City:</p>
                        <p className="right-p" id="big-letter">
                        {user.location.city}
                        </p>
                    </div>

                    <div className="field">
                        <p className="left-p">State:</p>
                        <p className="right-p" id="big-letter">
                            {user.location.state}
                        </p>
                    </div>
                    <div className="field">
                        <p className="left-p">Postcode:</p>
                        <p className="right-p">{user.location.postcode}</p>
                    </div>
                    <div className="field">
                        <p className="left-p">Username:</p>
                        <p className="right-p">{user.login.username}</p>
                    </div>
                    <div className="field">
                        <p className="left-p">Login:</p>
                        <p className="right-p">roootookek12</p>
                    </div>
                    <div className="field">
                        <p className="left-p">Password: </p>
                        <p className="right-p">{user.login.password}</p>
                    </div>

                </li>))}
            </ul>
        )
    }
    else{ return null }
}

export default UserFullData;

