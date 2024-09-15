// Get references to the form fields and resume preview fields
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;

const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewPicture = document.getElementById('preview-picture') as HTMLImageElement;

// Update the preview whenever the input changes
nameInput.addEventListener('input', () => {
    if (previewName) previewName.textContent = nameInput.value;
});

emailInput.addEventListener('input', () => {
    if (previewEmail) previewEmail.textContent = emailInput.value;
});

phoneInput.addEventListener('input', () => {
    if (previewPhone) previewPhone.textContent = phoneInput.value;
});

profilePictureInput.addEventListener('input', () => {
    if (previewPicture) previewPicture.src = profilePictureInput.value;
});
