import { licencia, nomenclaturas, patentes, sinValidacion } from './validations'

/** Inteface de los tributos seleccionables */
export interface Tax {
    value: string
    description: string
    pattern: RegExp
    placeholder?: string
    example: string
}

/**
 * taxes<Tax[]>
 * @property value: string
 * @property description: string
 * @property pattern: Regex
 * @property placeholder: string
 * @property example: string
 */
export const taxes: Tax[] = [
    {
        value: '01',
        description: 'Nomenclatura',
        pattern: nomenclaturas,
        placeholder: 'Nomenclatura',
        example: 'Ejemplo de nomenclatura: 00-00-00-0000-0000 o sin guiones.',
    },
    {
        value: '02',
        description: 'Licencia Comercial',
        pattern: licencia,
        placeholder: 'Licencia comercial',
        example: 'Ejemplo de Licencia: 1234',
    },
    {
        value: '03',
        description: 'Patente',
        pattern: patentes,
        placeholder: 'Patente del vehículo',
        example: 'Ejemplo de patente automóvil: ABC123 ó AB123CD, Moto: 123ABC ó A123BCD.',
    },
    {
        value: 'AA',
        description: 'Número de recibo',
        pattern: licencia,
        placeholder: 'Número de recibo',
        example: 'El número de recibo se encuentra en la parte superior derecha del mismo.',
    },
    {
        value: '13',
        description: 'Rentas Varias',
        pattern: sinValidacion,
        example: 'Cadena vacia.',
    },
]

/**
 * Busca la regex acorde al valor de un tributo
 * @param key string
 * @returns Regex
 */
export const getPattern = (key: string): RegExp => {
    return taxes.find((tributo) => tributo.value === `${key}`)?.pattern!
}

/**
 * Busca el placeholder acorde al valor de tributo
 * @param key string
 * @returns placeholder para el input de busqueda
 */
export const getPlaceholder = (key: string) => {
    const placeholder = taxes.find((tributo) => tributo.value === `${key}`)?.placeholder!
    return placeholder ? placeholder : 'Falta definir'
}

/**
 * Busca el tooltip acorde al valor de tributo
 * @param key string
 * @returns ejemplo de busqueda
 */
export const getExample = (key: string) => {
    const example = taxes.find((tributo) => tributo.value === key)?.example
    return example ? example : 'Falta definir'
}
