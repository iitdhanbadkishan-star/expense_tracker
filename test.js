let users = JSON.parse(localStorage.getItem("users")) || [];
let submitBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clear");
let category = document.getElementById("select").value;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("submitBtn").innerText = "Submit";
  let amount = document.getElementById("number").value.trim();
  let desc = document.getElementById("desc").value.trim();
  let category = document.getElementById("select").value;

  let data = {
    amount,
    desc,
    category,
  };

  users.push(data);

  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("number").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("select").value = "";

  display();
});

function display() {
  let ul = document.getElementById("ul");

  users = JSON.parse(localStorage.getItem("users")) || [];

  ul.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");

    const data = document.createTextNode(
      `${user.amount}, ${user.desc}, ${user.category}`,
    );

    li.appendChild(data);

    const editBtn = document.createElement("button");

    editBtn.textContent = "Edit";

    editBtn.onclick = () => {
      editData(index);
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = () => {
      delData(index);
    };

    li.appendChild(editBtn);
    li.appendChild(delBtn);

    ul.appendChild(li);
  });
}
const editData = (index) => {
  let user = users[index];

  document.getElementById("number").value = user.amount;
  document.getElementById("desc").value = user.desc;
  document.getElementById("select").value = user.category;

  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("submitBtn").innerText = "Update";
  display();

};

clearBtn.addEventListener("click", () => {
  document.getElementById("number").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("select").value = "";
});

const delData = (index) => {
  users.splice(index, 1);

  localStorage.setItem("users", JSON.stringify(users));
  display();
};
display();
