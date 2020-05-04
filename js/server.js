$(document).ready(() => {
    $('#client').submit((e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const nationality = document.getElementById('nationality').value;
        const countryStranded = document.getElementById('countryStranded').value;
        const originalTravelDate = document.getElementById('originalTravelDate').value;
        const airlineTraveled = document.getElementById('airlineTraveled').value;
        const phoneNo = document.getElementById('phoneNo').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        const requestObject = {
            firstName,
            lastName,
            dateOfBirth,
            nationality,
            countryStranded,
            originalTravelDate,
            airlineTraveled,
            phoneNo,
            email,
            comment
        };
        fetch('https://mysterious-basin-41846.herokuapp.com/',{
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: {
              'Content-Type': 'application/json'
         },
        }).then((response)=>{
            if(response.status === 303){
                toastr.warning('Your data is already in our record','Failed' );
            }
            else if(response.status === 200){
                toastr.success('Data successfully sent, Please check your email', 'Success');
            }else{
                toastr.error('Something went wrong, Contact Satyam Holidays','Failed');
            }
        }).catch((error)=>{
            toastr.error('Something went wrong, Contact Satyam Holidays','Failed');
        })

    });

    $('.dateOfBirth').datepicker({
        yearRange: "1920:2022",
        showAnim: 'drop',
        dateFormat: 'DD, d MM, yy',
        changeMonth: true,
        changeYear: true
    });
    
})