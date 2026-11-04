// Se ejecuta antes de cada archivo de pruebas.
// Agrega comprobaciones para pantallas, como toBeInTheDocument().
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Desmonta lo que dibujó cada prueba, para que la siguiente empiece limpia
afterEach(() => cleanup())
