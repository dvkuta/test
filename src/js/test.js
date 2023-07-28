export default function createArticle() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Load the images you want to overlay
  const image1 = new Image();
  const image2 = new Image();

  // Make sure to wait for both images to load
  image1.onload = function () {
    // Draw the first image on the canvas
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);

    // Draw the second image on top of the first one
    image2.onload = function () {
      ctx.drawImage(image2, 300, 660, 266, 154);
      // Example: drawing the second image at (100, 100) with size 200x150
    };

    const x = 132;
    const y = 480;
    image2.src = "../../public/logo-dark.png";

    ctx.fillStyle = "navy";
    ctx.fillRect(x, y, 817, 380);

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("MStan Pyčo", x + 20, y + 50); // Example: drawing the text 'Hello, World!' at (120, 150)

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("A generální ředitelé zeměkoule", 600, 750);
  };

  image1.src = "../../public/templates/article.png";

  const downloadBtn = document.getElementById("downloadBtn");

  // Function to merge and download the picture
  function mergeAndDownload() {
    // ... (previous code to merge the images)

    // Convert the merged canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = "merged_picture.png";
    link.style.display = "none";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Simulate a click on the anchor element to trigger the download
    link.click();

    // Clean up by removing the anchor element
    document.body.removeChild(link);
  }

  // Add a click event listener to the download button
  downloadBtn.addEventListener("click", mergeAndDownload);

  function updateTextOnCanvas() {
    const textInput = document.getElementById("textInput");
    const newText = textInput.value; // Get the text from the input element

    const x = 300;
    const y = 400;

    //zalamovani textu vyresene od typka

    // Measure the text width to adjust the rectangle width
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    const textMetrics = ctx.measureText(newText);
    const rectWidth = textMetrics.width + 40; // Add some padding to the text width

    // Draw the new black rectangle with the updated text on the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, rectWidth, 150);

    ctx.fillStyle = "white";
    ctx.fillText(newText, x + 20, y + 50);
  }

  const textInput = document.getElementById("textInput");
  textInput.addEventListener("input", updateTextOnCanvas);
}
