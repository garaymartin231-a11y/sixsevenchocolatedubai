# Encuesta: papel artesanal de yerba mate

`crearEncuesta.gs` arma el Google Form completo con un clic.

## Cómo generar el Form

1. Entrá a <https://script.google.com> y tocá **Nuevo proyecto**.
2. Borrá lo que haya y pegá todo `crearEncuesta.gs`.
3. Elegí la función `crearEncuesta` y tocá **Ejecutar**. Aceptá los permisos.
4. En **Registro de ejecución** aparecen el link para editar y el link para compartir.
   El Form queda en tu Drive, y desde **Respuestas → Vincular a Hojas** lo conectás a un Sheet.

## Qué se analizó

- **Conclusión final** (Figma): el público objetivo es el artista, diseñador e ilustrador
  que trabaja a mano sobre papel. Se descartaron las imprentas.
- **E1, imprenta (Mariano Longobardi):** las texturas rugosas son un defecto para la láser.
  Solo se pregunta si escanean o imprimen, para medir ese riesgo.
- **E2, artista (Elian Quiroga):** sensibilidad al precio, papel barato para practicar y
  profesional para vender, problemas con fibrón y acrílico (se ondula o se levanta), compra
  por cercanía (barrio o facultad), le gusta la textura del reciclado y recomendó el alto
  gramaje para competir con el acuarela de 300 g.
- **E3, experto papelero (Sebastián Inler):** no prometer usos que el papel no aguante.
  Por eso el concepto no promete técnicas y se pregunta para qué lo usarían.
- **Los dos borradores del doc "encuestas"**: el de 14 preguntas y el de 24 preguntas.

## Comparación de versiones

| | Borrador corto (14) | Borrador largo (24) | **Versión final** |
|---|---|---|---|
| Filtro de público objetivo | No | Sí | Sí, y si contesta "No" la encuesta termina |
| Zona (CABA / GBA) | No | No | Sí (el FODA apunta a CABA) |
| Estudiante, profesional o hobby | No | No | Sí, para segmentar |
| Medios húmedos y gramaje | No | Sí | Sí |
| Problemas con el papel | No | Sí | Sí, más "no toma bien el color" (E2) |
| Afirmaciones (escala de acuerdo) | Sin afirmaciones | 10 propuestas | Las 10, en una sola grilla |
| Ranking de atributos | 5, sin gramaje | 6 | 6, con un número por columna (no se puede repetir) |
| Para qué lo usaría | No | No | Sí (advertencia de E3) |
| Precio | Rangos "$xxx" a definir | Rangos a definir | **Van Westendorp**, 4 preguntas abiertas |
| Gasto mensual | "$xxx" | A definir | Rangos reales de $10.000 a $100.000 |
| Lista para la muestra | No | Sí | Sí, opcional |

## Decisiones de diseño

- **Precio con Van Westendorp.** Preguntar "¿cuánto pagarías?" con rangos fijos ancla la
  respuesta y la tira para abajo. Las 4 preguntas (muy caro, caro, buena compra, tan barato
  que dudo) dan un **rango de precio aceptable** y un **precio óptimo**. Es el método estándar
  para un producto nuevo sin comparación directa. No se muestra precio de referencia para
  no anclar.
  - Para el análisis: descarten respuestas incoherentes (por ejemplo, "muy barato" mayor
    que "caro") y crucen el resultado con el precio por hoja del Canson XL 300 g A4
    (≈ $830) y del Montval 300 g A4 (≈ $1.600), según precios online de octubre 2026.
- **Intención de compra:** reporten el "top-2-box", es decir el % que eligió
  "Definitivamente" o "Probablemente lo compraría".
- **"Elegí hasta 2"** tiene validación real: el Form no deja marcar más.
- **El olor** salió de la lista de frenos porque no apareció en ninguna entrevista.
- **El concepto** describe el papel (alto gramaje, tono y fibras) sin prometer técnicas,
  porque falta el test de laboratorio.
- **Largo:** 31 preguntas cortas en 6 secciones, unos 6 a 8 minutos. Si hay que recortar,
  saquen primero "¿Reutilizás tus papeles de prueba?" y la pregunta abierta del final.

## Cruces que conviene hacer con los resultados

- Intención de compra × usa técnicas húmedas (acuarela o acrílico) × gasto mensual.
- Precio aceptable (Van Westendorp) × estudiante, profesional o hobby.
- "Prefiero textura" × "Desconfiaría de materiales alternativos": muestra si la textura
  rústica es una ventaja o un riesgo.
- Lugar de compra actual × dónde le gustaría comprarlo: define el canal de venta.
