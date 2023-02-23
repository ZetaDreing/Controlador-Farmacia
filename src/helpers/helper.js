export const generarId = ()=>{
    const random =Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

export const formatearFecha = fecha =>{
    const hoy = new Date()
    const fechaNueva = new Date(fecha);
    const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-Es',opciones)+' - '+ hora
}