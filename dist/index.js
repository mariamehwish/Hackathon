// Get references to the form fields and resume preview fields
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var profilePictureInput = document.getElementById('profile-picture');
var previewName = document.getElementById('preview-name');
var previewEmail = document.getElementById('preview-email');
var previewPhone = document.getElementById('preview-phone');
var previewPicture = document.getElementById('preview-picture');
// Update the preview whenever the input changes
nameInput.addEventListener('input', function () {
    if (previewName)
        previewName.textContent = nameInput.value;
});
emailInput.addEventListener('input', function () {
    if (previewEmail)
        previewEmail.textContent = emailInput.value;
});
phoneInput.addEventListener('input', function () {
    if (previewPhone)
        previewPhone.textContent = phoneInput.value;
});
profilePictureInput.addEventListener('input', function () {
    if (previewPicture)
        previewPicture.src = profilePictureInput.value;
});
