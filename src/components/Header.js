
import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({title, onShowAddToggle, showAdd}) => {
    console.log(showAdd);
    const onClick = ()=>{
        onShowAddToggle();
    }
    const location = useLocation();
    return (
    
        <header className="header">
            <h1>{title}</h1>
            {
                location.pathname === '/' && (
                <Button color={showAdd === true ? 'red' : 'green'} text="Add Task" onClick={onClick}></Button>
                )
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
// const headingStyle = {
//     color: 'red'
// }
export default Header
