# Sistema para Heladería Artesanal (prototipo)

Aplicación web de un solo archivo (`index.html`). No necesita instalación ni internet: se abre con doble clic en el navegador (también funciona en el celular). Es para uso interno: administradora y trabajadoras, no para clientes.

## Dos modos

- **Trabajadora**: solo ve *Anotar ventas*, *Caja* y *Sobrantes*.
- **Administradora** (PIN, por defecto `1234`): ve todo, incluido el estado de resultados.

Se cambia con el botón de arriba a la derecha.

## Módulos

| Módulo | Qué hace |
|---|---|
| **Anotar ventas** | Escritura rápida estilo WhatsApp (`10 canela leche, 8 frutilla, 3x5, 2 empanada, refresco, qr`) o botones de precio. Los sabores son opcionales. |
| **Caja** | Cada vendedora abre su caja con su monto inicial en monedas (en el puesto o en otro lugar). Pagos con la caja, retiros, y al cerrar: sobrantes + arqueo. |
| **Sobrantes** | Lo guardado en el refrigerador; al día siguiente se anota cuánto se recuperó. Lo perdido es merma y se valoriza al costo. |
| **Panel** | Ventas del día, cajas abiertas, utilidad del mes, alertas. |
| **Producción** | Lotes de helado y refresco de canela: insumos, litros, costo por litro. |
| **Compras y gastos** | Hielo, sal, garrafas, empanadas, insumos y otros. |
| **Personal** | Trabajadoras, pago diario (incluye almuerzo), jornada. |
| **Equipos** | Inventario, depreciación, roturas y reparaciones. |
| **Estado de resultados** | Automático para cualquier periodo; imprimir/PDF o Excel (CSV). Mermas, punto de equilibrio y rentabilidad por sabor. |

## Datos

Se guardan en el navegador de cada dispositivo (`localStorage`). Respaldo en **Configuración → Descargar respaldo**.
