const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, 'public');

// ── 1. faq.html: Facility InfoセクションをFAQアコーディオンに置き換え ──
const faqPath = path.join(htmlDir, 'faq.html');
let faq = fs.readFileSync(faqPath, 'utf8');

// BOMを除去
if (faq.charCodeAt(0) === 0xFEFF) { faq = faq.slice(1); }

const facilityStart = faq.indexOf('<section class="section-a" data-section="facility"');
const floorPlanStart = faq.indexOf('<section class="section-a" data-section="floorplan"');

if (facilityStart === -1 || floorPlanStart === -1) {
  console.log('セクションが見つかりません。facilityStart:', facilityStart, 'floorPlanStart:', floorPlanStart);
  process.exit(1);
}

// Facility Infoセクション（コメント行も含む）の開始位置を少し前に広げる
const commentBefore = faq.lastIndexOf('\n', facilityStart);
const sectionToReplace = faq.substring(commentBefore + 1, floorPlanStart);

const newAccordion = `    <!-- ── FAQ Accordion ── -->
    <section class="section-a" data-section="faq-accordion">
      <div class="inner" style="max-width:900px;">
        <span class="section-label reveal">Q &amp; A</span>
        <span class="section-line reveal reveal-delay-1"></span>
        <h2 class="section-title en reveal reveal-delay-2">Frequently Asked Questions</h2>
        <span class="section-title-jp reveal reveal-delay-2" data-i18n="faq_qa_sub">よくあるご質問</span>

        <style>
          .faq-accordion {
            margin-top: 3rem;
            text-align: left;
          }
          .faq-category {
            margin-bottom: 3.5rem;
          }
          .faq-category-header {
            margin-bottom: 1.5rem;
            padding-bottom: 0.8rem;
            border-bottom: 1px solid rgba(28,28,26,0.15);
          }
          .faq-category-title {
            font-size: 0.72rem;
            letter-spacing: 0.2em;
            color: var(--charcoal);
            margin-bottom: 0.3rem;
          }
          .faq-category-jp {
            font-size: 0.84rem;
            color: #4a4845;
          }
          .faq-item {
            border-bottom: 1px solid rgba(28,28,26,0.08);
          }
          .faq-question {
            width: 100%;
            background: none;
            border: none;
            padding: 1.4rem 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
            cursor: pointer;
            text-align: left;
            font-family: var(--font-jp);
            font-size: 0.92rem;
            line-height: 1.8;
            color: var(--charcoal);
            letter-spacing: 0.03em;
          }
          .faq-question:hover { opacity: 0.65; }
          .faq-question .faq-q-label {
            font-family: var(--font-en);
            font-size: 0.72rem;
            letter-spacing: 0.15em;
            color: #5a5754;
            flex-shrink: 0;
            margin-top: 0.2rem;
          }
          .faq-question .faq-q-text { flex: 1; }
          .faq-icon {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            position: relative;
            margin-top: 0.25rem;
          }
          .faq-icon::before,
          .faq-icon::after {
            content: '';
            position: absolute;
            background: var(--charcoal);
            transition: transform 0.35s ease, opacity 0.35s ease;
          }
          .faq-icon::before {
            width: 18px; height: 1px;
            top: 50%; left: 0;
            transform: translateY(-50%);
          }
          .faq-icon::after {
            width: 1px; height: 18px;
            top: 0; left: 50%;
            transform: translateX(-50%);
          }
          .faq-item.is-open .faq-icon::after {
            transform: translateX(-50%) rotate(90deg);
            opacity: 0;
          }
          .faq-answer {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.45s ease;
          }
          .faq-item.is-open .faq-answer { max-height: 2000px; }
          .faq-answer-inner {
            padding: 0.2rem 0 1.8rem 2rem;
            text-align: left;
            font-size: 0.9rem;
            line-height: 2.0;
            color: #3a3835;
          }
          .faq-answer-inner p { text-align: left; color: #3a3835; }
          .faq-answer-inner p + p { margin-top: 0.8rem; }
          .faq-amenity-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
            margin-top: 1rem;
          }
          .faq-amenity-item {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.5rem 0.5rem 0.5rem 0;
            font-size: 0.83rem;
            color: #3a3835;
            border-bottom: 1px solid rgba(28,28,26,0.05);
          }
          .faq-amenity-item::before {
            content: '–';
            color: rgba(28,28,26,0.25);
            flex-shrink: 0;
          }
          .faq-payment-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.8rem;
            margin-top: 1rem;
          }
          .faq-payment-block {
            padding: 1rem 1.2rem;
            background: rgba(28,28,26,0.03);
          }
          .faq-payment-block h5 {
            font-size: 0.68rem;
            letter-spacing: 0.15em;
            color: var(--charcoal);
            margin-bottom: 0.5rem;
          }
          .faq-payment-block p {
            font-size: 0.8rem;
            line-height: 1.9;
            color: #3a3835;
            text-align: left;
          }
          .faq-contact-note {
            margin-top: 3.5rem;
            padding: 1.8rem 2.5rem;
            background: rgba(28,28,26,0.03);
            border-left: 2px solid rgba(28,28,26,0.15);
            text-align: left;
          }
          .faq-contact-note p {
            font-size: 0.86rem;
            line-height: 2.2;
            color: #3a3835;
            text-align: left;
          }
          .faq-contact-note a {
            color: var(--charcoal);
            text-decoration: underline;
            text-underline-offset: 3px;
          }
          @media (max-width: 768px) {
            .faq-question { font-size: 0.86rem; }
            .faq-answer-inner { padding-left: 1rem; font-size: 0.86rem; }
            .faq-amenity-grid { grid-template-columns: 1fr 1fr; }
            .faq-payment-grid { grid-template-columns: 1fr; }
            .faq-contact-note { padding: 1.5rem; }
          }
        </style>

        <div class="faq-accordion reveal reveal-delay-3">

          <!-- カテゴリ：ご滞在・施設について -->
          <div class="faq-category">
            <div class="faq-category-header">
              <h3 class="faq-category-title en">STAY &amp; FACILITIES</h3>
              <span class="faq-category-jp" data-i18n="faq_cat_facility">ご滞在・施設について</span>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_pet">ペットの同伴は可能ですか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_pet">誠に恐れ入りますが、ペットのご同伴はお断りしております。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_children">お子様の宿泊は可能ですか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_children_note">大人の隠れ家として静かな空間をご提供するため、14歳未満のお子様のご宿泊はご遠慮いただいております。ご理解いただけますと幸いです。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_parking_faq">駐車場はありますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_parking">敷地内に完備しております。お車でお越しの際は、事前にお知らせください。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_wifi_faq">Wi-Fiは利用できますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_wifi">無料Wi-Fi完備</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_roomservice">ルームサービスはありますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_room_service">ご利用いただけません。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_barrier">バリアフリーへの対応はありますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_barrier_free">館内に階段が多いため、バリアフリー対応は十分ではございません。お足元にご不安がある場合は、事前にスタッフまでご相談ください。できる限りお力添えいたします。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_amenity">客室に用意されているアメニティを教えてください。</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_amenity_intro">以下のアメニティをご用意しております。</p>
                  <div class="faq-amenity-grid">
                    <div class="faq-amenity-item" data-i18n="faq_amenity_shampoo">シャンプー・リンス</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_soap">ボディソープ・石鹸</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_towel">タオル・バスタオル</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_sponge">ボディタオル・スポンジ</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_toothbrush">ハミガキセット</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_dryer">ドライヤー</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_shaver">髭剃り</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_nightwear">ナイトウェア</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_bathrobe">バスローブ</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_slippers">スリッパ</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_lotion">化粧水</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_emulsion">乳液</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_cotton">綿棒</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_fridge">冷蔵庫</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_kettle">湯沸しポット</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_tea">お茶セット（無料）</div>
                    <div class="faq-amenity-item" data-i18n="faq_amenity_safe">金庫</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_payment">利用できる支払い方法を教えてください。</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_payment_intro">以下の決済方法をご利用いただけます。</p>
                  <div class="faq-payment-grid">
                    <div class="faq-payment-block">
                      <h5>CARD</h5>
                      <p>VISA / MASTER / JCB<br>AMEX / DINERS</p>
                    </div>
                    <div class="faq-payment-block">
                      <h5>TOUCH / IC</h5>
                      <p>Apple Pay / iD / QUICPay<br>Suica / PASMO / ICOCA など</p>
                    </div>
                    <div class="faq-payment-block">
                      <h5>QR CODE</h5>
                      <p>PayPay / 楽天ペイ / d払い<br>au PAY / メルペイ<br>Alipay / WeChat Pay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- カテゴリ：サウナ・設備について -->
          <div class="faq-category">
            <div class="faq-category-header">
              <h3 class="faq-category-title en">SAUNA</h3>
              <span class="faq-category-jp" data-i18n="faq_cat_sauna">サウナ・設備について</span>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_sauna_prep">サウナを利用する際に準備するものはありますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_sauna_prep">当館の「マグマスパサウナ」はご宿泊の皆様にご利用いただける男女共用スペースとなっておりますため、ご自身で水着のご用意をいただくか、フロントでの貸出も行っております。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_sauna_temp">サウナの温度はどのくらいですか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_sauna_temp">室温は約65度と、一般的なドライサウナに比べて低めの「体に優しい温度設定」にしております。息苦しさがなく、遠赤外線効果で体の芯からじっくりと温まり、負担なく極上の「ととのい」をご体験いただけます。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_sauna_reserve">サウナは貸切や事前予約ができますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_sauna_reserve">共用スペースとなりますため、特定の時間帯での貸切予約は承っておりません。ご滞在中は営業時間内であればいつでも、ご自身のペースで自由にご利用いただけます。当館は全8室と限られた客室数ですので、混雑を気にせずゆったりとお過ごしいただけます。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_roomwear">館内着（ルームウェア）はありますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_roomwear">はい、お部屋には肌触りの良いルームウェアをご用意しております。サウナ後や就寝時など、どうぞ身軽でリラックスしてお過ごしください。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- カテゴリ：お食事について -->
          <div class="faq-category">
            <div class="faq-category-header">
              <h3 class="faq-category-title en">DINING</h3>
              <span class="faq-category-jp" data-i18n="faq_cat_dining">お食事（夕食・朝食）について</span>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_dinner_time">夕食の時間は決まっていますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_dinner_time">ご夕食は18時より一斉スタートとさせていただいております。オープンキッチンに設置された薪火オーブン「ジョスパー」から立ち上る炎や香りを、ライブ感とともにお楽しみください。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_allergy">アレルギーや苦手な食材への対応は可能ですか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_allergy">はい、事前にお知らせいただければ可能な限り対応させていただきます。淡路ビーフや地元の鮮魚、自家農園の野菜など、その時々の旬の食材を最高の状態で仕入れるため、ご宿泊日の数日前までにお伝えいただけますと幸いです。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_guest_dining">宿泊しない友人を夕食にだけ追加することはできますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_guest_dining">もちろん大歓迎です。ご宿泊者様と同じ「薪火が引き出すフルコース」をご友人様用に追加でご用意することが可能です。追加料金につきましては事前にお問い合わせください。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- カテゴリ：宿泊・アクセスについて -->
          <div class="faq-category">
            <div class="faq-category-header">
              <h3 class="faq-category-title en">STAY &amp; ACCESS</h3>
              <span class="faq-category-jp" data-i18n="faq_cat_stay">宿泊・アクセスについて</span>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_luggage">チェックイン前に車を停めたり、荷物を預けることはできますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_luggage">はい、可能です。チェックインは15時からとなりますが、14時頃から当館駐車場をご利用いただけます。お荷物もフロントにてお預かりいたしますので、身軽な状態で洲本周辺の散策をお楽しみください。ラウンジスペースでおくつろぎいただくことも可能です。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_group">大人数でのグループ宿泊や、全館貸切はできますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_group">はい、全8室を利用した「全館貸切」でのご宿泊も承っております。ご友人ご家族の集まりや社員旅行など、大人数（16〜18名様程度）でも独立した客室でプライベートを確保しつつ、皆様で特別な一体感をお楽しみいただけます。ご予算やご要望に合わせて柔軟にカスタマイズいたしますので、幹事様はお気軽にご相談ください。</p>
                </div>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question" aria-expanded="false">
                <span class="faq-q-label">Q.</span>
                <span class="faq-q-text" data-i18n="faq_q_storm_cancel">悪天候で橋が渡れない場合のキャンセル料はどうなりますか？</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </button>
              <div class="faq-answer" role="region">
                <div class="faq-answer-inner">
                  <p data-i18n="faq_a_storm_cancel">台風などの天災により、明石海峡大橋や大鳴門橋が通行止めになるなど、物理的にご来館が困難な場合や道中の安全が確保できない場合は、キャンセル料は一切頂戴しておりません。安全を第一に、また別の最高の日にご来館いただけるよう日程変更のご相談も承っております。</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- お問い合わせ導線 -->
        <div class="faq-contact-note reveal reveal-delay-2">
          <p data-i18n="faq_contact_note">上記以外のご不明な点は、お電話またはメールにてお気軽にお問い合わせください。<br>
          Tel: <a href="tel:0799227775">0799-22-7775</a>　／　Email: awajiauberge<span>★</span>gmail.com（★を@に変更）</p>
        </div>

      </div>
    </section>

`;

faq = faq.substring(0, commentBefore + 1) + newAccordion + faq.substring(floorPlanStart);

// アコーディオンJSを </body> の前に挿入
const scriptTag = '<script src="js/main.js"></script>';
if (!faq.includes('faq-question')) {
  console.log('Warning: accordion JS not found but that is expected');
}
const accordionJS = `  <script>
    (function () {
      document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = btn.closest('.faq-item');
          var isOpen = item.classList.contains('is-open');
          item.classList.toggle('is-open', !isOpen);
          btn.setAttribute('aria-expanded', String(!isOpen));
        });
      });
    })();
  </script>
  `;

faq = faq.replace(scriptTag, accordionJS + scriptTag);

fs.writeFileSync(faqPath, faq, 'utf8');
console.log('faq.html updated successfully');

// ── 2. 全HTMLファイルのUUID更新 ──
const newUUID = '32cd4ace-36a5-4032-882e-58e34f572021';
const htmlFiles = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(htmlDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // BOM除去
  if (content.charCodeAt(0) === 0xFEFF) { content = content.slice(1); }
  const updated = content.replace(/\?v=[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g, `?v=${newUUID}`);
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log('UUID updated:', file);
});

console.log('All done!');
