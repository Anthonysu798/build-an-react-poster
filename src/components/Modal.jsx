import { useNavigate } from 'react-router-dom';
import classes from '@/src/components/Modal.module.css';

function Modal({ children }) { 
    const navigate = useNavigate(); 

    // Close the modal when the backdrop is clicked
    function closeHandler() {
        navigate('..'); // Navigate up one level (to the parent route)
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open={true} className={classes.modal}>{children}</dialog>
        </> 
    );
}

export default Modal;
