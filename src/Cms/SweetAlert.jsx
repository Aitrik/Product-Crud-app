import SweetAlert from "react-bootstrap-sweetalert";
const customPopupStyle = {
    position: 'fixed',
    display:"flex",
    alignItems:"center"


};
function SweetAlertComponent({ confirm, cancle, title, subtitle, type }) {
    return (
        <SweetAlert
            style={customPopupStyle}
            title={title}
            onConfirm={confirm}

            // type="danger"
            type={type !== undefined ? type : "danger"}
            showCancel={true}
            confirmBtnStyle={{ backgroundColor: "#024b98" }}
            onCancel={cancle}


        >
            <h5> {subtitle} </h5>
        </SweetAlert>
    );
}

export default SweetAlertComponent;

