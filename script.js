//your JS code here. If required.
// Get elements
    const counterEl = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    let count = 0;

    incrementBtn.addEventListener('click', () => {
      alert(count); 
      count++; 
      counterEl.textContent = count; 
    });