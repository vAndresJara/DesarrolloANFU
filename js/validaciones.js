// Validación y formateo del teléfono
function formatearTelefono(input) {
    let telefono = input.value.replace(/\D/g, ''); // Elimina todos los caracteres que no sean números

    // Solo aplicamos el formato si se han ingresado al menos 9 dígitos
    if (telefono.length >= 9) {
        input.value = '+56-' + telefono.slice(0, 1) + '-' + telefono.slice(1, 5) + '-' + telefono.slice(5, 9);
    } else {
        // Si hay menos de 9 dígitos, mostramos el número sin formato
        input.value = telefono;
    }
}

// Validación de correo electrónico
function validarCorreo(input) {
    const correo = input.value;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para el formato
    const error = document.getElementById('correoError');
    
    if (!correoValido.test(correo)) {
        error.style.display = 'block';
        input.style.borderColor = 'red';
    } else {
        error.style.display = 'none';
        input.style.borderColor = '';
    }
}
