
import PropTypes from 'prop-types'


function Alert(props) {
    
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{props.alert.type}</strong> {props.alert.msg} 
        </div>}
        </div>
    )
}
Alert.propTypes={alert: PropTypes.string}
export default Alert