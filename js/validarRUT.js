// Función para validar y formatear el RUT
function validarRUT(input) {
    // Eliminar puntos y guion antes de formatear
    let rut = input.value.replace(/\./g, '').replace('-', '');

    // Verificar que el cuerpo tenga al menos 7 dígitos
    if (rut.length < 8) { 
        mostrarError(input, true);
        return;
    }

    // Formatear el RUT agregando puntos y guion
    let cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1);
    input.value = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv.toUpperCase();

    // Proceder con la validación
    const dvUpper = dv.toUpperCase();
    let suma = 0;
    let multiplo = 2;

    for (let i = 1; i <= cuerpo.length; i++) {
        suma += multiplo * rut.charAt(cuerpo.length - i);
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    const dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

    // Validar el dígito verificador
    if (dvCalculado !== dvUpper) {
        mostrarError(input, true);
    } else {
        mostrarError(input, false);
    }
}

// Función para mostrar u ocultar el mensaje de error
function mostrarError(input, mostrar) {
    const error = document.getElementById('rutError');
    if (mostrar) {
        error.style.display = 'block';
        input.style.borderColor = 'red';
    } else {
        error.style.display = 'none';
        input.style.borderColor = '';
    }
}
