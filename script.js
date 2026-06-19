document.getElementById("studentForm").addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const photo = document.getElementById("photo").files[0];

    const message = document.getElementById("message");

    // Empty field validation
    if(name === "" || age === "" || address === "" ||
       pincode === "" || mobile === "" || email === ""){
        
        message.style.color = "red";
        message.innerText = "Please fill all fields.";
        return;
    }

    // Photo validation
    if(!photo){
        message.style.color = "red";
        message.innerText = "Please upload your photo.";
        return;
    }

    // Pincode validation
    if(!/^\d{6}$/.test(pincode)){
        message.style.color = "red";
        message.innerText = "Pincode must contain exactly 6 digits.";
        return;
    }

    // Mobile validation
    if(!/^\d{10}$/.test(mobile)){
        message.style.color = "red";
        message.innerText = "Mobile number must contain exactly 10 digits.";
        return;
    }

    // Email validation
    if(!email.includes("@")){
        message.style.color = "red";
        message.innerText = "Email address must contain @ symbol.";
        return;
    }

    // Success Message
    message.style.color = "green";
    message.innerText =
        `Thank you ${name}, your form has been submitted successfully!`;

});
document.getElementById("photo").addEventListener("change", function(){

    const file = this.files[0];
    const preview = document.getElementById("preview");

    if(file){
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});