const m = {};
const input = document.getElementById('input');
const answer = document.getElementById('answer');

const txt = 'Enjoy the ride!<br/>~ <a href="https://tech.lgbt/@AtomicMaya">AtomicMaya</a>ASV-DC29';
answer.innerHTML = txt;
window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: ['#20c20e', '#0c8900', '#39ff13'],
    speed: 0.3,
    sizeVariations: 4,
    maxParticles: 150
  });
};
input.addEventListener('input', e =>{
  const handler = o => {
    if (o.status) {
      answer.classList.add('green');
      answer.innerHTML = `Good job! You got the flag!`;
    } else {
      answer.classList.add('red');
      answer.innerText = `Nope!`;
      
      setTimeout(()=>{
        answer.classList = '';
        answer.innerHTML = txt;
      }, 500);
    }
  }
  
  if (!m[0](e.target.value, handler)) {
    handler({status: false});
  }
});