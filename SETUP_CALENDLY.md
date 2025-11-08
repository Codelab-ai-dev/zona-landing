# Configuración de Calendly para Demos

La integración de Calendly ya está implementada en el sitio. Solo necesitas configurar tu cuenta y actualizar la URL.

## Paso 1: Crear Cuenta en Calendly

1. Ve a [https://calendly.com](https://calendly.com)
2. Crea una cuenta gratuita o inicia sesión
3. Completa tu perfil (nombre, zona horaria, etc.)

## Paso 2: Crear un Evento de Demo

1. En el dashboard de Calendly, haz clic en **"+ New Event Type"**
2. Selecciona **"One-on-One"**
3. Configura tu evento:

### Configuración Recomendada:

**Información Básica:**
- **Nombre del evento**: Demo Zona Gol
- **Ubicación**: Google Meet o Zoom (Calendly se integra automáticamente)
- **Duración**: 25-30 minutos
- **Descripción**: 
  ```
  Conoce cómo Zona Gol puede ayudarte a profesionalizar tu liga deportiva.
  
  En esta demo verás:
  ✓ Gestión de calendarios y fixtures
  ✓ Sistema de resultados en vivo
  ✓ Comunicación automatizada
  ✓ Reportes y estadísticas
  
  Trae tus preguntas, ¡estamos aquí para ayudarte!
  ```

**Disponibilidad:**
- Configura tus horarios disponibles (ej: Lunes a Viernes, 9:00 - 18:00 hrs GDL)
- Establece un buffer entre reuniones (15 min recomendado)
- Define con cuánta anticipación pueden agendar (ej: mínimo 2 horas)

**Preguntas Personalizadas** (opcional pero recomendado):
- Nombre de tu liga/organización
- Número de equipos
- ¿Qué te gustaría lograr con Zona Gol?

## Paso 3: Obtener la URL de Calendly

1. En tu evento, haz clic en **"Copy Link"**
2. Tu URL se verá así: `https://calendly.com/tu-usuario/demo`

### Personalizar la URL (Recomendado):

Para una mejor experiencia, agrega estos parámetros:

```
https://calendly.com/tu-usuario/demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=667eea
```

**Parámetros útiles:**
- `hide_event_type_details=1` - Oculta detalles redundantes
- `hide_gdpr_banner=1` - Oculta el banner de GDPR
- `primary_color=667eea` - Usa el color primario de tu marca (sin #)
- `background_color=ffffff` - Color de fondo
- `text_color=333333` - Color del texto

## Paso 4: Actualizar la URL en el Sitio

Edita el archivo `/data/landing-content.ts` en la línea 422:

```typescript
calendarUrl: "https://calendly.com/tu-usuario/demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=667eea",
```

**Reemplaza** `tu-usuario` con tu nombre de usuario de Calendly.

## Paso 5: Personalizar Textos (Opcional)

Puedes personalizar los textos del modal en el mismo archivo:

```typescript
calendarTitle: "Agenda una demo guiada",
calendarDescription: "Selecciona un horario para conectar con nuestro equipo de implementación.",
calendarDuration: "Tiempo estimado: 25 minutos",
calendarCost: "Sin costo y sin tarjeta",
```

## Configuración Avanzada de Calendly

### Notificaciones por Email

1. Ve a **Account** > **Notifications**
2. Configura notificaciones para:
   - Nuevas reservas
   - Cancelaciones
   - Recordatorios (24h y 1h antes)

### Integraciones Recomendadas

**Google Calendar / Outlook:**
- Sincroniza automáticamente para evitar doble reserva
- Ve a **Account** > **Calendar Connections**

**Zoom / Google Meet:**
- Genera enlaces automáticos para videollamadas
- Ve a **Account** > **Integrations**

**CRM (Opcional):**
- HubSpot
- Salesforce
- Pipedrive

### Confirmación y Recordatorios

Calendly envía automáticamente:
- ✅ Email de confirmación inmediato
- ✅ Recordatorio 24 horas antes
- ✅ Recordatorio 1 hora antes
- ✅ Opción de reagendar o cancelar

## Planes de Calendly

### Plan Gratuito (Suficiente para empezar):
- 1 tipo de evento activo
- Integraciones básicas (Google Calendar, Zoom)
- Notificaciones por email
- Página de reserva personalizada

### Plan Essentials ($10/mes):
- Eventos ilimitados
- Eliminación de marca Calendly
- Recordatorios por SMS
- Más opciones de personalización

### Plan Professional ($15/mes):
- Todo lo anterior
- Múltiples calendarios
- Workflows automatizados
- Integraciones avanzadas

## Cómo se Ve para el Usuario

Cuando un visitante hace clic en **"Abrir calendario de demos"**:

1. Se abre un modal con el calendario embebido
2. Pueden ver tu disponibilidad en tiempo real
3. Seleccionan fecha y hora
4. Llenan sus datos
5. Reciben confirmación por email con enlace de videollamada

## Mejores Prácticas

✅ **Mantén tu calendario actualizado** - Sincroniza con Google Calendar
✅ **Responde rápido** - Envía un email de bienvenida después de cada reserva
✅ **Prepara tu demo** - Ten un script o checklist para las demos
✅ **Haz seguimiento** - Contacta a quienes no se presentaron
✅ **Pide feedback** - Mejora tu demo basándote en comentarios

## Alternativas a Calendly

Si prefieres otra herramienta:

### 1. **Cal.com** (Open Source, Gratis)
```typescript
calendarUrl: "https://cal.com/tu-usuario/demo",
```

### 2. **TidyCal** (Pago único de $29)
```typescript
calendarUrl: "https://tidycal.com/tu-usuario/demo",
```

### 3. **Savvycal** (Más profesional, $12/mes)
```typescript
calendarUrl: "https://savvycal.com/tu-usuario/demo",
```

Todas estas herramientas funcionan con el iframe actual, solo cambia la URL.

## Solución de Problemas

### El calendario no se muestra
- Verifica que la URL sea correcta
- Asegúrate de que el evento esté activo en Calendly
- Revisa la consola del navegador para errores

### El iframe está en blanco
- Calendly puede bloquear el embed si no está configurado
- Ve a **Account** > **Security** y habilita "Allow embedding"

### Los horarios no se muestran correctamente
- Verifica tu zona horaria en Calendly
- Asegúrate de tener disponibilidad configurada

## Recursos Adicionales

- [Documentación de Calendly](https://help.calendly.com)
- [Parámetros de URL de Calendly](https://help.calendly.com/hc/en-us/articles/223147027)
- [Calendly Embed Options](https://help.calendly.com/hc/en-us/articles/223195488)
