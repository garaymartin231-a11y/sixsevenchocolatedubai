/**
 * Encuesta: papel artesanal de yerba mate — Grupo 04, UADE 2026
 *
 * Cómo usarlo:
 *   1. Entrá a https://script.google.com y tocá "Nuevo proyecto".
 *   2. Borrá lo que haya y pegá todo este archivo.
 *   3. Arriba elegí la función "crearEncuesta" y tocá "Ejecutar".
 *   4. Aceptá los permisos (es tu propia cuenta de Google).
 *   5. En "Registro de ejecución" aparecen el link para editar y el link público.
 *
 * Basada en: entrevistas E1 (imprenta, Mariano Longobardi), E2 (artista,
 * Elian Quiroga), E3 (experto papelero, Sebastián Inler) y la conclusión
 * final: público objetivo = artista, diseñador e ilustrador que trabaja sobre papel.
 *
 * Precio: método Van Westendorp (4 preguntas abiertas). Para comparar con el
 * mercado, precios online de octubre 2026:
 *   Canson XL Aquarelle A4 300 g (30 hojas) ≈ $25.000  → ≈ $830 por hoja
 *   Canson Montval A4 300 g (12 hojas)      ≈ $18.500–22.000 → ≈ $1.600 por hoja
 */

function crearEncuesta() {
  var form = FormApp.create('Encuesta: papel para artistas e ilustradores');
  form.setDescription(
    '¡Hola! Somos estudiantes de Diseño de UADE y estamos desarrollando un papel ' +
    'artesanal sustentable pensado para artistas, ilustradores y diseñadores.\n\n' +
    'Queremos conocer cómo elegís, comprás y usás el papel. Te lleva unos 6 minutos, ' +
    'es anónima y no hay respuestas correctas o incorrectas. ¡Gracias por ayudarnos!'
  );
  form.setProgressBar(true);
  form.setCollectEmail(false);
  form.setConfirmationMessage(
    '¡Muchas gracias por tu tiempo! Tus respuestas nos ayudan a diseñar un papel que realmente te sirva.'
  );

  // ───────────── Filtro ─────────────
  var filtro = form.addMultipleChoiceItem()
    .setTitle('¿Dibujás, pintás, ilustrás o hacés diseño sobre papel, ya sea estudiando, por hobby o profesionalmente?')
    .setRequired(true);

  // ───────────── Sección 1: Perfil ─────────────
  var secPerfil = form.addPageBreakItem()
    .setTitle('Sobre vos')
    .setHelpText('Unas preguntas rápidas para conocerte.');

  filtro.setChoices([
    filtro.createChoice('Sí', secPerfil),
    filtro.createChoice('No', FormApp.PageNavigationType.SUBMIT)
  ]);

  opcionUnica(form, '¿En qué rango de edad estás?',
    ['Menos de 18', '18 a 24', '25 a 34', '35 a 44', '45 o más']);

  opcionUnica(form, '¿Dónde vivís?',
    ['CABA', 'Gran Buenos Aires', 'Otra provincia', 'Fuera de Argentina']);

  opcionUnica(form, '¿Cuál de estas opciones te describe mejor?',
    ['Estudio arte, diseño o ilustración',
     'Me dedico profesionalmente (vivo total o parcialmente de esto)',
     'Lo hago como hobby'], true);

  opcionUnica(form, '¿Con qué técnica trabajás principalmente?',
    ['Dibujo', 'Pintura', 'Ilustración', 'Grabado', 'Caligrafía / lettering',
     'Collage o técnicas con papel'], true);

  opcionUnica(form, '¿Hace cuánto que dibujás, pintás o ilustrás?',
    ['Menos de 1 año', 'Entre 1 y 3 años', 'Entre 3 y 6 años', 'Más de 6 años']);

  hastaN(form, '¿Con qué materiales trabajás sobre papel?', 3,
    ['Lápiz grafito', 'Lápices de color', 'Fibrones o marcadores', 'Tinta / estilógrafo',
     'Acuarela', 'Acrílico / témpera / gouache', 'Pasteles u óleo pastel', 'Carbonilla']);

  form.addCheckboxItem()
    .setTitle('¿Vendés tus obras o trabajos? Si vendés, ¿por dónde?')
    .setHelpText('Elegí todas las que correspondan.')
    .setChoiceValues(['No vendo', 'Ferias de diseño o arte', 'Por encargo / comisión (freelance)',
      'Online (Instagram, tienda propia, etc.)'])
    .showOtherOption(true)
    .setRequired(true);

  // ───────────── Sección 2: Hábitos de compra ─────────────
  form.addPageBreakItem()
    .setTitle('Cómo comprás papel');

  opcionUnica(form, '¿Con qué frecuencia comprás papel para tus trabajos u obras?',
    ['Todas las semanas', 'Cada 15 días', 'Una vez por mes', 'Cada 2 o 3 meses', 'Menos seguido']);

  hastaN(form, '¿Qué tipo de papel usás más?', 2,
    ['Papel para acuarela', 'Papel de dibujo (tipo Canson / Fabriano)', 'Papel para grabado',
     'Kraft o reciclado', 'Papel artesanal', 'Papel obra / de impresora común',
     'Cartón o cartulina'], true);

  opcionUnica(form, '¿Qué gramaje (grosor) usás habitualmente?',
    ['Menos de 120 g (como una hoja de impresora o un poco más)',
     'Entre 120 y 200 g (hoja de dibujo común)',
     'Entre 200 y 300 g (papel grueso)',
     'Más de 300 g (muy grueso, tipo acuarela profesional)',
     'No sé / no me fijo']);

  hastaN(form, '¿Dónde lo comprás habitualmente?', 2,
    ['Librería artística', 'Librería o papelería de barrio',
     'Librería de la facultad o cerca de donde estudio',
     'Online (Mercado Libre, tiendas web)', 'Ferias o productores independientes'], true);

  opcionUnica(form, '¿Cuánto gastás aproximadamente por mes en papel?',
    ['Menos de $10.000', 'Entre $10.000 y $25.000', 'Entre $25.000 y $50.000',
     'Entre $50.000 y $100.000', 'Más de $100.000']);

  opcionUnica(form, '¿Qué textura de papel preferís?',
    ['Lisa', 'Apenas texturada', 'Rugosa o con fibras visibles', 'Depende del trabajo / me da igual']);

  // ───────────── Sección 3: Experiencia y problemas ─────────────
  form.addPageBreakItem()
    .setTitle('Tu experiencia con el papel');

  form.addCheckboxItem()
    .setTitle('¿Qué problemas tuviste con el papel que usás?')
    .setHelpText('Elegí todas las que correspondan.')
    .setChoiceValues([
      'Se ondula o se dobla con agua, acuarela o acrílico',
      'Se levanta o se desgasta con la goma o el fibrón',
      'La tinta o el fibrón se corre, mancha o traspasa',
      'Se rompe o se desgarra',
      'Queda marcado el lápiz aunque lo borre',
      'No toma bien el color',
      'No tuve problemas'])
    .showOtherOption(true)
    .setRequired(true);

  opcionUnica(form, '¿Usaste alguna vez papel artesanal o hecho con fibras alternativas (reciclado, algodón, caña, etc.)?',
    ['Sí, lo uso habitualmente', 'Sí, alguna vez', 'No, nunca', 'No sé']);

  form.addCheckboxItem()
    .setTitle('¿Escaneás o imprimís tus obras hechas en papel?')
    .setHelpText('Elegí todas las que correspondan.')
    .setChoiceValues(['No', 'Las escaneo', 'Las imprimo en impresora propia',
      'Las imprimo en imprenta o gráfica'])
    .setRequired(true);

  opcionUnica(form, '¿Reutilizás o reciclás tus papeles de prueba?',
    ['Sí, siempre', 'A veces', 'No']);

  // ───────────── Sección 4: Valoración ─────────────
  form.addPageBreakItem()
    .setTitle('Qué valorás en un papel');

  form.addGridItem()
    .setTitle('¿Qué tan de acuerdo estás con cada afirmación?')
    .setRows([
      'Cuando compro papel, el precio es lo que más pesa en mi decisión',
      'Uso papeles baratos para practicar y reservo los profesionales para trabajos importantes o para vender',
      'Los papeles gruesos para técnicas húmedas (acuarela, acrílico) son demasiado caros',
      'Me importa mucho que el papel no se ondule ni se levante con agua o fibrones',
      'Prefiero un papel con textura o fibras visibles antes que uno liso y uniforme',
      'Elegiría un papel sustentable si costara lo mismo que uno común',
      'Pagaría un poco más por un papel sustentable',
      'Compro mis materiales cerca de donde vivo o estudio, por comodidad',
      'Antes de comprar un papel nuevo necesito probarlo o ver una muestra',
      'Desconfiaría de un papel hecho con materiales alternativos'])
    .setColumns(['Muy en desacuerdo', 'En desacuerdo', 'Neutral', 'De acuerdo', 'Muy de acuerdo'])
    .setRequired(true);

  var ranking = form.addGridItem()
    .setTitle('Ordená qué es lo más importante para vos al elegir un papel')
    .setHelpText('1 = lo más importante, 6 = lo menos importante. Usá cada número una sola vez.')
    .setRows(['Textura', 'Resistencia (que aguante agua, goma, fibrón)', 'Precio',
      'Gramaje (grosor)', 'Origen sustentable', 'Aspecto y color natural'])
    .setColumns(['1', '2', '3', '4', '5', '6'])
    .setRequired(true);
  ranking.setValidation(FormApp.createGridValidation()
    .setHelpText('Usá cada número una sola vez.')
    .requireLimitOneResponsePerColumn()
    .build());

  // ───────────── Sección 5: Concepto ─────────────
  form.addPageBreakItem()
    .setTitle('Nuestra idea')
    .setHelpText(
      'Imaginá un papel artesanal de alto gramaje (grueso, tipo papel de acuarela), ' +
      'hecho en Argentina a partir de residuos de yerba mate. Tiene un tono natural ' +
      'verde-amarronado y una textura con fibras visibles, por lo que cada hoja es única.');

  opcionUnica(form, '¿Qué tan probable es que compres este papel?',
    ['Definitivamente lo compraría', 'Probablemente lo compraría', 'Puede que sí, puede que no',
     'Probablemente no lo compraría', 'Definitivamente no lo compraría']);

  form.addCheckboxItem()
    .setTitle('¿Para qué lo usarías?')
    .setHelpText('Elegí todas las que correspondan.')
    .setChoiceValues(['Bocetos y prácticas', 'Obras terminadas o para vender',
      'Acuarela u otras técnicas húmedas', 'Lettering, tarjetas o papelería',
      'Encuadernación o cuadernos propios', 'No lo usaría'])
    .showOtherOption(true)
    .setRequired(true);

  hastaN(form, '¿Qué te frenaría a la hora de comprarlo?', 2,
    ['El precio', 'Que no aguante mi técnica', 'Que el tono o la textura cambie entre hojas',
     'Que no sirva para escanear o imprimir', 'No saber dónde conseguirlo',
     'Desconfianza en un material nuevo', 'Nada, lo compraría'], true);

  // Precio: Van Westendorp (4 preguntas abiertas, sin anclar con rangos ni referencias).
  form.addSectionHeaderItem()
    .setTitle('Precio')
    .setHelpText('Pensá en UNA hoja tamaño A4 (21 × 29,7 cm, como una hoja de impresora) de este papel. ' +
      'Respondé con un número en pesos, sin puntos ni signos (ej: 1200).');
  precio(form, '¿A qué precio te parecería tan CARA que no la comprarías?');
  precio(form, '¿A qué precio te parecería cara, pero igual considerarías comprarla?');
  precio(form, '¿A qué precio te parecería una buena compra (barata para lo que es)?');
  precio(form, '¿A qué precio te parecería tan BARATA que dudarías de su calidad?');

  hastaN(form, '¿En qué formato lo preferirías?', 2,
    ['Hojas sueltas', 'Block', 'Cuaderno o sketchbook', 'Pliego grande (para cortar)',
     'Pack de muestras de distintos gramajes'], true);

  hastaN(form, '¿Dónde te gustaría comprarlo?', 2,
    ['Librería artística', 'Librería de la facultad', 'Online (tienda web / Instagram)',
     'Mercado Libre', 'Ferias de diseño', 'Directo a quienes lo producen'], true);

  // ───────────── Cierre ─────────────
  form.addPageBreakItem()
    .setTitle('¡Última!');

  form.addParagraphTextItem()
    .setTitle('¿Hay algo que te gustaría que tenga un papel para artistas y hoy no encontrás?')
    .setRequired(false);

  form.addTextItem()
    .setTitle('¿Te gustaría probar una muestra gratis cuando esté lista? Dejanos tu mail o Instagram')
    .setHelpText('Opcional. Solo lo usamos para enviarte la muestra.')
    .setRequired(false);

  Logger.log('Link para editar: ' + form.getEditUrl());
  Logger.log('Link para compartir: ' + form.getPublishedUrl());
}

/** Opción única (círculos). */
function opcionUnica(form, titulo, opciones, conOtro, ayuda) {
  var item = form.addMultipleChoiceItem()
    .setTitle(titulo)
    .setChoiceValues(opciones)
    .setRequired(true);
  if (conOtro) item.showOtherOption(true);
  if (ayuda) item.setHelpText(ayuda);
  return item;
}

/** Respuesta numérica en pesos. */
function precio(form, titulo) {
  return form.addTextItem()
    .setTitle(titulo)
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Escribí solo el número, por ejemplo 1200.')
      .requireNumberGreaterThan(0)
      .build());
}

/** Casillas con un máximo de N respuestas. */
function hastaN(form, titulo, n, opciones, conOtro) {
  var item = form.addCheckboxItem()
    .setTitle(titulo)
    .setHelpText('Elegí hasta ' + n + '.')
    .setChoiceValues(opciones)
    .setRequired(true);
  if (conOtro) item.showOtherOption(true);
  item.setValidation(FormApp.createCheckboxValidation()
    .setHelpText('Elegí como máximo ' + n + ' opciones.')
    .requireSelectAtMost(n)
    .build());
  return item;
}
