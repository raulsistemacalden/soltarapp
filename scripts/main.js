// ============================================
// SISTEMA DE COOKIES COMPLETO - SOLTAR.APP
// ============================================

console.log("WALO: Sistema de cookies cargado");

// Verificar si ya aceptó
var cookiePrefs = localStorage.getItem("soltarCookiePrefs");
if (cookiePrefs) {
    console.log("WALO: Usuario ya configuró cookies");
} else {
    // Mostrar banner después de 1 segundo
    setTimeout(mostrarBanner, 1000);
}

function mostrarBanner() {
    if (document.getElementById('soltar-cookie-banner')) {
        return;
    }

    // Crear banner
    var banner = document.createElement('div');
    banner.id = 'soltar-cookie-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <div class="cookie-text">
                <p><strong>Gestionamos tu privacidad.</strong> Usamos cookies para mejorar tu experiencia en SOLTAR.app. Al continuar, aceptas nuestra política de privacidad.</p>
            </div>
            <div class="cookie-buttons">
                <button id="btn-cookie-settings" class="btn-secondary">Configurar</button>
                <button id="btn-cookie-accept-all" class="btn-primary">ACEPTAR TODO</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Eventos
    document.getElementById('btn-cookie-settings').onclick = abrirModal;
    document.getElementById('btn-cookie-accept-all').onclick = aceptarTodo;
}

function abrirModal() {
    if (document.getElementById('cookie-modal')) return;
    
    var modal = document.createElement('div');
    modal.id = 'cookie-modal';
    modal.innerHTML = `
        <div class="cookie-modal-overlay"></div>
        <div class="cookie-modal-content">
            <div class="cookie-modal-header">
                <h2>Centro de Privacidad</h2>
                <button class="cookie-modal-close" id="btn-modal-close">&times;</button>
            </div>
            
            <div class="cookie-modal-body">
                <p class="cookie-intro">Respetamos tu privacidad. Aquí puedes elegir qué cookies aceptas.</p>
                
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <div class="cookie-category-info">
                            <h3>🔒 Cookies Necesarias</h3>
                            <p>Esenciales para el funcionamiento del sitio. No se pueden desactivar.</p>
                        </div>
                        <label class="cookie-toggle disabled">
                            <input type="checkbox" checked disabled>
                            <span class="cookie-slider"></span>
                        </label>
                    </div>
                </div>
                
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <div class="cookie-category-info">
                            <h3>📊 Cookies Analíticas</h3>
                            <p>Nos ayudan a entender cómo usas el sitio para mejorarlo.</p>
                        </div>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="toggle-analytics" checked>
                            <span class="cookie-slider"></span>
                        </label>
                    </div>
                </div>
                
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <div class="cookie-category-info">
                            <h3>🎯 Cookies de Marketing</h3>
                            <p>Usadas para mostrarte contenido y anuncios relevantes.</p>
                        </div>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="toggle-marketing">
                            <span class="cookie-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="cookie-modal-footer">
                <button id="btn-reject-all" class="btn-text">Rechazar todo</button>
                <div class="cookie-modal-actions">
                    <button id="btn-save-prefs" class="btn-secondary">Guardar preferencias</button>
                    <button id="btn-accept-all-modal" class="btn-primary">Aceptar todo</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Eventos del modal
    document.getElementById('btn-modal-close').onclick = cerrarModal;
    document.querySelector('.cookie-modal-overlay').onclick = cerrarModal;
    document.getElementById('btn-reject-all').onclick = rechazarTodo;
    document.getElementById('btn-save-prefs').onclick = guardarPreferencias;
    document.getElementById('btn-accept-all-modal').onclick = aceptarTodoModal;
}

function cerrarModal() {
    var modal = document.getElementById('cookie-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function aceptarTodo() {
    var prefs = {
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem("soltarCookiePrefs", JSON.stringify(prefs));
    console.log("WALO: Usuario aceptó todas las cookies", prefs);
    
    ocultarBanner();
}

function ocultarBanner() {
    var banner = document.getElementById('soltar-cookie-banner');
    if (banner) {
        banner.remove();
    }
}

function aceptarTodoModal() {
    aceptarTodo();
    cerrarModal();
}

function rechazarTodo() {
    var prefs = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem("soltarCookiePrefs", JSON.stringify(prefs));
    console.log("WALO: Usuario rechazó cookies opcionales", prefs);
    
    ocultarBanner();
    cerrarModal();
}

function guardarPreferencias() {
    var analytics = document.getElementById('toggle-analytics').checked;
    var marketing = document.getElementById('toggle-marketing').checked;
    
    var prefs = {
        necessary: true,
        analytics: analytics,
        marketing: marketing,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem("soltarCookiePrefs", JSON.stringify(prefs));
    console.log("WALO: Preferencias guardadas", prefs);
    
    ocultarBanner();
    cerrarModal();
}

// SOLTAR - CAMBIAR FONDOS A VERDE
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.setProperty('--color-background-primary', '#6da16e', 'important');
    document.documentElement.style.setProperty('--color-background-secondary', '#6da16e', 'important');
    document.documentElement.style.setProperty('--color-background-tertiary', '#6da16e', 'important');
});