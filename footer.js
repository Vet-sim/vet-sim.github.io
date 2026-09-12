/**
 * ============================================================
 * ВетСим — единый футер для всех страниц
 * © Тераевич Алла Сергеевна, 2026
 * Лицензия: CC BY-NC-ND 4.0
 * ============================================================
 *
 * Использование:
 *   <script src="https://vet-sim.github.io/footer.js" defer></script>
 *
 * Файл автоматически вставляет футер перед </body>.
 * Для отключения на конкретной странице добавьте атрибут
 * data-no-footer на тег <body>.
 * ============================================================
 */

(function () {
    'use strict';

    // Отключаем на страницах с атрибутом data-no-footer
    if (document.body && document.body.hasAttribute('data-no-footer')) {
        return;
    }

    // Защита от двойной вставки
    if (document.getElementById('vetsim-footer')) {
        return;
    }

    var FOOTER_HTML = `
<footer id="vetsim-footer" style="
    max-width: 1100px;
    margin: 2rem auto 1rem;
    padding: 1.2rem 1.5rem;
    background: #FFFFFF;
    border-radius: 1.8rem;
    border: 1px solid #E7EDE2;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    font-family: 'Montserrat', 'Segoe UI', system-ui, sans-serif;
    color: #3E5C4A;
    font-size: 0.8rem;
    line-height: 1.55;
    box-sizing: border-box;
">
    <div style="text-align: center; padding-bottom: 0.7rem; border-bottom: 1px dashed #E2EAD9;">
        <div style="font-weight: 700; color: #1F4E6E; font-size: 0.85rem; margin-bottom: 0.2rem;">
            © Тераевич Алла Сергеевна, 2026. Все права защищены.
        </div>
        <div style="color: #5F7C62; font-size: 0.75rem;">
            Материалы проекта «ВетСим» (дневники, конструкторы, методики, код)
            распространяются на условиях лицензии
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ru"
               target="_blank"
               rel="license noopener"
               style="color: #2C7DA0; text-decoration: none; border-bottom: 1px dotted #2C7DA0; font-weight: 600;">
                Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 (CC BY-NC-ND 4.0)
            </a>.
        </div>
    </div>

    <div style="
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        justify-content: center;
        margin-top: 0.7rem;
    ">
        <div style="
            flex: 1;
            min-width: 240px;
            max-width: 480px;
            background: #F0F7EA;
            border-left: 4px solid #A3B18A;
            border-radius: 1rem;
            padding: 0.55rem 0.9rem;
            box-sizing: border-box;
        ">
            <div style="font-weight: 700; color: #3A6B3A; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 0.2rem;">
                ✅ Вы можете
            </div>
            <ul style="margin: 0; padding-left: 1.1rem; color: #3E5C4A;">
                <li>использовать материалы в некоммерческих целях;</li>
                <li>копировать и распространять их с указанием авторства.</li>
            </ul>
        </div>

        <div style="
            flex: 1;
            min-width: 240px;
            max-width: 480px;
            background: #FCF4E8;
            border-left: 4px solid #D4A373;
            border-radius: 1rem;
            padding: 0.55rem 0.9rem;
            box-sizing: border-box;
        ">
            <div style="font-weight: 700; color: #8A5A2A; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 0.2rem;">
                ⚠️ Вы не можете
            </div>
            <ul style="margin: 0; padding-left: 1.1rem; color: #3E5C4A;">
                <li>использовать материалы в коммерческих целях;</li>
                <li>изменять и распространять производные произведения.</li>
            </ul>
        </div>
    </div>

    <div style="text-align: center; margin-top: 0.7rem; padding-top: 0.6rem; border-top: 1px dashed #E2EAD9; font-size: 0.72rem; color: #8A9B7A;">
        🐾 <strong style="color: #2C7DA0;">ВетСим</strong> — ветеринарное просвещение ·
        <a href="https://vet-sim.github.io" target="_blank" rel="noopener" style="color: #2C7DA0; text-decoration: none;">vet-sim.github.io</a>
        ·
        <a href="https://vetsim.ru" target="_blank" rel="noopener" style="color: #2C7DA0; text-decoration: none;">vetsim.ru</a>
    </div>
</footer>
`;

    function insertFooter() {
        // Ещё раз проверяем — вдруг уже вставили
        if (document.getElementById('vetsim-footer')) return;

        // Проверяем, не отключен ли футер
        if (document.body && document.body.hasAttribute('data-no-footer')) return;

        // Создаём контейнер
        var wrapper = document.createElement('div');
        wrapper.innerHTML = FOOTER_HTML.trim();
        var footer = wrapper.firstElementChild;

        if (footer) {
            document.body.appendChild(footer);
        }
    }

    // Вставляем после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertFooter);
    } else {
        insertFooter();
    }
})();