// PDF BUILDER — Nachrichten & Medien (B2.1 · Lecția 5)
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" — Andreea &amp; Florian urmăresc știrile</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Privește știrile · Berlin</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Weltgeschehen · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">München</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Oranienburg</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Nachrichten & Medien: Konjunktiv I + indirekte Rede</h1>` + t;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function mcBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q"><strong>${it.question}</strong></div><div class="options">`;
            it.options.forEach((opt, oi) => {
                const letter = String.fromCharCode(65 + oi);
                const isRight = opt === it.correct;
                h += `<div class="${isRight ? 'right' : ''}">${letter}. ${opt}${isRight ? ' ✓' : ''}</div>`;
            });
            h += `</div><div class="ex-explanation">${it.explanation || ''}</div></div></div>`;
        });
        return h + `</div>`;
    }

    function translateBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>
            <table><thead><tr><th style="width:50%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
        data.forEach(it => {
            h += `<tr><td class="ro-text">${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
        });
        h += `</tbody></table></div>`;
        return h;
    }

    function diktatBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q"><strong style="color:#047857">${it.text}</strong></div><div class="ex-explanation">🇷🇴 ${it.ro}</div></div></div>`;
        });
        return h + `</div>`;
    }

    function orderBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">🔀 ${it.sentence}</div><div class="ex-a">${it.correct}</div>${it.translation ? `<div class="ex-explanation">${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;
        if (typeof ex1Data !== 'undefined') {
            html += fillInBlock('Übung 1 — Bildung Konjunktiv I', 'Verbstamm + -e (er mache, er habe) · modale er könne/müsse · sein → er sei. Persoana a 3-a sg.', ex1Data);
        }
        if (typeof ex2Data !== 'undefined') {
            html += fillInBlock('Übung 2 — Direkte → Indirekte Rede', 'Vorbirea directă (persoana I) → Konjunktiv I la persoana a 3-a (er sei / habe / komme).', ex2Data);
        }
        if (typeof ex3Data !== 'undefined') {
            html += fillInBlock('Übung 3 — KI oder KII? (Regula de aur) ⭐', 'Pers. a 3-a sg → KI · plural unde KI = Indikativ → KII (hätten, wollten, blieben). sein → seien.', ex3Data);
        }
        if (typeof ex4Data !== 'undefined') {
            html += fillInBlock('Übung 4 — Indirekte Fragen ⭐', 'Întrebare da/nu → ob · cu W- → W-Wort. Verbul la final, în Konjunktiv I.', ex4Data);
        }
        if (typeof ex5Data !== 'undefined') {
            html += diktatBlock('Übung 5 — Diktat (Hörverstehen, vocea Claudiei)', 'Știri în Konjunktiv I — atenție la sei / habe / werde / müsse și la plural (hätten).', ex5Data);
        }
        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele lecției — Präsens · Präteritum · Perfekt · 🗣️ Konjunktiv I</h1>
            <div class="andreea-note">
                <div class="andreea-note-content">
                    <div class="speaker">📌 Andreea îți spune:</div>
                    <div>Steaua lecției = Konjunktiv I (caseta indigo 🗣️), modul vorbirii indirecte. La persoana a 3-a sg = Verbstamm + -e (er sage, er habe). Verbul sein e special (er sei, la toate persoanele). Regula de aur: când KI arată ca Indikativul (sie haben), treci la Konjunktiv II (sie hätten). Toate verificate pe PONS.</div>
                </div>
            </div>`;
        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                let badgeClass = 'weak', badgeLabel = 'REGULAT';
                if (v.typ && v.typ.indexOf('tare') === 0) { badgeClass = 'strong'; badgeLabel = 'TARE (neregulat)'; }
                else if (v.typ && v.typ.indexOf('aux') === 0) { badgeClass = 'aux'; badgeLabel = 'AUXILIAR (neregulat)'; }
                else if (v.typ && v.typ.indexOf('modal') === 0) { badgeClass = 'modal'; badgeLabel = 'MODAL (neregulat)'; }
                const auxClass = v.aux === 'sein' ? 'sein' : 'haben';
                html += `<div class="verb-card">
                    <div class="vh"><span class="name">${idx + 1}. ${v.inf}</span><span class="ro">— ${v.ro}</span>
                        <span class="badge ${badgeClass}">${badgeLabel}</span>
                        <span class="badge ${auxClass}">Perfekt + ${v.aux}</span></div>
                    ${v.partizip ? `<div class="partizip-box"><div class="de">🗣️ ${v.partizip}</div>${v.partiznote ? `<div class="ro">${v.partiznote}</div>` : ''}</div>` : ''}
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => { html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`; });
                html += `</tbody></table>`;
                if (v.praet) {
                    html += `<h5>Präteritum (imperfect)</h5><table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                    v.praet.forEach(row => { html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`; });
                    html += `</tbody></table>`;
                }
                if (v.perf && v.part) {
                    const perfRow = v.perf[2] || v.perf[0];
                    const subj = v.impersonal ? 'es' : 'er';
                    html += `<h5>Perfekt (pe scurt)</h5><div class="perfekt-box">
                        <div class="de">Auxiliar <strong>${v.aux}</strong> + participiul <strong>${v.part}</strong></div>
                        <div class="de" style="margin-top:3px">Exemplu: ${perfRow[0] || subj} <strong>${perfRow[1]}</strong></div>
                        <div class="ro">${perfRow[2]}</div></div>`;
                }
                if (v.note) html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                html += `</div>`;
            });
        }
        return html;
    }
})();
