const output = document.getElementById("output");

function saveData() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  if (!key) {
    show("Enter a key first.");
    return;
  }

  localStorage.setItem(key, value);
  show(`Saved: ${key} = ${value}`);
}

function loadData() {
  const key = document.getElementById("key").value;

  if (!key) {
    show("Enter a key first.");
    return;
  }

  const value = localStorage.getItem(key);

  if (value !== null) {
    show(`Loaded: ${value}`);
  } else {
    show("Key not found.");
  }
}

function removeData() {
  const key = document.getElementById("key").value;

  if (!key) {
    show("Enter a key first.");
    return;
  }

  localStorage.removeItem(key);
  show(`Removed key: ${key}`);
}

function clearAll() {
  localStorage.clear();
  show("All localStorage cleared.");
}

function show(message) {
  output.textContent = message;
}