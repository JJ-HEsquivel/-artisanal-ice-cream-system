# Sistema para Heladería Artesanal (prototipo)

Aplicación web de un solo archivo (`index.html`). No necesita instalación ni internet: se abre con doble clic en el navegador (también funciona en el celular).

## Módulos

| Módulo | Qué hace |
|---|---|
| **Panel** | Ventas del día, estado de caja, utilidad del mes, alertas (caja sin abrir, hielo o personal sin registrar). |
| **Vender** | Punto de venta: sabor → tamaño → cobrar (efectivo o QR), calcula el cambio. Incluye empanadas. |
| **Caja** | Apertura con monto inicial en monedas, retiros, arqueo al cierre con faltante/sobrante. |
| **Producción** | Lotes por sabor (base agua hervida o leche), insumos y su costo, costo por porción. |
| **Compras y gastos** | Hielo, sal, garrafas, empanadas, insumos y otros; si se pagó con dinero de la caja. |
| **Personal** | Empleadas, pago diario (incluye almuerzo), registro de jornada. |
| **Ventas externas** | Una chica sale con sabores a otro lugar: lo que llevó, lo que devolvió y el dinero que entregó. |
| **Equipos** | Inventario (cocina, refrigeradores, baldes, estantes, mesas, sillas, carpas), depreciación, roturas y reparaciones. |
| **Estado de resultados** | Se genera solo para cualquier periodo; se puede imprimir/PDF o exportar a Excel (CSV). Incluye punto de equilibrio y rentabilidad por sabor. |

## Datos

Se guardan en el navegador (`localStorage`). Para no perderlos, en **Configuración → Descargar respaldo**.
