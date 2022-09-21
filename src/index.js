import "./styles.css";

setTimeout(async function getUsers() {
  var j = 0;
  const usersTable = document.getElementById("users");
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const usersPromise = await fetch(url);
  const user = await usersPromise.json();
  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const dataPromise = await fetch(url2);
  const data = await dataPromise.json();
  var name = user.dataset.dimension.Alue.category.label;
  var value1 = user.dataset.value;
  var value2 = data.dataset.value;
  for (let i in name) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    tr.className = "tcell";
    td1.innerHTML = name[i];

    td2.innerHTML = value1[j];

    td3.innerHTML = value2[j];

    var rate = (2, (value2[j] / value1[j]) * 100).toFixed(2);
    td4.innerHTML = rate + "%";

    for (var w = 0; w < 310; w++) {
      if (j === 2 * w + 1) {
        tr.className = "even";
        break;
      }
      if (j === 2 * w) {
        tr.className = "odd";
        break;
      }
    }
    if (rate > 45) {
      tr.className = "over";
    }
    if (rate < 25) {
      tr.className = "less";
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    usersTable.appendChild(tr);
    j++;
  }
});
