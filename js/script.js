// Data di ultimo aggiornamento nel footer
document.getElementById('lastUpdate').textContent =
  new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' });
