import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setStyle = ({isActive}) => {
          return isActive
          ?  styles['active-link'] 
          : undefined
    }

    return (
        <nav>
            <ul>
                <li><NavLink className = {setStyle} to="/">Home</NavLink></li>
                <li><NavLink className = {setStyle} to="/about">About</NavLink></li>
                <li><NavLink className = {setStyle} to="/pricing">Pricing</NavLink></li>
                <li><NavLink className = {setStyle} to="/contacts">Contacts</NavLink></li>

                <li>
                    <NavLink 
                        to="/starshpis"
                        // style={(isActive) => ({
                        //     background: isActive ? 'lightblue' : 'lightgreen'
                        // })} 
                        className = {setStyle}
                    >
                        Starships
                    </NavLink>
                </li>

                <li><NavLink to="/millennium-falcon">Millennium Falcon</NavLink></li>
            </ul>
        </nav>
    )
}