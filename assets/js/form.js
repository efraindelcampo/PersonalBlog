const formEl = document.querySelector("form");

const handleFormSubmit = function (event) {
  // Prevent page from refreshing, which is default behavior
  event.preventDefault();

  const usernameEl = document.querySelector("#username").value.trim();
  const titleEl = document.querySelector("#title").value.trim();
  const contentEl = document.querySelector("#content").value.trim();

  // If any input field is null, return error
  if (!usernameEl || !titleEl || !contentEl) {
    const errorEl = document.querySelector("#error");
    errorEl.textContent = "Please complete the form.";

    return;
  }

  const formData = {
    username: usernameEl,
    title: titleEl,
    content: contentEl,
  };

  // Store formData in localStorage and redirect page to blog.html
  storeLocalStorage(formData);
  redirectPage();
};

const redirectPage = function () {
  location.href = "./blog.html";
};

const storeLocalStorage = function (data) {
  const allBlogs = readLocalStorage();

  allBlogs.push(data);

  const stringData = JSON.stringify(allBlogs);

  localStorage.setItem("blogs", stringData);
};

formEl.addEventListener("submit", handleFormSubmit);
