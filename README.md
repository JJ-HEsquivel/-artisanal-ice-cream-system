# Sistema para Heladería Artesanal (prototipo)

Aplicación web de un solo archivo (`index.html`). No necesita instalación ni internet: se abre con doble clic en el navegador (también funciona en el celular). Es para uso interno: administradora y colaboradores, no para clientes.

## Dos modos

- **Colaborador**: solo ve *Pedidos* y *Caja*.
- **Administradora** (PIN, por defecto `1234`): ve todo, incluido el estado de resultados.

Se cambia con el botón de arriba a la derecha.

## Módulos

| Módulo | Qué hace |
|---|---|
| **Pedidos** | *+ Nuevo pedido* → *+ Vaso*: sabores en botones redondos + precio → se agrega a la lista. Cada vaso se puede modificar o cancelar; también refresco y empanadas. El pedido queda *pendiente de cobro* hasta marcarlo pagado (efectivo/QR) o *invitado* (no se cobra; se anota para quién y su costo va al estado de resultados). Pestañas *En curso* e *Historial*, lo más reciente arriba. |
| **Caja** | Cada colaborador abre su caja con su monto inicial en monedas en un lugar de venta. La administradora ve todas las cajas abiertas. Reemplazos (baño, almuerzo) con entrega de ventas. No se cierra con pedidos sin cobrar. Botón **📄 Resumen PDF** (también al cerrar la caja) para que el colaborador se lo envíe a la administradora. |
| **Sobrantes** (solo administradora) | Lo guardado en el refrigerador; al día siguiente se anota cuánto se recuperó. Lo perdido es merma y se valoriza al costo. |
| **Panel** | Ventas del día, cajas abiertas, utilidad del mes, alertas. |
| **Producción** | Lotes de helado y refresco de canela: insumos, litros, costo por litro. |
| **Compras y gastos** | Hielo, sal, garrafas, empanadas, insumos y otros. |
| **Personal** | Colaboradores, pago diario (incluye almuerzo), jornada. |
| **Equipos** | Inventario, depreciación, roturas y reparaciones. |
| **Estado de resultados** | Automático para cualquier periodo; imprimir/PDF o Excel (CSV). Mermas, punto de equilibrio y rentabilidad por sabor. |

## Datos

Se guardan en el navegador de cada dispositivo (`localStorage`). Respaldo en **Configuración → Descargar respaldo**.

## Empezar de nuevo

Se hace en cada celular por separado (cada uno guarda sus propios datos), en cualquiera de los dos modos:

1. ☰ → **Configuración** → al final, abrir **Opciones avanzadas**.
2. Escribir `BORRAR` y tocar **Empezar de nuevo**. En modo administradora también se pide el PIN.
3. Opcional: marcar *Conservar sabores, precios, lugares de venta y colaboradores*.

El colaborador debería descargar antes el **📄 Resumen PDF** de sus cajas.

## Tema de colores

☰ → **Configuración** → **Tema de colores**: Clásico, Oscuro, Noche o Fresa y menta. Cada celular guarda el suyo.
