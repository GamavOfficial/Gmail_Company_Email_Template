// Live A to Z Feature State Engine
function updateSignature() {
    const fName = document.getElementById('inputFirstName').value;
    const lName = document.getElementById('inputLastName').value;
    const job = document.getElementById('inputJobTitle').value;
    const company = document.getElementById('inputCompanyName').value;
    const phone = document.getElementById('inputPhone').value;
    const email = document.getElementById('inputEmail').value;
    const website = document.getElementById('inputWebsite').value;
    const disclaimer = document.getElementById('inputDisclaimer').value;
    
    const color1 = document.getElementById('inputColor1').value;
    const color2 = document.getElementById('inputColor2').value;
    const fontSize = document.getElementById('inputFontSize').value;

    // Update Text Content
    document.getElementById('previewNameDisplay').innerText = `${fName} ${lName}`;
    document.getElementById('previewJobDisplay').innerText = job;
    document.getElementById('previewWebsiteDisplay').innerText = website;
    document.getElementById('previewWebsiteDisplay').href = `https://${website}`;
    document.getElementById('previewPhoneDisplay').innerText = phone;
    document.getElementById('previewEmailDisplay').innerText = email;
    document.getElementById('previewDisclaimerText').innerText = disclaimer;

    // Update Banner Link
    const bannerLink = document.getElementById('inputBannerLink').value;
    document.getElementById('previewBannerLink').href = bannerLink;

    // Update Social Links
    document.getElementById('linkFacebook').href = document.getElementById('socialFacebook').value;
    document.getElementById('linkTwitter').href = document.getElementById('socialTwitter').value;
    document.getElementById('linkLinkedin').href = document.getElementById('socialLinkedin').value;
    document.getElementById('linkYoutube').href = document.getElementById('socialYoutube').value;

    // Dynamic Color & Font Application
    document.getElementById('previewJobDisplay').style.color = color1;
    document.getElementById('previewNameDisplay').style.color = color2;
    
    // Apply Font Size Class dynamically
    document.getElementById('signaturePreviewBox').className = `bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 p-8 space-y-6 ${fontSize}`;
}

// Multi Image Profile Uploader (PNG/JPEG)
function handleProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewProfileImg').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Multi Banner / GIF Uploader
function handleBannerImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewBannerImg').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Inbuilt Template Style Switcher
function setTemplateStyle(type) {
    if (type === 'classic') {
        document.getElementById('bannerContainerBox').style.display = 'block';
    } else if (type === 'modern') {
        document.getElementById('bannerContainerBox').style.display = 'block';
    }
    updateSignature();
}

// Export Final HTML File
function finalSignatureNameExport() {}
function exportFinalSignature() {
    const htmlExport = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Email Signature</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="bg-slate-100 p-6 flex justify-center">
    ${document.getElementById('signaturePreviewBox').outerHTML}
</body>
</html>`;

    const blob = new Blob([htmlExport], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'professional-email-signature.html';
    a.click();
}
