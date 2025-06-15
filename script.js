function showSubscribe() {
  const url = document.getElementById("instaURL").value;
  if (!url.includes("instagram.com")) {
    alert("Please enter a valid Instagram URL.");
    return;
  }
  sessionStorage.setItem("instaLink", url);
  document.getElementById("subscribeBox").style.display = "block";
}

function downloadNow() {
  const link = sessionStorage.getItem("instaLink");
  if (!link) {
    alert("Link not found. Please paste again.");
    return;
  }
  const downloadURL = "https://snapinsta.app/?url=" + encodeURIComponent(link);
  window.open(downloadURL, "_blank");
}