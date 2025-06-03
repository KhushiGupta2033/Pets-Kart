document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector("button[type='submit']");
    const form = document.querySelector("form");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        const ownerName = document.getElementById("owner-name").value;
        const address = document.getElementById("address").value;
        const govId = document.getElementById("gov-id").value;
        const email = document.getElementById("email").value;
        const animalType = document.getElementById("animal-type").value;
        const medicalCondition = document.getElementById("medical-condition").value;
        const animalSex = document.getElementById("animal-sex").value;
        const animalAge = document.getElementById("animal-age").value;
        const animalPhotoInput = document.getElementById("animal-photo");
        const sellingPrice = document.getElementById("selling-price").value;
        const animalPhoto = animalPhotoInput.files.length > 0 ? animalPhotoInput.files[0].name : "";

        const formData = {
            ownerName,
            address,
            govId,
            email,
            animalType,
            medicalCondition,
            animalSex,
            animalAge,
            animalPhoto,
            sellingPrice
        };


        localStorage.setItem("sellingFormData", JSON.stringify(formData));

        console.log("Form data saved to localStorage:", formData);

        alert("submitted");

    });
});
