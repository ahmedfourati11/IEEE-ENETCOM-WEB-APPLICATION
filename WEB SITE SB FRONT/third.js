var activities=[]
// fetch('').then(data =>JSON.parse(data.body)).then(res=> console.log(res))
fetch('http://localhost:3000/activities/all').then(data => data.json()).then(res =>{
    activities=[...res]
    generateActivities()
});
function generateActivities(){
    console.log(activities);
    activities.forEach(activity =>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent=activity.title
        tr.appendChild(td1);
        tableBody.appendChild(tr)
    })
}
// const json = await response.json();
// console.log(json);

      const allEvents = JSON.parse(localStorage.getItem('allEvents')) || [];

      const tableBody = document.querySelector('#eventsTable tbody');
      allEvents.forEach((eventData, index) => {
          const row = tableBody.insertRow();
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${eventData.creator}</td>
              <td>${eventData.title}</td>
              <td>${eventData.prise}</td>
              <td>
                  <img src="https://cdn.icon-icons.com/icons2/841/PNG/512/flat-style-circle-edit_icon-icons.com_66939.png" onclick="modifier(${index})" alt="Modifier" class="icon">
                  <img src="https://us.123rf.com/450wm/arhimicrostok/arhimicrostok1706/arhimicrostok170600362/79549735-ic%C3%B4ne-de-poubelle-supprimer-d%C3%A9placer-dans-la-corbeille-effacer-l-espace-disque-illustration.jpg" onclick="supprimer(${index})" alt="Supprimer" class="icon">
              </td>
          `;
      });

      function supprimer(index) {
          allEvents.splice(index, 1);
          localStorage.setItem('allEvents', JSON.stringify(allEvents));
          window.location.reload();
      }

      function modifier(index) {
          const eventToUpdate = allEvents[index];
          sessionStorage.setItem('eventToUpdate', JSON.stringify(eventToUpdate));
          window.location.href = `second.html?index=${index}`;
      }