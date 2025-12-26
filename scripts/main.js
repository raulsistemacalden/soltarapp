// WALO - INICIO DEL SCRIPT DE COOKIES
console.log("WALO: El script ha sido cargado por el navegador.");

setTimeout(function() {
    console.log("WALO: Iniciando intento de inyección tras 1 segundo...");

    // 1. Verificación de seguridad: ¿Ya existe el banner?
    if (document.getElementById('walo-cookie-banner')) {
        console.log("WALO: El banner ya existe. No hacemos nada.");
        return;
    }

    // 2. Verificación de aceptación previa
    var yaAcepto = localStorage.getItem("waloCookieAccepted");
    if (yaAcepto === "true") {
        console.log("WALO: Usuario ya aceptó antes. No mostramos nada.");
        return;
    }

    // 3. Crear el elemento DIV contenedor (Sin usar template literals complejos)
    var bannerDiv = document.createElement('div');
    bannerDiv.id = 'walo-cookie-banner';
    
    // 4. Insertar el HTML como una sola línea de texto para evitar errores de sintaxis
    bannerDiv.innerHTML = '<div class="cookie-content"><div class="cookie-text"><p><strong>Gestionamos tu privacidad.</strong> Usamos cookies para mejorar tu experiencia en SOLTAR.app. Al continuar, aceptas nuestra política de privacidad.</p></div><div class="cookie-buttons"><button id="btn-walo-close">Cerrar</button><button id="btn-walo-accept">ACEPTAR TODO</button></div></div>';

    // 5. Inyectarlo en el documento
    document.body.appendChild(bannerDiv);
    console.log("WALO: HTML inyectado exitosamente en el Body.");

    // 6. Configurar los botones (con un pequeño retraso para asegurar que el DOM los reconozca)
    setTimeout(function(){
        var btnAccept = document.getElementById("btn-walo-accept");
        var btnClose = document.getElementById("btn-walo-close");

        if(btnAccept) {
            btnAccept.onclick = function() {
                localStorage.setItem("waloCookieAccepted", "true");
                document.getElementById("walo-cookie-banner").style.display = "none";
                console.log("WALO: Aceptado y guardado.");
            };
        }

        if(btnClose) {
            btnClose.onclick = function() {
                document.getElementById("walo-cookie-banner").style.display = "none";
            };
        }
    }, 500);

}, 1000);// Espera 1000 milisegundos (1 segundo) antes de ejecutarse
// SOLTAR - CAMBIAR FONDOS A VERDE
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.setProperty('--color-background-primary', '#6da16e', 'important');
    document.documentElement.style.setProperty('--color-background-secondary', '#6da16e', 'important');
    document.documentElement.style.setProperty('--color-background-tertiary', '#6da16e', 'important');
});