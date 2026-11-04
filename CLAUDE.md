# Heladería App (Artisanal-ice-cream)

Sistema interno (no para clientes) de una heladería artesanal en Bolivia (moneda: Bs).
Usuarios: administración (la dueña) y colaboradores. Interfaz y mensajes en español.
Usar siempre el término "colaborador", nunca "trabajadora".

## Stack

React 19 + TypeScript + Vite · React Router · TanStack Query · Supabase (Postgres, Auth, RLS,
Edge Functions) · Dexie (cola sin conexión) · vite-plugin-pwa · Vitest + Testing Library ·
pgTAP · Playwright · Oxlint + Prettier + Husky.

## Entornos

Sin Docker (no hay permisos de administrador). UN SOLO proyecto Supabase: Artisanal-ice-cream
(enlazado con supabase link; variables en .env.local) para desarrollo, pruebas (rama develop) y
producción (rama main). El día del lanzamiento se limpia con db:reset y se rotan secret key,
contraseña de la BD y contraseña de admin. El código es el mismo en todos; solo cambian variables.
Comandos de base: db:push (aplicar migraciones), db:reset (borra TODO: solo antes del lanzamiento
y si nadie prueba; prohibido después), db:types, db:test, fn:deploy (--use-api, sin Docker).
Después del lanzamiento: revisar cada migración antes de aplicarla; las pruebas automáticas nunca
escriben en la base real.

## Reglas de la base de datos

- Todo cambio de estructura es una migración nueva en supabase/migrations. Nunca editar una
  migración ya aplicada en pruebas o producción. No crear tablas desde el panel de Supabase.
- RLS activado en TODAS las tablas, con pruebas pgTAP en supabase/tests.
- Dinero: numeric(10,2). Fechas: timestamptz con default now(). Ids: uuid.
- Nombres de tablas y columnas en español, snake_case.
- Pedidos cancelados se BORRAN (no se guardan).
- Usuarios sin correo: usuario@heladeria.local. Sin registro público; las cuentas las crea la
  administración vía la Edge Function crear-usuario.

## Reglas del frontend

- Estructura por funcionalidad en src/features/<modulo>.
- Las pantallas no llaman a Supabase directo: usan funciones de datos del módulo.
- Variables VITE_ son públicas. La secret key nunca va en el frontend.
- Precios de vaso 5, 8 y 10 Bs; empanada 5 Bs. Cuatro temas: Clásico, Oscuro, Noche, Fresa y menta.
- Referencia funcional: Prototype/index.html. Guía de pasos: docs/guia-desarrollo.html.

## Forma de trabajo

- El usuario ejecuta los comandos y configura páginas web; Claude escribe el código y lo explica.
- Ramas feature/* → PR a develop → PR a main. Conventional Commits en español.
- Antes de dar algo por terminado: npm run lint, npm run test:run, npm run db:test.
- Terminal: PowerShell en Windows, ruta del proyecto C:\Users\Juan.Huanca\Desktop\Mokups\System-ice.
