// ============================================
// FLASHCARDS - Nachrichten & Medien (B2.1 · Lecția 5)
// 32 carduri: 8 forme Konjunktiv I + 8 indirekte Rede/timpuri/regula + 8 Medien-Wortschatz + 8 verbe&Redemittel
// Substantive MEREU Sg · Pl (DE + RO). Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: EXACT 6 ghilimele ASCII per card — ZERO ghilimele interne!
// ============================================

const flashcardsData = [
    // ========== 8 forme Konjunktiv I ==========
    { de: "Konjunktiv I (er sage)", ro: "= vorbire indirectă: redai ce a spus cineva", audio: "audio/letters/01-konjunktiv1.wav" },
    { de: "er sei (sein)", ro: "Konjunktiv I de la sein — cel mai folosit în știri", audio: "audio/letters/02-er-sei.wav" },
    { de: "er habe (haben)", ro: "Konjunktiv I de la haben (și auxiliar: er habe gesagt)", audio: "audio/letters/03-er-habe.wav" },
    { de: "er werde (werden)", ro: "Konjunktiv I de la werden (auxiliar Futur: er werde kommen)", audio: "audio/letters/04-er-werde.wav" },
    { de: "er könne (können)", ro: "Konjunktiv I al modalului können", audio: "audio/letters/05-er-koenne.wav" },
    { de: "er müsse (müssen)", ro: "Konjunktiv I al modalului müssen", audio: "audio/letters/06-er-muesse.wav" },
    { de: "er mache (machen)", ro: "Konjunktiv I regulat: Verbstamm + -e", audio: "audio/letters/07-er-mache.wav" },
    { de: "er gehe / es gebe / er komme", ro: "alte forme regulate de Konjunktiv I", audio: "audio/letters/08-er-gehe.wav" },

    // ========== 8 indirekte Rede + timpuri + regula de aur ==========
    { de: "die indirekte Rede", ro: "vorbirea indirectă (Er sagte, er sei müde)", audio: "audio/letters/09-indirekte-rede.wav" },
    { de: "die direkte Rede", ro: "vorbirea directă (Er sagte: Ich bin müde)", audio: "audio/letters/10-direkte-rede.wav" },
    { de: "er habe gemacht / er sei gegangen", ro: "trecutul în Konjunktiv I (Perfekt)", audio: "audio/letters/11-perfekt-ki.wav" },
    { de: "er werde machen", ro: "viitorul în Konjunktiv I (Futur I)", audio: "audio/letters/12-futur-ki.wav" },
    { de: "KI = Indikativ → Konjunktiv II", ro: "regula de aur: sie hätten, nu sie haben", audio: "audio/letters/13-regula-ki-kii.wav" },
    { de: "sie hätten nichts gesehen", ro: "plural: KI de la haben = Indikativ → KII hätten", audio: "audio/letters/14-sie-haetten.wav" },
    { de: "Er fragt, ob ich Zeit habe.", ro: "întrebare indirectă da/nu cu ob + KI", audio: "audio/letters/15-ob-frage.wav" },
    { de: "Sie fragt, wo ich gewesen sei.", ro: "întrebare indirectă cu W-Wort + KI", audio: "audio/letters/16-w-frage.wav" },

    // ========== 8 Medien-Wortschatz (Sg · Pl) ==========
    { de: "die Nachricht · die Nachrichten", ro: "știrea · știrile", audio: "audio/letters/17-nachricht.wav" },
    { de: "die Schlagzeile · die Schlagzeilen", ro: "titlul de ziar · titlurile", audio: "audio/letters/18-schlagzeile.wav" },
    { de: "der Bericht · die Berichte", ro: "relatarea/reportajul · reportajele", audio: "audio/letters/19-bericht.wav" },
    { de: "die Quelle · die Quellen", ro: "sursa · sursele", audio: "audio/letters/20-quelle.wav" },
    { de: "der Journalist · die Journalisten", ro: "jurnalistul · jurnaliștii", audio: "audio/letters/21-journalist.wav" },
    { de: "die Pressekonferenz · die Pressekonferenzen", ro: "conferința de presă · conferințele", audio: "audio/letters/22-pressekonferenz.wav" },
    { de: "die Sendung · die Sendungen", ro: "emisiunea · emisiunile (Nachrichtensendung)", audio: "audio/letters/23-sendung.wav" },
    { de: "die Zeitung · die Zeitungen", ro: "ziarul · ziarele", audio: "audio/letters/24-zeitung.wav" },

    // ========== 8 verbe & Redemittel media ==========
    { de: "berichten über (+ Akk)", ro: "a relata despre (er berichte)", audio: "audio/letters/25-berichten.wav" },
    { de: "melden", ro: "a anunța/raporta (die Polizei meldet)", audio: "audio/letters/26-melden.wav" },
    { de: "betonen", ro: "a sublinia (er betonte, …)", audio: "audio/letters/27-betonen.wav" },
    { de: "fordern", ro: "a cere/revendica (sie forderten, …)", audio: "audio/letters/28-fordern.wav" },
    { de: "laut + Dativ", ro: "potrivit… (Laut dem Minister sei …)", audio: "audio/letters/29-laut-dativ.wav" },
    { de: "… zufolge (+ Dativ înainte)", ro: "conform… (dem Bericht zufolge habe …)", audio: "audio/letters/30-zufolge.wav" },
    { de: "das Weltgeschehen", ro: "actualitatea mondială (nenumărabil)", audio: "audio/letters/31-weltgeschehen.wav" },
    { de: "sich einen Überblick verschaffen", ro: "a-și face o imagine de ansamblu", audio: "audio/letters/32-ueberblick.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru Lecția 5 B2.1.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție (voce Hedda).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
