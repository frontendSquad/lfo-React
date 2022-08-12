import React from "react";
function ButtonIcon(props){
    return(
        <a href={props.data.buttonUrl} className="btn btn-secondary mb-2 mb-lg-3 me-3 me-lg-3"><i><img src="images/phone-icon.png" alt="" /></i> {props.data.buttonTitle}</a>
    );
}
export default ButtonIcon;