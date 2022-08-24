/** Validación de cuit/cuil */
export const cuitCuil = /^[0-9]{11}$/

/** Validación de nomenclatura */
export const nomenclaturas = /^(([0-9]{2}-[a-zA-Z0-9]{2}-[0-9]{2}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4})|([a-zA-Z0-9]{14}))$/

/** Validación de Licencia Comercial */
export const licencia = /^[0-9]*$/

/** Validación de patentes */
export const patentes =
    /^([A-Za-z]{1}[0-9]{3}[A-Za-z]{3})|([A-Za-z]{2}[0-9]{3}[A-Za-z]{2})|([0-9]{3}[A-Za-z]{3})|([A-Za-z]{3}[0-9]{3})$/

/** Validación nula */
export const sinValidacion = /^$/
