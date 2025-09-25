// thankyou.js

document.addEventListener("DOMContentLoaded", () => {
  const summaryList = document.getElementById("summary-list");
  const data = JSON.parse(localStorage.getItem("formData"));

  if (data && summaryList) {
    summaryList.innerHTML = `
      <li><strong>First Name:</strong> ${data.firstName || ""}</li>
      <li><strong>Last Name:</strong> ${data.lastName || ""}</li>
      <li><strong>Email:</strong> ${data.email || ""}</li>
      <li><strong>Phone:</strong> ${data.phone || ""}</li>
      <li><strong>Organization:</strong> ${data.organization || ""}</li>
      <li><strong>Membership:</strong> ${data.membership || ""}</li>
      <li><strong>Description:</strong> ${data.description || ""}</li>
      <li><strong>Submitted At:</strong> ${data.timestamp || ""}</li>
    `;
  } else if (summaryList) {
    summaryList.innerHTML = `<li>No form data found.</li>`;
  }
});
