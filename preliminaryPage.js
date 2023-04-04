var Usrdata = document.querySelector(".box");

var userDetail = [
  {
    name: "sunil",
    location: "githunguri,Kiambu",
  },
  {
    name: "sujan",
    location: "githunguri,Kiambu",
  },
  {
    name: "abishek",
    location: "githunguri,Kiambu",
  },
//   {
//     name: "chiranjeev",
//     location: "githunguri,Kiambu",
//   },
//   {
//     name: "sunil",
//     location: "githunguri,Kiambu",
//   },
//   {
//     name: "sujan",
//     location: "githunguri,Kiambu",
//   },
//   {
//     name: "abishek",
//     location: "githunguri,Kiambu",
//   },
//   {
//     name: "chiranjeev",
//     location: "githunguri,Kiambu",
//   },
];

  document.getElementById("test1").innerHTML = userDetail
    .map(
      (user) =>
        `<div style='border: 1px solid #E4E7EC;
                    border-radius: 5px;
                    background-color: white;
                    display: flex;
                    flex-direction: row;
                    margin-top: 10px;
                    width: 99%'>
            <div style='display: flex;
                    flex-direction: column;
                    width: 100%'>
                <span style='font-size:15px;font-weight:600;color:#475467;line-height:24px;padding-inline:15px;margin-top:5px;'> ${user.name}</span>
                <span style='font-size:12px;font-weight:600;color:#475467;line-height:24px;padding-inline:15px;margin-bottom:8px'> ${user.location}</span>
            </div>
            <div>
                <span class="glyphicon">&#xe258;</span>
            </div>
        </div>`
    )
    .join("");


    