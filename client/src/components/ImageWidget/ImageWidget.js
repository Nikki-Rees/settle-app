<button id="upload_widget" class="cloudinary-button">Upload files</button>

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'my_cloud_name',
    uploadPreset: 'my_preset'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);
