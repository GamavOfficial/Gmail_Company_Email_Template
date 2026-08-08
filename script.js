// Master Enterprise Template Database & State Engine
const templateDatabase = {
    corporate: {
        title: "Global Tech Enterprise 2026 Summit",
        color: "#2563eb",
        body: "Dear Stakeholder, your annual enterprise compliance certificate and security workspace configuration have been successfully processed.",
        btnText: "Access Corporate Portal",
        btnLink: "https://enterprise.example.com"
    },
    ecommerce: {
        title: "Exclusive Season Sale - Up to 50% Off",
        color: "#059669",
        body: "Hello valued customer! Your VIP shopping pass is now active. Explore our top retail collections with priority shipping privileges.",
        btnText: "Shop Collection Now",
        btnLink: "https://store.example.com"
    },
    welcome: {
        title: "Welcome to Our Elite Cloud Workspace",
        color: "#7c3aed",
        body: "Welcome aboard! Your cloud infrastructure is fully initialized and synchronized across all multi-region data centers securely.",
        btnText: "Launch Dashboard",
        btnLink: "https://dashboard.example.com"
    }
};

let currentTemplateKey = 'corporate';

// View Switcher Controller (Gallery <-> Editor)
function switchView(viewName) {
    const galleryView = document.getElementById('galleryView');
    const editorView = document.getElementById('editorView');
    const btnGallery = document.getElementById('btnGallery');

    if (viewName === 'editor') {
        galleryView.classList.add('hidden');
        editorView.classList.remove('hidden');
        editorView.classList.add('fade-in');
        btnGallery.classList.remove('bg-slate-800');
        btnGallery.classList.add('bg-blue-600', 'text-white');
    } else {
        editorView.classList.add('hidden');
        galleryView.classList.remove('hidden');
        galleryView.classList.add('fade-in');
        btnGallery.classList.remove('bg-blue-600', 'text-white');
        btnGallery.classList.add('bg-slate-800', 'text-slate-200');
    }
}

// Load Selected Template into Live Customizer
function loadTemplate(key) {
    if (!templateDatabase[key]) return;
    currentTemplateKey = key;
    const data = templateDatabase[key];

    // Populate Input Fields
    document.getElementById('inputTitle').value = data.title;
    document.getElementById('inputColor').value = data.color;
    document.getElementById('inputBody').value = data.body;
    document.getElementById('inputBtnText').value = data.btnText;
    document.getElementById('inputBtnLink').value = data.btnLink;

    // Trigger Live Render
    updatePreview();
    switchView('editor');
}

// Live Real-time DOM Updater Engine
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

// Advanced Multi-Format Image Handler (PNG, JPEG, GIF)
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgDisplay = document.getElementById('uploadedImageDisplay');
            const imgContainer = document.getElementById('imagePreviewContainer');
            
            imgDisplay.src = e.target.result;
            imgContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
}

// Master Export Function for Production Deployment
function exportFullCode() {
    const htmlExport = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Enterprise Compiled Email Template</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="bg-slate-100 p-8 flex justify-center">
    ${document.getElementById('previewContainer').outerHTML}
</body>
</html>`;

    const blob = new Blob([htmlExport], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTemplateKey}-enterprise-template.html`;
    a.click();
}
