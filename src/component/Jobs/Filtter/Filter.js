import {NavLink } from 'react-router-dom'
const Filter = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Java</NavLink></li>
                <li><NavLink to="/categories/Dog">JavaScript</NavLink></li>
                <li><NavLink to="/categories/Parrot">C#</NavLink></li>
                <li><NavLink to="/categories/Reptile">HTML</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>
            <style jsx>{`
                .active{
                    background-color: lightgreen !important;
                }
                `}
            </style>
        </nav>
        
    );
};
export default Filter