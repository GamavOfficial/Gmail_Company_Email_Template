// Live Real-time Text and Color Update Logic
function updatePreview() {
    const title = document.getElementById('inputTitle').value;
    const color = document.getElementById('inputColor').value;
    const body = document.getElementById('inputBody').value;
    const btnText = document.getElementById('inputBtnText').value;
    const btnLink = document.getElementById('inputBtnLink').value;

    document.getElementById('previewTitle').innerText = title;
    document.getElementById('previewBodyText').innerText = body;
    document.getElementById('previewHeader').style.backgroundColor = color;
    document.getElementById('previewBtn').style.backgroundColor = color;
    document.getElementById('previewBtn').innerText = btnText;
    document.getElementById('previewBtn').href = btnLink;
}

// Advanced Image Uploader (PNG, JPEG, GIF Handler)
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgDisplay = document.getElementById('uploadedImageDisplay');
            const imgContainer = document.getElementById('imagePreviewContainer');
            
            imgDisplay.src = e.target.result;
            imgContainer.classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
}

// Complete Export Template Function
function exportTemplate() {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exported Gmail Template</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="bg-slate-100 p-6 flex justify-center">
    ${document.getElementById('previewContainer').outerHTML}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'advanced-gmail-template.html';
    a.click();
}
