const formulario = document.getElementById('form');

const nombre = document.getElementById('firstName');
const monto = document.getElementById('amount');
const cuotas = document.getElementById('fees');

const montoFinal = document.getElementById('finalAmount');
const cuotasFinales = document.getElementById('finalFees');
const totalADevolver = document.getElementById('totalAmount');

const tasa = 0.01; // 1%

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  obtenerCuota();
});

const obtenerCuota = () => {
  const cuotaPrestamo = tasa * monto.value / (1 - (1+tasa)** -cuotas.value);
  obtenerTotal(cuotaPrestamo);
};

const obtenerTotal = (cuotaPrestamo) => {
  const total = Math.ceil(cuotaPrestamo) * cuotas.value;
  pintarCantidad(total);
};

const pintarCantidad = (total) => {
  montoFinal.innerText = monto.value;
  cuotasFinales.innerText = cuotas.value;
  totalADevolver.innerText = total;
};





































// Validaciones:

// Obtenemos todos los form que necesitamos validar
const forms = document.querySelectorAll('.needs-validation')

// Iteramos sobre ellos y evitamos el comportamiento por default y la propagación del evento
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
});



