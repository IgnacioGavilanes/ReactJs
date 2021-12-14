import React from "react";
import Swal from "sweetalert2";

export const validateForm = (values) => {

    //ADD FORM VALIDATIONS HERE...
    if (values.name.length <4) {
        Swal.fire({
            position:'bottom-end',                
            title: 'Invalid name',
            toast:true,
            icon: 'fail',
            background: 'white',
            showConfirmButton: false,
            timer: 2000,
        })
        return true
    }
    // if () {
    //     Swal.fire({
    //         title: 'Thank you for your order!',
    //         width: 1200,
    //         height: 1200,
    //         allowOutsideClick: false,
    //         showLoaderOnConfirm: false,
    //         content: <SuccessGif/>, 
    //         html: `${<SuccessGif/>}We will get back to you shortly, ${values.name} 😉`,
    //         width: 800,
    //         showCloseButton: true,
    //     })
    //     return true
    //}
    return false
}



