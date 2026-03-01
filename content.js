// content.js
// Intercepta la carga del calendario y redirige a la vista personalizada de 7 días, 
// forzando siempre el inicio en el viernes más reciente.

function getRecentFriday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Dom) a 6 (Sab)
    
    // Calcula cuántos días hay que restar para llegar al viernes más cercano en el pasado (o 0 si es viernes)
    const daysToSubtract = (dayOfWeek + 2) % 7; 
    
    const friday = new Date(today);
    friday.setDate(today.getDate() - daysToSubtract);
    
    return friday;
}

function enforceDowism() {
    const currentUrl = window.location.href;
    
    // Evita bucles infinitos: solo redirige si estamos en la vista de mes, semana o la vista principal por defecto.
    // Si ya estamos en un "customday", dejamos que el usuario navegue tranquilo.
    if (currentUrl.endsWith('calendar/u/0/r') || currentUrl.includes('/r/week') || currentUrl.includes('/r/month')) {
        
        const friday = getRecentFriday();
        const yyyy = friday.getFullYear();
        const mm = String(friday.getMonth() + 1);
        const dd = String(friday.getDate());
        
        // Construye la URL nativa de Google para la vista personalizada comenzando en ese viernes
        const viernistaUrl = `https://calendar.google.com/calendar/u/0/r/customday/${yyyy}/${mm}/${dd}`;
        
        window.location.replace(viernistaUrl);
    }
}

// Ejecutar al cargar la página
enforceDowism();