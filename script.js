// லைவ் ப்ரீவியூ அப்டேட் செய்யும் லாஜிக்
function updatePreview() {
    const title = document.getElementById('inputTitle').value;
    const color = document.getElementById('inputColor').value;
    const body = document.getElementById('inputBody').value;

    document.getElementById('previewTitle').innerText = title;
    document.getElementById('previewBodyText').innerText = body;
    document.getElementById('previewHeader').style.backgroundColor = color;
}

// வெப் பேஜை டவுன்லோட் செய்ய
function exportTemplate() {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-template.html';
    a.click();
}
