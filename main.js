function myFunction(){
    var proceed = confirm( "Do you want reset all informations?")
    if(proceed == true) {
        document.getElementById("form_input").reset()
        window.alert("All your informations are reseted")
    } else{
        window.alert("Action Cancelled")
        
    }

}
const loadeContainer = document.querySelector('.loader');

window.addEventListener('load', () => {
    loadeContainer.classList.add('hide');
})
