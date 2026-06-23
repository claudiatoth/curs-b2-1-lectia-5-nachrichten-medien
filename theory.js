// ============================================
// TEORIE - Nachrichten & Medien (B2.1 · Lecția 5)
// Claudia Toth · Konjunktiv I + indirekte Rede
// Sursă DF: INT592-593 · recast cu castul nostru (Andreea ↔ Florian raportează știrile) — standalone
// AUDIO: fără narațiune Hedda în teorie (texte lungi). Dialogul = vocea Claudiei (audio/dialog-01.wav).
// ============================================

const theoryHTML = `
    <!-- 0: Intro + Dialog Andreea & Florian -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📺 1. Was gab's in den Nachrichten? — Andreea & Florian</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Când povestești ce a spus ALTCINEVA — un politician, un reporter, un prieten — folosești <strong>vorbirea indirectă</strong> (indirekte Rede). În germană, mai ales în <strong>știri și presă</strong>, se folosește un mod special: <strong>Konjunktiv I</strong>. El arată că doar <em>redai</em> spusele cuiva, cu neutralitate și distanță — nu confirmi că e adevărat. <em>Der Kanzler sagte, die Lage <strong>sei</strong> ernst.</em> 🦋"</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Ce înveți în Lecția 5 (B2.1)</h4>
                <ul>
                    <li>🗣️ <strong>indirekte Rede</strong> — redai ce a spus cineva: <em>Er sagte, er <strong>sei</strong> müde.</em></li>
                    <li>🔑 <strong>Konjunktiv I</strong> — Verbstamm + <strong>-e</strong> (er mache, er habe, er gehe); <strong>sein</strong> neregulat (er sei)</li>
                    <li>⚠️ <strong>Regula de aur</strong> — când KI = Indikativ, treci la <strong>Konjunktiv II / würde</strong> (sie <strong>hätten</strong>, nu „sie haben")</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🗣️ Konjunktiv I + indirekte Rede — pe scurt</h4>
                <ul>
                    <li><strong>indirekte Rede</strong> = reproducerea spuselor cuiva. În <strong>Medien</strong> (Zeitung, Fernsehen, Radio) exprimă <strong>neutralitate și distanță</strong>.</li>
                    <li><strong>Konjunktiv I</strong> la persoana a 3-a singular = Verbstamm + <strong>-e</strong>: <em>er sage, er habe, er gehe, er komme</em>.</li>
                    <li><strong>sein</strong> e special: <em>er <strong>sei</strong></em> (fără -e) — cel mai folosit verb în știri.</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#FBF7EF;">
                <h4>🎧 Hör zu: Andreea &amp; Florian — „Was gab's in den Nachrichten?"</h4>
                <div class="lesson-audio">
                    <div class="audio-player">
                        <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                        <audio id="audio-0" preload="none"><source src="audio/dialog-01.wav" type="audio/wav"></audio>
                    </div>
                    <span class="lesson-audio-label">🔊 Ascultă dialogul (vocea Claudiei)</span>
                </div>

                <div style="background:#ecfeff; border-left: 4px solid #0f766e; padding: 12px 16px; border-radius: 6px; margin: 10px 0;">
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Du, Florian, du schaust doch immer die Tagesschau — was gab's heute Neues in der Welt?</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Einiges! Der Bundeskanzler sagte, die Lage <strong>sei</strong> ernst, aber man <strong>habe</strong> alles unter Kontrolle.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Und die Klimakonferenz? Gibt es Ergebnisse?</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Die Sprecherin erklärte, die Staaten <strong>müssten</strong> mehr tun, und die Aktivisten forderten, man <strong>solle</strong> sofort handeln.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Hat der Minister auch etwas gesagt?</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Ja, er betonte, er <strong>werde</strong> die Reform noch dieses Jahr umsetzen. Er <strong>habe</strong> schon mit der Opposition gesprochen.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Klingt nach viel. Und im Inland?</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Die Polizei meldete, bei der Demo <strong>habe</strong> es keine Zwischenfälle gegeben. Alles <strong>sei</strong> friedlich verlaufen.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Gut zu wissen. Ich sollte mir wirklich angewöhnen, öfter Nachrichten zu schauen.</p>
                    <p style="margin:4px 0;"><strong style="color:#0f766e;">Florian:</strong> Auf jeden Fall! So behältst du den Überblick über das Weltgeschehen.</p>
                </div>
                <details>
                    <summary style="cursor:pointer; color:#065f46; font-weight:600;">📜 Vezi traducerea (RO)</summary>
                    <div style="color:#5A5147; font-size:0.9rem; line-height:1.7; margin-top:8px;">
                        <p>— Auzi, Florian, tu te uiți mereu la Tagesschau — ce s-a mai întâmplat azi în lume?<br>
                        — Câte ceva! Cancelarul a spus că situația e gravă, dar că au totul sub control.<br>
                        — Și conferința pe climă? Sunt rezultate?<br>
                        — Purtătoarea de cuvânt a explicat că statele ar trebui să facă mai mult, iar activiștii au cerut să se acționeze imediat.<br>
                        — A spus și ministrul ceva?<br>
                        — Da, a subliniat că va implementa reforma chiar anul acesta. A vorbit deja cu opoziția.<br>
                        — Sună a mult. Și pe plan intern?<br>
                        — Poliția a anunțat că la demonstrație nu au fost incidente. Totul a decurs pașnic.<br>
                        — Bine de știut. Chiar ar trebui să mă obișnuiesc să mă uit mai des la știri.<br>
                        — Neapărat! Așa rămâi la curent cu ce se întâmplă în lume.</p>
                    </div>
                </details>
            </div>
        </div>
    </div>

    <!-- 1: Bildung Konjunktiv I -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🔑 2. Bildung Konjunktiv I (Verbstamm + -e)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔑 Verbstamm + Endung -e (persoana a 3-a singular)</h4>
                <p>machen → er mach<strong>e</strong> · haben → er hab<strong>e</strong> · gehen → er geh<strong>e</strong> · kommen → er komm<strong>e</strong></p>
                <p style="margin-top:6px; font-size:1.05rem;"><strong>Die Politikerin sagte, das Problem <span style="color:#4338ca">habe</span> viele Aspekte.</strong></p>
                <p style="margin-top:4px;">KI se folosește mai ales la <strong>persoana a 3-a singular</strong> (er/sie/es) — exact ce-ți trebuie ca să redai ce a spus altcineva.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Infinitiv</th><th>Konjunktiv I (er …)</th><th>RO</th></tr></thead>
                <tbody>
                    <tr><td>machen</td><td class="verb">er mache</td><td>(că) face</td></tr>
                    <tr><td>haben</td><td class="verb">er habe</td><td>(că) are</td></tr>
                    <tr><td>gehen</td><td class="verb">er gehe</td><td>(că) merge</td></tr>
                    <tr><td>kommen</td><td class="verb">er komme</td><td>(că) vine</td></tr>
                    <tr><td>geben</td><td class="verb">es gebe</td><td>(că) există / se dă</td></tr>
                    <tr><td>wissen</td><td class="verb">er wisse</td><td>(că) știe</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#FBF7EF;">
                <h4>🔧 Modalverben — la persoana I și a 3-a singular</h4>
                <p class="verb" style="font-size:1.05rem;">er könne · er müsse · er dürfe · er solle · er wolle · er möge</p>
                <p style="margin-top:4px;"><em>Der Minister sagte, man <strong>müsse</strong> mehr Energie sparen.</em></p>
            </div>
        </div>
    </div>

    <!-- 2: sein — neregulatul-vedetă -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⭐ 3. sein, haben, werden — formele-cheie</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>⭐ sein — singurul folosit la TOATE persoanele (și fără -e la sg.)</h4>
                <table class="theory-table">
                    <thead><tr><th>Persoană</th><th>Konjunktiv I</th></tr></thead>
                    <tbody>
                        <tr><td>ich</td><td class="verb">sei</td></tr>
                        <tr><td>du</td><td class="verb">sei(e)st</td></tr>
                        <tr><td>er / sie / es</td><td class="verb">sei</td></tr>
                        <tr><td>wir</td><td class="verb">seien</td></tr>
                        <tr><td>ihr</td><td class="verb">seiet</td></tr>
                        <tr><td>sie / Sie</td><td class="verb">seien</td></tr>
                    </tbody>
                </table>
                <p style="margin-top:6px;"><em>Der Sprecher sagte, er <strong>sei</strong> überzeugt und <strong>habe</strong> keine Zweifel.</em></p>
            </div>

            <div class="theory-box" style="background:#FBF7EF;">
                <h4>🔑 haben &amp; werden — auxiliarele din spatele timpurilor</h4>
                <ul>
                    <li><strong>haben → er habe</strong> (auxiliar pentru Perfekt: <em>er habe gesagt</em>)</li>
                    <li><strong>werden → er werde</strong> (auxiliar pentru Futur: <em>er werde kommen</em>)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3: Konjunktiv I în timpuri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🕰️ 4. Konjunktiv I la Präsens, Perfekt și Futur ⭐</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>🕰️ Auxiliarul (sein/haben/werden) se pune la Konjunktiv I</h4>
                <table class="theory-table">
                    <thead><tr><th>Timp</th><th>Formă</th><th>Exemplu</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Präsens</strong></td><td class="verb">er mache</td><td>Er sagt, er <strong>mache</strong> die Aufgabe.</td></tr>
                        <tr><td><strong>Perfekt (haben)</strong></td><td class="verb">er habe gemacht</td><td>Er sagt, er <strong>habe</strong> die Aufgabe gemacht.</td></tr>
                        <tr><td><strong>Perfekt (sein)</strong></td><td class="verb">er sei gegangen</td><td>Er sagt, er <strong>sei</strong> nach Hause gegangen.</td></tr>
                        <tr><td><strong>Futur I</strong></td><td class="verb">er werde machen</td><td>Er sagt, er <strong>werde</strong> die Aufgabe machen.</td></tr>
                    </tbody>
                </table>
            </div>
            <p style="margin-top:6px;">💡 Trecutul în vorbirea indirectă se redă <strong>aproape mereu cu Perfekt</strong> (er habe gemacht / er sei gekommen) — indiferent dacă originalul era Perfekt sau Präteritum.</p>
        </div>
    </div>

    <!-- 4: Regula de aur KI = Indikativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Regula de aur: KI = Indikativ → Konjunktiv II / würde</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>⚠️ Când Konjunktiv I arată EXACT ca Indikativul, schimbă-l!</h4>
                <p>La <strong>plural</strong> (sie haben, sie machen) și la <strong>persoana I sg.</strong> (ich mache), KI = forma normală → nu se vede că e indirect. Atunci folosești <strong>Konjunktiv II</strong> sau <strong>würde + Infinitiv</strong>:</p>
                <table class="theory-table">
                    <thead><tr><th>Original</th><th>❌ KI = Indikativ</th><th>✅ Soluția</th></tr></thead>
                    <tbody>
                        <tr><td>er macht</td><td>—</td><td class="verb">er mache ✅ (e clar)</td></tr>
                        <tr><td>sie haben nichts gesehen</td><td>sie haben…</td><td class="verb">sie <strong>hätten</strong> nichts gesehen</td></tr>
                        <tr><td>sie machen das</td><td>sie machen…</td><td class="verb">sie <strong>würden</strong> das machen</td></tr>
                        <tr><td>ich gehe</td><td>ich gehe…</td><td class="verb">ich <strong>würde</strong> gehen / ich ginge</td></tr>
                    </tbody>
                </table>
                <p style="margin-top:6px;"><em>Die Bankangestellten sagten, sie <strong>hätten</strong> nichts gesehen.</em> <span style="color:#5A5147;">(NU „sie haben")</span></p>
            </div>
        </div>
    </div>

    <!-- 5: indirekte Fragen + Wortschatz + Redemittel -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>📰 6. Indirekte Fragen + Medien-Wortschatz + Redemittel</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>❓ Întrebări indirecte</h4>
                <ul>
                    <li>Întrebare DA/NU → <strong>ob</strong>: „Hast du Zeit?" → Er fragt, <strong>ob</strong> ich Zeit <strong>habe</strong>.</li>
                    <li>Întrebare cu W- → <strong>W-Wort</strong>: „Wo warst du?" → Er fragt, <strong>wo</strong> ich gewesen <strong>sei</strong>.</li>
                </ul>
                <p style="margin-top:4px;">Verbul trece la final (Nebensatz), iar forma e tot Konjunktiv I.</p>
            </div>

            <div class="theory-box" style="background:#FBF7EF;">
                <h4>📰 Medien-Wortschatz (Sg · Pl)</h4>
                <table class="grammar-table">
                    <tr><th>Deutsch (Sg · Pl)</th><th>Română</th></tr>
                    <tr><td class="verb">die Nachricht · die Nachrichten</td><td>știrea · știrile</td></tr>
                    <tr><td class="verb">die Schlagzeile · die Schlagzeilen</td><td>titlul de ziar · titlurile</td></tr>
                    <tr><td class="verb">der Bericht · die Berichte</td><td>relatarea/reportajul · reportajele</td></tr>
                    <tr><td class="verb">die Quelle · die Quellen</td><td>sursa · sursele</td></tr>
                    <tr><td class="verb">der Journalist · die Journalisten</td><td>jurnalistul · jurnaliștii</td></tr>
                    <tr><td class="verb">die Pressekonferenz · die Pressekonferenzen</td><td>conferința de presă · conferințele</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>🗣️ Redemittel — cum redai o știre (pentru Schreibwerkstatt)</h4>
                <ul>
                    <li><strong>Laut + Dativ</strong> … : Laut dem Minister <strong>sei</strong> die Lage stabil.</li>
                    <li><strong>… zufolge</strong> … : Dem Bericht <strong>zufolge</strong> habe es Proteste gegeben.</li>
                    <li><strong>Wie X berichtete, …</strong> : Wie die Sprecherin berichtete, <strong>werde</strong> man handeln.</li>
                    <li><strong>Er betonte / erklärte / forderte, …</strong> + Konjunktiv I</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #065f46; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Andreea (Nachrichtenmeldung):</strong> Der Bundeskanzler erklärte, die Wirtschaft <strong>erhole</strong> sich langsam. Laut dem Minister <strong>seien</strong> neue Investitionen geplant. Die Opposition forderte, man <strong>solle</strong> mehr für Familien tun. Dem Bericht zufolge <strong>habe</strong> es bei der Demonstration keine Zwischenfälle gegeben.</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Cancelarul a declarat că economia se redresează lent. Potrivit ministrului, sunt planificate noi investiții. Opoziția a cerut să se facă mai mult pentru familii. Conform relatării, la demonstrație nu au fost incidente.</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
