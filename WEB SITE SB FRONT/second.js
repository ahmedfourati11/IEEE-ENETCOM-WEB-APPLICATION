document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventIndex = urlParams.get('index');

    const allEvents = JSON.parse(localStorage.getItem('allEvents')) || [];
    const eventToUpdate = allEvents[eventIndex];

    if (eventToUpdate) {
        document.getElementById('eventTitle').value = eventToUpdate.title;
        document.getElementById('eventDescription').value = eventToUpdate.description;
        document.getElementById('eventPrise').value = eventToUpdate.prise;
        document.getElementById('eventCreator').value = eventToUpdate.creator;
        // Autres champs du formulaire
    }

    document.getElementById('eventForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('eventTitle').value;
        const description = document.getElementById('eventDescription').value;
        const prise = document.getElementById('eventPrise').value;
        const creator = document.getElementById('eventCreator').value;
        // Autres champs du formulaire

        allEvents[eventIndex] = { title, description, prise, creator };
        
        localStorage.setItem('allEvents', JSON.stringify(allEvents));

        window.location.href = 'third.html';
    });
});