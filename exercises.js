// ============================================
// EXERCIȚII - Nachrichten & Medien (B2.1 · Lecția 5)
// Claudia Toth · 5 ex: Bildung KI · Direkt→Indirekt · ⚠️ KI oder KII · indirekte Fragen · Diktat
// Sursă DF: INT592-593. Diktat (Ex5) = audio cu VOCEA CLAUDIEI (audio/diktat-0N.wav).
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Bildung Konjunktiv I (formează forma er/sie/es)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Der Kanzler sagt, die Lage ____ ernst. (sein)', translation: 'Cancelarul spune că situația e gravă. — sein → er sei.', correct: 'sei', accept: ['sei'] },
    { id: 'b', sentence: 'Die Sprecherin erklärt, sie ____ keine Zweifel. (haben)', translation: 'Purtătoarea de cuvânt declară că nu are îndoieli. — haben → er/sie habe.', correct: 'habe', accept: ['habe'] },
    { id: 'c', sentence: 'Der Minister betont, man ____ mehr sparen. (müssen)', translation: 'Ministrul subliniază că trebuie economisit mai mult. — müssen → man müsse.', correct: 'müsse', accept: ['müsse', 'muesse'] },
    { id: 'd', sentence: 'Der Reporter sagt, er ____ live aus Berlin. (berichten)', translation: 'Reporterul spune că relatează live din Berlin. — berichten → er berichte.', correct: 'berichte', accept: ['berichte'] },
    { id: 'e', sentence: 'Die Zeitung schreibt, der Politiker ____ zurücktreten. (wollen)', translation: 'Ziarul scrie că politicianul vrea să demisioneze. — wollen → er wolle.', correct: 'wolle', accept: ['wolle'] },
    { id: 'f', sentence: 'Es heißt, die Wirtschaft ____ sich langsam. (erholen)', translation: 'Se spune că economia se redresează încet. — erholen → sie erhole.', correct: 'erhole', accept: ['erhole'] },
    { id: 'g', sentence: 'Der Experte sagt, es ____ eine einfache Lösung. (geben)', translation: 'Expertul spune că există o soluție simplă. — geben → es gebe.', correct: 'gebe', accept: ['gebe'] },
    { id: 'h', sentence: 'Die Polizei meldet, sie ____ den Fall genau. (untersuchen)', translation: 'Poliția anunță că cercetează cazul amănunțit. — untersuchen → sie untersuche.', correct: 'untersuche', accept: ['untersuche'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Bildung Konjunktiv I — formează forma de persoana a 3-a (er/sie/es).</strong><br>
        <em>Regula:</em> Verbstamm + <strong>-e</strong> (er mach<strong>e</strong>, er hab<strong>e</strong>) · modale: er könn<strong>e</strong>, müss<strong>e</strong> · sein → er <strong>sei</strong>.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex1-${it.id}" placeholder="Konjunktiv I (er …)">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}
function resetEx1() { buildEx1(); }

// ============================================
// EX 2: Direkte → Indirekte Rede (fill KI verb)
// ============================================
const ex2Data = [
    { id: 'a', sentence: '„Ich bin überzeugt." → Der Sprecher sagte, er ____ überzeugt. (sein)', translation: '„Sunt convins." → A spus că e convins. → sei.', correct: 'sei', accept: ['sei'] },
    { id: 'b', sentence: '„Das Problem hat viele Aspekte." → Die Politikerin sagte, das Problem ____ viele Aspekte. (haben)', translation: '→ habe.', correct: 'habe', accept: ['habe'] },
    { id: 'c', sentence: '„Ich kann das beweisen." → Der Mann sagte, er ____ das beweisen. (können)', translation: '→ könne.', correct: 'könne', accept: ['könne', 'koenne'] },
    { id: 'd', sentence: '„Die Reform kommt dieses Jahr." → Der Minister sagte, die Reform ____ dieses Jahr. (kommen)', translation: '→ komme.', correct: 'komme', accept: ['komme'] },
    { id: 'e', sentence: '„Ich weiß nichts davon." → Der Zeuge sagte, er ____ nichts davon. (wissen)', translation: '→ wisse.', correct: 'wisse', accept: ['wisse'] },
    { id: 'f', sentence: '„Wir müssen handeln." → Sie betonte, man ____ handeln. (müssen)', translation: '„man" = persoana a 3-a sg → müsse.', correct: 'müsse', accept: ['müsse', 'muesse'] },
    { id: 'g', sentence: '„Das Wetter wird besser." → Der Meteorologe sagte, das Wetter ____ besser. (werden)', translation: '→ werde.', correct: 'werde', accept: ['werde'] },
    { id: 'h', sentence: '„Ich gebe mein Bestes." → Die Sportlerin sagte, sie ____ ihr Bestes. (geben)', translation: '→ gebe.', correct: 'gebe', accept: ['gebe'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Direkte → Indirekte Rede. Trece spusele în Konjunktiv I.</strong><br>
        <em>Atenție:</em> verbul din vorbirea directă (persoana I) devine Konjunktiv I la persoana a 3-a (er/sie/es/man).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex2-${it.id}" placeholder="Konjunktiv I">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}
function resetEx2() { buildEx2(); }

// ============================================
// EX 3: ⚠️ KI oder KII? (Regula de aur)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Die Aktivisten sagten, sie ____ protestiert. (haben, plural!)', translation: 'KI „haben" = Indikativ → treci la KII: hätten.', correct: 'hätten', accept: ['hätten', 'haetten'] },
    { id: 'b', sentence: 'Der Minister sagte, er ____ zurücktreten. (wollen, sg.)', translation: 'Persoana a 3-a sg → KI: wolle.', correct: 'wolle', accept: ['wolle'] },
    { id: 'c', sentence: 'Die Zeugen sagten, sie ____ nichts gesehen. (haben, plural!)', translation: 'KI „haben" = Indikativ → KII: hätten.', correct: 'hätten', accept: ['hätten', 'haetten'] },
    { id: 'd', sentence: 'Die Sprecherin sagte, sie ____ optimistisch. (sein, sg.)', translation: 'Persoana a 3-a sg → KI: sei.', correct: 'sei', accept: ['sei'] },
    { id: 'e', sentence: 'Die Bürger forderten, sie ____ mehr Mitsprache. (wollen, plural!)', translation: 'KI „wollen" = Indikativ → KII: wollten.', correct: 'wollten', accept: ['wollten'] },
    { id: 'f', sentence: 'Der Kanzler betonte, er ____ alles unter Kontrolle. (haben, sg.)', translation: 'Persoana a 3-a sg → KI: habe.', correct: 'habe', accept: ['habe'] },
    { id: 'g', sentence: 'Die Reporter sagten, sie ____ vor Ort. (sein, plural)', translation: '„sein" la plural are KI distinct → seien (NU „sind").', correct: 'seien', accept: ['seien'] },
    { id: 'h', sentence: 'Die Demonstranten sagten, sie ____ friedlich. (bleiben, plural!)', translation: 'KI „bleiben" = Indikativ → KII: blieben.', correct: 'blieben', accept: ['blieben'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 KI sau KII? Regula de aur. ⭐</strong><br>
        <em>Cheia:</em> persoana a 3-a sg → <strong>Konjunktiv I</strong> · plural/pers. I unde KI = Indikativ → <strong>Konjunktiv II</strong> (hätten, wollten, blieben). Excepție: <strong>sein</strong> → seien (mereu KI).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex3-${it.id}" placeholder="forma corectă">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}
function resetEx3() { buildEx3(); }

// ============================================
// EX 4: Indirekte Fragen (ob / W-Wort + KI)
// ============================================
const ex4Data = [
    { id: 'a', sentence: '„Hast du Zeit?" → Er fragt, ob ich Zeit ____. (haben)', translation: 'Întrebare da/nu → ob + KI: habe.', correct: 'habe', accept: ['habe'] },
    { id: 'b', sentence: '„Wo warst du?" → Sie fragt, wo ich gewesen ____. (sein)', translation: 'W-Frage → wo + KI: sei.', correct: 'sei', accept: ['sei'] },
    { id: 'c', sentence: '„Kannst du kommen?" → Er will wissen, ob ich kommen ____. (können)', translation: 'ob + KI: könne.', correct: 'könne', accept: ['könne', 'koenne'] },
    { id: 'd', sentence: '„Wann beginnt die Sitzung?" → Der Reporter fragt, wann die Sitzung ____. (beginnen)', translation: 'wann + KI: beginne.', correct: 'beginne', accept: ['beginne'] },
    { id: 'e', sentence: '„Warum schweigt der Minister?" → Man fragt, warum der Minister ____. (schweigen)', translation: 'warum + KI: schweige.', correct: 'schweige', accept: ['schweige'] },
    { id: 'f', sentence: '„Hat der Zeuge alles gesehen?" → Der Richter fragt, ob der Zeuge alles gesehen ____. (haben)', translation: 'ob + KI Perfekt: habe.', correct: 'habe', accept: ['habe'] },
    { id: 'g', sentence: '„Wohin fährt der Wagen?" → Sie fragt, wohin der Wagen ____. (fahren)', translation: 'wohin + KI: fahre.', correct: 'fahre', accept: ['fahre'] },
    { id: 'h', sentence: '„Ist das Problem gelöst?" → Er fragt, ob das Problem gelöst ____. (sein)', translation: 'ob + KI: sei.', correct: 'sei', accept: ['sei'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Indirekte Fragen — completează verbul la Konjunktiv I. ⭐</strong><br>
        Întrebare da/nu → <strong>ob</strong> · întrebare cu W- → <strong>W-Wort</strong>. Verbul stă la final, în Konjunktiv I.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>❓ ${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex4-${it.id}" placeholder="Konjunktiv I">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}
function resetEx4() { buildEx4(); }

// ============================================
// EX 5: Diktat audio — VOCEA CLAUDIEI (audio/diktat-0N.wav)
// ============================================
const ex5Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Der Kanzler sagte, die Lage sei ernst.', accept: ['Der Kanzler sagte, die Lage sei ernst.'], ro: 'Cancelarul a spus că situația e gravă.' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Die Ministerin erklärte, sie habe keine Zweifel.', accept: ['Die Ministerin erklärte, sie habe keine Zweifel.'], ro: 'Ministra a declarat că nu are îndoieli.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Der Reporter berichtete, es gebe neue Proteste.', accept: ['Der Reporter berichtete, es gebe neue Proteste.'], ro: 'Reporterul a relatat că sunt noi proteste.' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Man sagte, die Reform komme dieses Jahr.', accept: ['Man sagte, die Reform komme dieses Jahr.'], ro: 'S-a spus că reforma vine anul acesta.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Die Polizei meldete, alles sei friedlich verlaufen.', accept: ['Die Polizei meldete, alles sei friedlich verlaufen.'], ro: 'Poliția a anunțat că totul a decurs pașnic.' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Laut dem Bericht müsse man mehr sparen.', accept: ['Laut dem Bericht müsse man mehr sparen.'], ro: 'Conform relatării, trebuie economisit mai mult.' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Die Zeugen sagten, sie hätten nichts gesehen.', accept: ['Die Zeugen sagten, sie hätten nichts gesehen.'], ro: 'Martorii au spus că nu au văzut nimic.' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Der Minister betonte, er werde die Reform umsetzen.', accept: ['Der Minister betonte, er werde die Reform umsetzen.'], ro: 'Ministrul a subliniat că va implementa reforma.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția (vocea Claudiei).</strong><br>
        <em>Sfat:</em> știri în Konjunktiv I — atenție la sei / habe / werde / müsse și la plural (hätten).
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex5Data.length };
}
function resetEx5() { buildEx5(); }

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
