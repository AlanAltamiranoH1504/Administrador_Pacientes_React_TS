export const formatoFecha = (fecha: Date) => {
    return Intl.DateTimeFormat('es-MX', {
        year: "numeric",
        month: "long",
        day: "2-digit",
    }).format(fecha);
}