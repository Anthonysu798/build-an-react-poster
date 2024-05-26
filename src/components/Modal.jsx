import classes from '@/src/components/Modal.module.css';

function Modal({ children }) {
    return (
        <>
            <div className={classes.backdrop} />
            <dialog open={true} className={classes.modal}>{children}</dialog>
        </>
    );
}

export default Modal;
