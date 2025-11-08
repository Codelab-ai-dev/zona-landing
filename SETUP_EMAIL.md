# Configuración del Sistema de Email

Este documento explica cómo configurar el envío de emails para el formulario de contacto.

## Paso 1: Instalar Resend

```bash
npm install resend
```

## Paso 2: Obtener API Key de Resend

1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Ve a "API Keys" en el dashboard
4. Crea una nueva API key
5. Copia la API key

## Paso 3: Configurar Variables de Entorno

1. Crea un archivo `.env.local` en la raíz del proyecto:

```bash
RESEND_API_KEY=tu_api_key_aqui
```

2. **IMPORTANTE**: Nunca subas este archivo a Git. Ya está incluido en `.gitignore`.

## Paso 4: Configurar el Email de Destino

Edita el archivo `/app/api/contact/route.ts` y cambia:

```typescript
to: ["soporte@zona-gol.com"], // Cambia por tu email real
```

## Paso 5: Configurar el Dominio (Opcional pero Recomendado)

### Para Producción:

1. En Resend, ve a "Domains"
2. Agrega tu dominio (ejemplo: `zona-gol.com`)
3. Configura los registros DNS según las instrucciones
4. Una vez verificado, actualiza el `from` en `/app/api/contact/route.ts`:

```typescript
from: "Zona Gol <contacto@zona-gol.com>", // Tu dominio verificado
```

### Para Desarrollo:

Puedes usar el dominio de prueba de Resend:
```typescript
from: "Zona Gol <onboarding@resend.dev>",
```

**Nota**: Con el dominio de prueba, solo puedes enviar emails a tu propio email registrado en Resend.

## Paso 6: Probar el Formulario

1. Inicia el servidor de desarrollo:
```bash
npm run dev
```

2. Ve a la sección de contacto
3. Llena el formulario
4. Envía el mensaje
5. Revisa tu bandeja de entrada

## Alternativas a Resend

Si prefieres usar otro servicio de email, aquí hay algunas opciones:

### 1. **SendGrid** (Popular, plan gratuito de 100 emails/día)
```bash
npm install @sendgrid/mail
```

### 2. **Nodemailer con Gmail** (Gratis, usa tu cuenta de Gmail)
```bash
npm install nodemailer
```

### 3. **Amazon SES** (Muy económico para volumen alto)
```bash
npm install @aws-sdk/client-ses
```

## Solución de Problemas

### Error: "No se encuentra el módulo resend"
- Ejecuta: `npm install resend`

### Error: "Invalid API key"
- Verifica que la API key esté correctamente copiada en `.env.local`
- Reinicia el servidor de desarrollo

### Los emails no llegan
- Verifica tu carpeta de spam
- Si usas `onboarding@resend.dev`, solo puedes recibir emails en el email registrado en Resend
- Verifica que el dominio esté correctamente configurado

### Error 500 en producción
- Asegúrate de que la variable de entorno `RESEND_API_KEY` esté configurada en tu plataforma de hosting (Vercel, Netlify, etc.)

## Seguridad

- ✅ La API key está en variables de entorno (no en el código)
- ✅ El endpoint valida los datos antes de enviar
- ✅ Se usa HTTPS en producción
- ⚠️ Considera agregar rate limiting para evitar spam
- ⚠️ Considera agregar CAPTCHA para mayor seguridad

## Costos

**Resend Plan Gratuito:**
- 3,000 emails/mes
- 100 emails/día
- Perfecto para empezar

**Resend Plan Pago:**
- Desde $20/mes
- 50,000 emails/mes
- Soporte prioritario
