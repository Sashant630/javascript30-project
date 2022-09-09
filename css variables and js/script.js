const inputs = document.querySelectorAll('.controls input');
// const input = document.querySelector('input');

function handleUpdate() {
    // console.log(this.dataset.sizing);
    const suffix = this.dataset.sizing || '';
    // console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));