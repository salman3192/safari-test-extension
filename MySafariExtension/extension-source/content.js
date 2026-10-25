// This will pop up a greeting message on every webpage you visit
alert("Success! Your extension is running and working!");

// Optional: This will also add a glowing border to the top of every webpage
const banner = document.createElement("div");
banner.style.position = "fixed";
banner.style.top = "0";
banner.style.left = "0";
banner.style.width = "100%";
banner.style.height = "5px";
banner.style.backgroundColor = "limegreen";
banner.style.zIndex = "999999";
document.body.appendChild(banner);