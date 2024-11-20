// Retrieve blogs from localStorage
const readLocalStorage = function () {
  const stringData = localStorage.getItem("blogs");

  const data = JSON.parse(stringData);

    // If data empty, return empty array
  return data || [];
};
