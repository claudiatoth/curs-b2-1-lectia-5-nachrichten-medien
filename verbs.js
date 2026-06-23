// ============================================
// VERB-KONJUGATION - Nachrichten & Medien (B2.1 · Lecția 5)
// 10 verbe-cheie, fiecare cu LINIA NOUĂ „🗣️ Konjunktiv I" (er sage → trecut er habe gesagt).
// Badge: tare (rosu) · auxiliar (mov) · modal (cyan) · regulat (verde). Präteritum = IMPERFECT.
// REGULĂ: NU ghilimele/apostrofuri ASCII interne care rup string-urile single-quote!
// Câmpurile partizip/partiznote = linia de gramatică-vedetă (aici: Konjunktiv I).
// ============================================

const verbsData = [
    {
        inf: 'sagen', ro: 'a spune', typ: 'regulat', aux: 'haben', part: 'gesagt',
        partizip: 'Konjunktiv I: er sage · Vergangenheit: er habe gesagt', partiznote: 'Er sagte, er sage die Wahrheit. — verbul-cheie al vorbirii indirecte',
        praes: [['ich','sage','spun'],['du','sagst','spui'],['er/sie/es','sagt','spune'],['wir','sagen','spunem'],['ihr','sagt','spuneți'],['sie/Sie','sagen','spun']],
        praet: [['ich','sagte','spuneam'],['du','sagtest','spuneai'],['er/sie/es','sagte','spunea'],['wir','sagten','spuneam (noi)'],['ihr','sagtet','spuneați'],['sie/Sie','sagten','spuneau']],
        perf: [['ich','habe gesagt','am spus'],['du','hast gesagt','ai spus'],['er/sie/es','hat gesagt','a spus'],['wir','haben gesagt','am spus'],['ihr','habt gesagt','ați spus'],['sie/Sie','haben gesagt','au spus']],
        note: 'REGULAT. Steaua vorbirii indirecte: KI er sage; trecutul indirect er habe gesagt.'
    },
    {
        inf: 'sein', ro: 'a fi', typ: 'auxiliar neregulat', aux: 'sein', part: 'gewesen',
        partizip: 'Konjunktiv I: er sei (toate persoanele!) · Vergangenheit: er sei gewesen', partiznote: 'ich sei, du seist, er sei, wir seien, ihr seiet, sie seien — vedeta știrilor',
        praes: [['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt']],
        praet: [['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],['wir','waren','eram (noi)'],['ihr','wart','erați'],['sie/Sie','waren','erau']],
        perf: [['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']],
        note: 'AUXILIAR neregulat. Singurul verb cu Konjunktiv I distinct la TOATE persoanele — de aceea e cel mai folosit în presă.'
    },
    {
        inf: 'haben', ro: 'a avea', typ: 'auxiliar neregulat', aux: 'haben', part: 'gehabt',
        partizip: 'Konjunktiv I: er habe · Vergangenheit: er habe gehabt (și auxiliar: er habe gemacht)', partiznote: 'la plural „sie haben" = Indikativ → treci la KII „sie hätten"',
        praes: [['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']],
        praet: [['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],['wir','hatten','aveam (noi)'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']],
        perf: [['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']],
        note: 'AUXILIAR. KI er habe. Dublu util: formă proprie + auxiliar pentru trecutul indirect (er habe gesagt).'
    },
    {
        inf: 'werden', ro: 'a deveni / a fi (auxiliar)', typ: 'auxiliar neregulat', aux: 'sein', part: 'geworden',
        partizip: 'Konjunktiv I: er werde · Futur indirect: er werde kommen', partiznote: 'er werde die Reform umsetzen — auxiliarul viitorului indirect',
        praes: [['ich','werde','devin'],['du','wirst','devii'],['er/sie/es','wird','devine'],['wir','werden','devenim'],['ihr','werdet','deveniți'],['sie/Sie','werden','devin']],
        praet: [['ich','wurde','deveneam'],['du','wurdest','deveneai'],['er/sie/es','wurde','devenea'],['wir','wurden','deveneam (noi)'],['ihr','wurdet','deveneați'],['sie/Sie','wurden','deveneau']],
        perf: [['ich','bin geworden','am devenit'],['du','bist geworden','ai devenit'],['er/sie/es','ist geworden','a devenit'],['wir','sind geworden','am devenit'],['ihr','seid geworden','ați devenit'],['sie/Sie','sind geworden','au devenit']],
        note: 'AUXILIAR. KI er werde. Folosit pentru Futur indirect: Er sagte, er werde handeln.'
    },
    {
        inf: 'können', ro: 'a putea', typ: 'modal neregulat', aux: 'haben', part: 'gekonnt',
        partizip: 'Konjunktiv I: er könne · Vergangenheit: er habe ... können', partiznote: 'Er sagte, er könne das beweisen. — modal la pers. I și a 3-a sg',
        praes: [['ich','kann','pot'],['du','kannst','poți'],['er/sie/es','kann','poate'],['wir','können','putem'],['ihr','könnt','puteți'],['sie/Sie','können','pot']],
        praet: [['ich','konnte','puteam'],['du','konntest','puteai'],['er/sie/es','konnte','putea'],['wir','konnten','puteam (noi)'],['ihr','konntet','puteați'],['sie/Sie','konnten','puteau']],
        perf: [['ich','habe gekonnt','am putut'],['du','hast gekonnt','ai putut'],['er/sie/es','hat gekonnt','a putut'],['wir','haben gekonnt','am putut'],['ihr','habt gekonnt','ați putut'],['sie/Sie','haben gekonnt','au putut']],
        note: 'MODAL. KI er könne. La plural „sie können" = Indikativ → KII „sie könnten".'
    },
    {
        inf: 'müssen', ro: 'a trebui', typ: 'modal neregulat', aux: 'haben', part: 'gemusst',
        partizip: 'Konjunktiv I: er müsse · Vergangenheit: er habe ... müssen', partiznote: 'Der Minister sagte, man müsse handeln.',
        praes: [['ich','muss','trebuie (eu)'],['du','musst','trebuie (tu)'],['er/sie/es','muss','trebuie'],['wir','müssen','trebuie (noi)'],['ihr','müsst','trebuie (voi)'],['sie/Sie','müssen','trebuie (ei)']],
        praet: [['ich','musste','trebuia (eu)'],['du','musstest','trebuia (tu)'],['er/sie/es','musste','trebuia'],['wir','mussten','trebuia (noi)'],['ihr','musstet','trebuia (voi)'],['sie/Sie','mussten','trebuiau']],
        perf: [['ich','habe gemusst','a trebuit (eu)'],['du','hast gemusst','a trebuit (tu)'],['er/sie/es','hat gemusst','a trebuit'],['wir','haben gemusst','a trebuit (noi)'],['ihr','habt gemusst','a trebuit (voi)'],['sie/Sie','haben gemusst','au trebuit']],
        note: 'MODAL. KI er müsse. La plural „sie müssen" = Indikativ → KII „sie müssten".'
    },
    {
        inf: 'berichten', ro: 'a relata / a raporta', typ: 'regulat', aux: 'haben', part: 'berichtet',
        partizip: 'Konjunktiv I: er berichte · Vergangenheit: er habe berichtet', partiznote: 'Wie der Reporter berichtete, … — verb tipic de presă',
        praes: [['ich','berichte','relatez'],['du','berichtest','relatezi'],['er/sie/es','berichtet','relatează'],['wir','berichten','relatăm'],['ihr','berichtet','relatați'],['sie/Sie','berichten','relatează']],
        praet: [['ich','berichtete','relatam'],['du','berichtetest','relatai'],['er/sie/es','berichtete','relata'],['wir','berichteten','relatam (noi)'],['ihr','berichtetet','relatați'],['sie/Sie','berichteten','relatau']],
        perf: [['ich','habe berichtet','am relatat'],['du','hast berichtet','ai relatat'],['er/sie/es','hat berichtet','a relatat'],['wir','haben berichtet','am relatat'],['ihr','habt berichtet','ați relatat'],['sie/Sie','haben berichtet','au relatat']],
        note: 'REGULAT (radical pe -t → du berichtest, cu -e- de legătură). KI er berichte.'
    },
    {
        inf: 'erklären', ro: 'a declara / a explica', typ: 'regulat', aux: 'haben', part: 'erklärt',
        partizip: 'Konjunktiv I: er erkläre · Vergangenheit: er habe erklärt', partiznote: 'Die Sprecherin erklärte, sie erkläre den Plan.',
        praes: [['ich','erkläre','declar'],['du','erklärst','declari'],['er/sie/es','erklärt','declară'],['wir','erklären','declarăm'],['ihr','erklärt','declarați'],['sie/Sie','erklären','declară']],
        praet: [['ich','erklärte','declaram'],['du','erklärtest','declarai'],['er/sie/es','erklärte','declara'],['wir','erklärten','declaram (noi)'],['ihr','erklärtet','declarați'],['sie/Sie','erklärten','declarau']],
        perf: [['ich','habe erklärt','am declarat'],['du','hast erklärt','ai declarat'],['er/sie/es','hat erklärt','a declarat'],['wir','haben erklärt','am declarat'],['ihr','habt erklärt','ați declarat'],['sie/Sie','haben erklärt','au declarat']],
        note: 'REGULAT, prefix neseparabil er- → FĂRĂ ge-: erklärt. KI er erkläre.'
    },
    {
        inf: 'betonen', ro: 'a sublinia / a accentua', typ: 'regulat', aux: 'haben', part: 'betont',
        partizip: 'Konjunktiv I: er betone · Vergangenheit: er habe betont', partiznote: 'Er betonte, er betone die Bedeutung der Reform.',
        praes: [['ich','betone','subliniez'],['du','betonst','subliniezi'],['er/sie/es','betont','subliniază'],['wir','betonen','subliniem'],['ihr','betont','subliniați'],['sie/Sie','betonen','subliniază']],
        praet: [['ich','betonte','subliniam'],['du','betontest','subliniai'],['er/sie/es','betonte','sublinia'],['wir','betonten','subliniam (noi)'],['ihr','betontet','subliniați'],['sie/Sie','betonten','subliniau']],
        perf: [['ich','habe betont','am subliniat'],['du','hast betont','ai subliniat'],['er/sie/es','hat betont','a subliniat'],['wir','haben betont','am subliniat'],['ihr','habt betont','ați subliniat'],['sie/Sie','haben betont','au subliniat']],
        note: 'REGULAT, prefix neseparabil be- → FĂRĂ ge-: betont. KI er betone.'
    },
    {
        inf: 'fordern', ro: 'a cere / a revendica', typ: 'regulat', aux: 'haben', part: 'gefordert',
        partizip: 'Konjunktiv I: er fordere · Vergangenheit: er habe gefordert', partiznote: 'Die Opposition forderte, man solle mehr tun.',
        praes: [['ich','fordere','cer'],['du','forderst','ceri'],['er/sie/es','fordert','cere'],['wir','fordern','cerem'],['ihr','fordert','cereți'],['sie/Sie','fordern','cer']],
        praet: [['ich','forderte','ceream'],['du','fordertest','cereai'],['er/sie/es','forderte','cerea'],['wir','forderten','ceream (noi)'],['ihr','fordertet','cereați'],['sie/Sie','forderten','cereau']],
        perf: [['ich','habe gefordert','am cerut'],['du','hast gefordert','ai cerut'],['er/sie/es','hat gefordert','a cerut'],['wir','haben gefordert','am cerut'],['ihr','habt gefordert','ați cerut'],['sie/Sie','haben gefordert','au cerut']],
        note: 'REGULAT pe -ern → ich fordere. KI er fordere. Frecvent în titluri: Politiker fordert …'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em></p></div>';
}

function partizipBox(v) {
    if (!v.partizip) return '';
    return '<div class="theory-box" style="margin:8px 0; background:#e0e7ff; border-color:#4338ca;">' +
        '<h4>🗣️ Konjunktiv I (vorbire indirectă)</h4>' +
        '<p style="margin:0;"><strong>' + v.partizip + '</strong>' + (v.partiznote ? '<br><small style="color:#5A5147;">' + v.partiznote + '</small>' : '') + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale lecției</strong> — Präsens + Präteritum + Perfekt + <strong>🗣️ Konjunktiv I</strong> (vorbire indirectă).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Caseta indigo 🗣️ = inima lecției.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Caseta indigo 🗣️ e ce contează azi: Konjunktiv I, modul cu care redai ce a spus altcineva. La persoana a 3-a sg = Verbstamm + -e (er sage, er habe). Verbul sein e special (er sei, la toate persoanele). Și ține minte regula de aur: când KI arată ca Indikativul (sie haben), treci la Konjunktiv II (sie hätten)! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : (v.typ.indexOf('modal') === 0 ? '#0891b2' : '#047857'));
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            partizipBox(v) +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
