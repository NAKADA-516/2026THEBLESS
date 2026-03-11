/* ============================================================
   THE BLESS AWAJI — Main JavaScript
   ============================================================ */

/* ── i18n Translations ── */
const i18n = {
  jp: {
    nav_home: 'Home',
    nav_dining: 'Dining',
    nav_stay: 'Stay',
    nav_spa: 'Spa',
    nav_gallery: 'Gallery',
    nav_about: 'About',
    nav_faq: 'FAQ',
    nav_reserve: 'Reservation',
    hero_catch: 'A Meal That Moves Your Soul',
    hero_catch_jp: '魂が震える食事',
    hero_sub: '淡路島の恵みを、五感で味わう',
    hero_btn: 'Reserve a Table',
    home_dining_label: 'Dining',
    home_dining_title: 'Farm to Table',
    home_dining_sub: 'ファームトゥテーブル',
    home_dining_body: '淡路島の大地と海が育んだ食材を、JOSPER®薪火グリルで丁寧に仕上げる。世界が認めた炎の料理哲学。',
    home_dining_btn: 'Explore Dining',
    home_stay_label: 'Stay',
    home_stay_title: 'Rest in Silence',
    home_stay_sub: '静寂に包まれた滞在',
    home_stay_body: '全8室、それぞれ異なる表情を持つ客室。海を望む朝は、言葉を失うほど美しい。',
    home_stay_btn: 'View Rooms',
    home_spa_label: 'Spa & Sauna',
    home_spa_title: 'Magma Sauna',
    home_spa_sub: 'マグマサウナ',
    home_spa_body: '富士山溶岩石が放つ遠赤外線。65℃・湿度55%の環境が、細胞の奥まで温め、癒す。',
    home_spa_btn: 'Explore Spa',
    story_title: '"The island breathes."',
    story_body1: '淡路島は、太古から変わらぬ潮の香りと大地の鼓動を持つ。',
    story_body2: 'THE BLESS AWAJIは、その息吹の中に静かに佇む、魂のための宿。',
    story_body3: '食べる、眠る、整う。ただそれだけの時間が、あなたを新しく生まれ変わらせる。',
    dining_hero_title: 'Dining',
    dining_hero_sub: 'ファームトゥテーブル — 淡路島の恵み',
    dining_intro_label: 'Our Philosophy',
    dining_intro_title: 'Fire & Land',
    dining_intro_sub: '炎と大地',
    dining_intro_body: 'JOSPER®グリル——世界で唯一、密閉型薪炭オーブンとグリルを一体化したマシン。日本初導入のこの炎が、淡路島の食材に息を吹き込む。世界一のBBQシェフが監修した9品のフルコースは、食事という体験を超えた、魂の儀式。',
    menu_title: "Tonight's Menu",
    menu_sub: '本日のコース',
    menu_time: '19:00〜（要予約）',
    menu_price: '18,700円（税込・サービス料別）',
    menu_courses: [
      { en: 'Amuse Bouche', jp: 'アミューズ', desc: '淡路島野菜のひと口' },
      { en: 'Cold Appetizer', jp: '冷前菜', desc: '旬魚のカルパッチョ' },
      { en: 'Hot Appetizer', jp: '温前菜', desc: '島野菜のロースト' },
      { en: 'Soup', jp: 'スープ', desc: '浜辺の魚介ビスク' },
      { en: 'Fish', jp: '魚料理', desc: 'JOSPER薪火焼き' },
      { en: 'Sorbet', jp: 'ソルベ', desc: '淡路産レモン' },
      { en: 'Meat', jp: '肉料理', desc: '但馬牛×炭火' },
      { en: 'Cheese', jp: 'チーズ', desc: 'セレクションと島蜂蜜' },
      { en: 'Dessert', jp: 'デザート', desc: '玉ねぎのコンフィ' },
    ],
    wine_title: 'Wine Cellar',
    wine_sub: '600本以上のセレクション',
    wine_body: 'ロマネ・コンティ、ジャック・セロス、サロン——世界の至宝が、あなたの夜を彩る。',
    josper_label: 'The Grill',
    josper_title: 'JOSPER® Grill',
    josper_sub: '日本初導入 — 世界一のBBQシェフ監修',
    josper_body: '炭と薪の二重の炎が、食材の旨味を閉じ込める。密閉オーブン内の独自対流が、外はカリッと、内はジューシーな食感を生み出す。この哲学こそ、THE BLESSのダイニングの核心。',
    dining_concept_title: '薪火が生み出す<br>特別な夜へ',
    dining_concept_body: '私たちが提供するのは「魂が震える食事」。<br>淡路島の恵みと薪火の魔法が織りなす、<br>忘れられない美食の時間をお届けします。',
    dining_pillar1_title: '自家栽培野菜',
    dining_pillar1_body: 'オーベルジュの畑から直送される採れたての野菜。薪火の熱と香りが、素材の持つ本来の甘みと旨味を最大限に引き出します。',
    dining_pillar2_title: '淡路ビーフ',
    dining_pillar2_body: '日本屈指の但馬牛産地・淡路島が誇る黒毛和牛。JOSPER®の密閉炎が、その比類なき霜降りと旨味を余すことなく引き出します。',
    dining_pillar3_title: '海の幸',
    dining_pillar3_body: '明石海峡と紀伊水道が育む豊かな恵み。薪火の煙が深海の宝に纏わり、忘れられない香りと味わいを生み出します。',
    dining_josper_sub: '薪火グリルの最高峰が生み出す、魂が震える食事',
    dining_josper_desc1: '人類最古の調理法である「薪火焼き」は、ガス火やIHよりも食材の旨味を引き出し、炭火よりもジューシーに焼き上げます。薪火焼きならではの燻煙をまとった食材は、私たちのDNAに刻まれた太古の記憶を呼び覚まし、本能レベルで食欲をそそります。',
    dining_josper_desc2: 'THE BLESS Awajiでは「熾火の魔術師」と呼ばれる世界一のBBQシェフが監修した炭火＆薪火専用の調理機器「JOSPER®」社のグリル＆オーブンのコンボセットを日本国内でいち早く導入しました。肉、魚、野菜、果物——それぞれの食材に最適な火入れと薪火ならではの香り付けを同時に行い、素材本来のポテンシャルを引き出す、全く新しい美食体験を提供します。',
    dining_dinner_title: 'ディナーコース',
    dining_course_name: '【季節の本格薪火フルコース 9品】',
    dining_price_suffix: '（税込）',
    dining_reserve_btn: 'Dinner-Only Reservation',
    dish_label: 'お食事一例',
    dish1_title: '淡路牛',
    dish1_body: '日本有数の但馬牛の一大産地である淡路島で生まれ育った「淡路牛」の希少部位"ヒレ"を贅沢に使用。JOSPER®のオーブンとグリルを使い分け、外はガリッと、中はジュワッと焼き上げます。<br><br>特にこだわった飼育で有名な契約牧場から取り寄せた最高峰の淡路牛は、牛肉を苦手とする方からも「これまで食べた中で一番美味しい！」という嬉しい評価をいただいております。',
    dish2_title: '薪火で焼き上げる<br>カラビネーロ',
    dish2_body: '「赤い悪魔」と呼ばれる大西洋原産の赤い大エビ「カラビネーロ」。比類なき濃厚な旨味を持つこのエビのポテンシャルを引き出すには、薪熾火でじっくり遠火で丁寧に火を通す必要があります。<br><br>ポイントは「焼く」ではなく「温める」という感覚。乾燥しないようオイルスプレーを吹きかけながら薪の香りをまとわせ、燻製のように仕上げることで、ミソの旨味が爆発します。<br><br>深海の赤い宝石と、赤く輝く熾火が交わって生み出される、贅沢なひとときをどうぞ。',
    dish3_title: 'THE BLESSの<br>アミューズ',
    dish3_body: '炎が織りなす芳醇な調べ、記憶に刻まれる最初のひと皿。本マグロの中トロを、香ばしくスモーキーなパンに乗せた一品。THE BLESS Awajiの美食体験は、この特別なアミューズから始まります。<br><br>薪火がもたらす深い香りが、ゲストの五感を瞬時に目覚めさせる「鍵」の役割を果たします。口の中で踊る繊細な味わいは、これから始まる美食の物語への完璧な序章となります。',
    dish4_body: '自然の恵みが織りなす極上のひと口。スモーキーなうずらの卵と最高峰オシェトラのキャビア、そして燻製を纏った淡路産イノブタのラードと自家製にんにく麹を混ぜた隠ダレが織りなす芸術的なアミューズです。<br><br>薪火が紡ぐ香ばしさの中に、野性味と上品さが絶妙に交差し、忘れがたい余韻を心に刻みます。シャンパンのエレガントな泡と共に味わうとき、五感を包む至極の体験が完成します。',
    dish5_title: '金のハンバーグ',
    dish5_body: '薪火が纏わせる香りとともに仕上げる、至極の「金のハンバーグ」。淡路牛のヒレと神戸ポークの肩ロースを贅沢に使用した最上級のミンチを、豚の網脂で包み込み、薪火で丁寧に焼き上げました。<br><br>香ばしい香りと凝縮した旨味が口いっぱいに広がります。仕上げには芳醇なトリュフ香るペリグーソース。誰も食べたことがない、最高級のハンバーグ体験を。',
    dish6_title: '和歌山・太田さんの<br>極上紀州鴨',
    dish6_body: '紀州和歌山の太田さんが丹精込めて育て上げた一羽丸ごとの紀州鴨を薪火でじっくりと焼き上げる珠玉の逸品。あえて胸骨を外さずに焼くことで、骨から伝わる穏やかな熱により、しっとり柔らかな食感と肉汁を閉じ込めた焼き加減を実現しました。<br><br>自家製塩麹に漬け込むことで鴨肉の旨味が深まり、芳醇な香りをまといます。高温の油で仕上げたネギとシェリービネガーの爽やかな酸味が軽やかに調和したソースが、パワフルな鴨の味わいに美しいコントラストを生み出します。',
    wine_cellar_sub_jp: '特別な一杯が、特別な体験を。',
    wine_cellar_body1: '3つのセラーに収められた600本以上のワインコレクション。',
    wine_cellar_body2: 'ロマネ・コンティをはじめ、シャンパンはジャック・セロス、サロンなど、',
    wine_cellar_body3: 'ワイン愛好家なら誰もが憧れる希少な銘柄が、静かにその出番を待っています。',
    drink_awaji_wine_sub: '淡路ワイン（グラス / ボトル）',
    drink_wine1: 'メルロー',
    drink_wine2: 'マスカットベリーA',
    drink_wine3: 'ピオーネ',
    drink_wine4: 'ペティアンベリーA',
    drink_wine5: '淡路島レモンチェッロ',
    drink_craft_beer_sub: '淡路島クラフトビール',
    drink_beer1: 'ピルスナー',
    drink_beer2: 'レッドエール',
    drink_beer3: 'ヴァイツェン',
    drink_beer4: 'ペールエール',
    drink_beer5: 'IPA',
    drink_beer6: '島レモン',
    drink_nonalc_sub: 'ソフトドリンク',
    drink_nonalc1: '淡路まんまみかんジュース',
    drink_nonalc2: 'なるとオレンジスカッとジュース',
    drink_nonalc3: 'オーガニックジンジャーエール',
    drink_nonalc4: 'ペリエ',
    dining_breakfast_sub_jp: '心と身体を整える、特別な朝のはじまり。',
    dining_breakfast_body: 'デトックスへと導く洋食プレートを、ブッフェではなく、一皿ずつ丁寧にお仕立てしてお届けします。まずはアボカドとモーツァルト牛乳が織りなすシルキーなスムージーで身体を優しく目覚めさせ、淡路島産玉ねぎをジョスパーの薪火でゆっくりと甘みを引き出したスープが、朝の胃袋を包み込みます。<br><br>メインには、加水率80％の北海道産「ゆめちから」小麦を使い、ジョスパーで香ばしく焼き上げた出来立ての手作りパンと、塩麹に3日間じっくり漬け込み薪火で仕上げた自家製ベーコンが登場。すべてに込められた手仕事の温もりと薪火の恵みが、朝という特別な時間を彩ります。',
    stay_hero_title: 'Stay',
    stay_hero_sub: '全8室 — 海と自然に抱かれた滞在',
    rooms_intro_label: 'Accommodation',
    rooms_intro_title: 'Eight Rooms',
    rooms_intro_sub: '8つの物語',
    rooms_intro_body: '全室が異なるデザインと景観を持つ。海の声、潮の香り、朝の光——<br>すべてが部屋の中に招き入れられる。',
    room_ocean_suite: 'Ocean Suite',
    room_junior_suite: 'Junior Suite',
    room_garden: 'Garden View Room',
    room_grand_garden: 'Grand Garden View',
    room_ocean_view: 'Ocean View Room',
    amenity_label: 'Amenities',
    amenity_title: 'Amenities',
    amenity_sub: 'こだわりのアメニティ',
    spa_hero_title: 'Spa',
    spa_hero_sub: 'マグマサウナ — 深部から整う',
    spa_intro_label: 'Sauna Experience',
    spa_intro_title: 'Magma Earth',
    spa_intro_sub: '大地のエネルギー',
    spa_intro_body: '富士山の溶岩石が床・壁全面を覆い、65℃・湿度60%・育成光線の三要素が深い和らぎを生み出す。遠赤外線放射率93%以上が、体の深部から自然な発汗を促し、整える。',
    gallery_hero_title: 'Gallery',
    gallery_hero_sub: '写真で見る THE BLESS AWAJI',
    gallery_all: 'All',
    gallery_dining: 'Dining',
    gallery_spa: 'Spa',
    gallery_rooms: 'Rooms',
    gallery_exterior: 'Exterior',
    reserve_hero_title: 'Reservation',
    reserve_hero_sub: 'ご予約・お問い合わせ',
    form_name: 'Name / お名前',
    form_email: 'Email / メールアドレス',
    form_tel: 'Phone / 電話番号',
    form_date: 'Preferred Date / ご希望日',
    form_guests: 'Number of Guests / 人数',
    form_type: 'Type / ご利用区分',
    form_type_stay: '宿泊',
    form_type_dining: 'ダイニング',
    form_type_both: '宿泊+ダイニング',
    form_type_other: 'その他',
    form_message: 'Message / ご要望',
    form_submit: 'Send Inquiry',
    checkin: 'チェックイン 15:00（最終18:00）',
    checkout: 'チェックアウト 11:00',
    address: '兵庫県洲本市炬口247',
    tel: '0799-22-7775',
    email: 'awajiauberge@gmail.com',
    access1_from: '洲本IC',
    access1_time: '10 min',
    access2_from: '新神戸',
    access2_time: '60 min',
    access3_from: '大阪梅田',
    access3_time: '90 min',
    access4_from: '京都',
    access4_time: '120 min',
    footer_address: '兵庫県洲本市炬口247',
    footer_terms: '宿泊約款',
    footer_privacy_link: 'プライバシーポリシー',
    footer_legal_link: '特商法に基づく表記',
    footer_reserve: 'Reserve',
    footer_privacy: 'Privacy Policy',
    footer_copyright: '© Copyright 2025 THE BLESS AWAJI All Right Reserved',
    cta_title: 'Begin Your Journey',
    cta_sub: '特別な体験をご予約ください',
    cta_btn: 'Reserve Now',
    about_hero_subtitle: '淡路島の豊かな自然に囲まれた隠れ家で、他では決して味わえない特別な料理をお届けします。<br>\n          古来より「御食国（みけつくに）」と呼ばれ、朝廷に新鮮な食材を献上してきた淡路島。<br>\n          伝統と革新を融合させた、唯一無二の食体験をご提供します。',
    about_intro_text: '島の恵みを、炎と発酵の力で。<br>\n          生産者であり料理人として、淡路島の自然と真摯に向き合う。<br>\n          その姿勢から生まれる料理には、物語性と深い愛情が込められています。',
    about_concept_title_jp: '3つの核となるコンセプト',
    about_pillar1_h3: '島の恵みを100%活用した<br>地産地消',
    about_pillar1_block1_title: '自家栽培へのこだわり',
    about_pillar1_block1_body: '店に隣接する自家農園で無農薬野菜を栽培しています。お客様には収穫体験もお楽しみいただけます。目の前の畑で採れた玉ねぎや季節野菜を、採れたての鮮度そのままでお皿に乗せます。',
    about_pillar1_block2_title: '淡路牛と島のジビエ',
    about_pillar1_block2_body: '但馬牛の血統を引く淡路牛を贅沢に使用。きめ細やかな肉質と深い旨味をお楽しみください。島で捕獲されるイノシシやシカなどの認証ジビエ「AWAJISHIMA Shishika」も活用し、野性味あふれる旨味を洗練された料理に昇華させます。',
    about_pillar1_block3_title: '真のサステナビリティ',
    about_pillar1_block3_body: '食材のほとんどを淡路島産。島内の農家、漁師、猟師と連携し、獲れた命を余すことなく大切にいただきます。自然への感謝の気持ちを込めて、一皿一皿をお作りしています。',
    about_pillar2_h3: '薪火が引き出す<br>素材本来の力',
    about_pillar2_block1_title: 'シンプルだからこそ際立つ旨味',
    about_pillar2_block1_body: '当店のキッチンの主役は薪火です。ガス火ではなく薪そのものを熱源とすることで、素材に力強い火のエネルギーを宿します。薪が燃える際に生まれる穏やかな炎と香ばしい煙が、食材に独特の香りを纏わせます。外側は香ばしく、中はみずみずしく仕上がる薪火料理は、素材の旨味を最大限に引き出します。',
    about_pillar2_block2_title: '五感で楽しむ調理体験',
    about_pillar2_block2_body: 'ゆらめく炎と薪のはぜる音、立ち上る香ばしい煙。お客様の目の前で食材が焼き上がっていく様子は、まるでキャンプファイヤーを囲んでいるような特別な時間をお過ごしいただけます。',
    about_pillar3_h3: '麹が生み出す<br>発酵の魔法',
    about_pillar3_block1_title: '日本の発酵文化を現代に',
    about_pillar3_block1_body: '味噌、醤油、酢から自家製の塩麹、醤油麹、発酵バターまで。麹菌の力を借りた発酵食品を随所に活用しています。麹による発酵は素材の旨味成分を増幅させ、まろやかで複雑な風味を生み出します。猪肉は味噌床で熟成させて臭みを消しコクを増し、野菜は麹漬けにして旨味を凝縮させます。',
    about_pillar3_block2_title: '健康と美味しさの両立',
    about_pillar3_block2_body: '発酵食品は腸内環境を整え、素材の栄養価を高めます。保存料に頼らず、自然の力でおいしさを引き出す先人の知恵を現代に活かしています。',
    about_chef_body: '料理長は「生産者であり料理人である」ことをモットーに、淡路島の自然と真摯に向き合っています。野菜づくりから発酵の仕込みまで手間を惜しまず、自らの手で素材と対話することで新たな料理のインスピレーションを得ています。<br><br>\n            山菜やキノコを求めて島の山野を歩き回り、猟師や農家から食材の話を聞く。そうした姿勢から生まれる料理には、物語性と深い愛情が込められています。',
    about_location_heading_jp: '特別なロケーションで過ごす至福の時間',
    about_location_body: '瀬戸内海を望む丘陵地や里山の麓に店を構えています。都会の喧騒を離れた隠れ家で、ゆったりと流れる島時間をお楽しみください。<br><br>\n            夜になれば満天の星空が広がり、昼は穏やかな海風と木々のざわめきが心を癒します。',
    about_auberge_heading_jp: 'オーベルジュとしての食の旅',
    about_auberge_body: 'ご希望のお客様には島内の提携宿泊施設をご案内します。夕食で薪火と発酵のフルコースを堪能し、翌朝には農園での収穫体験や発酵食品を使った朝食をご用意。<br><br>\n            里山に暮らすようなスローな時間を体験できるのも、島のオーベルジュならではの魅力です。',
    about_limited_card1_h4: '少数限定のプライベートなおもてなし',
    about_limited_card1_p: '一日にご案内するお客様は数組（10〜12名程度）に限定しています。一皿一皿に細やかな心配りをし、その日のベストな状態で料理をお届けするためです。',
    about_limited_card2_h4: '季節・数量限定のメニュー',
    about_limited_card2_p: '提供する食材は季節によって変わります。冬季限定の猪の薪火ロースト、仕込みに数ヶ月かかる熟成発酵食品を使ったソースなど、その時期その場所でしか味わえない希少なメニューをご用意しています。',
    about_final_body: '淡路島という土地が持つ豊かな恵みと、<br>\n          私たちの情熱が掛け合わさって生まれる唯一無二の時間と料理。<br>\n          それはきっと、お客様の五感に強く訴えかけ、心に残る思い出となるでしょう。<br><br>\n          単なる食事では得られない深い満足感と特別な体験を、<br>\n          ぜひ一度味わいにいらしてください。',
    about_cta_sub: '島の情報やメニューの最新情報はInstagramでご確認ください',
    faq_page_hero_sub: 'よくあるご質問 — Frequently Asked Questions',
    faq_online_reserve: 'Online Reservation (24 hours)',
    faq_facility_sub: '施設情報・アメニティ',
    faq_floor_sub: '館内マップ',
    faq_access_sub: 'アクセス',
    faq_label_pet: 'ペット',
    faq_label_children: 'お子様',
    faq_label_room_service: 'ルームサービス',
    faq_label_restaurant: 'レストラン',
    faq_label_sauna: 'サウナ',
    faq_label_parking: '駐車場',
    faq_label_wifi: 'Wi-Fi',
    faq_label_barrier_free: 'バリアフリー',
    faq_pet: '不可',
    faq_children_val: 'ご宿泊いただけません',
    faq_children_note: '・14歳未満のお子様のご宿泊はご遠慮いただいております。',
    faq_room_service: 'ご利用いただけません',
    faq_restaurant: '淡路島の旬を味わう「Farm to Table」をコンセプトにしたレストランをご利用いただけます。夕食は18時から一斉スタートとなります。詳細はご予約時または当施設までお問い合わせください。',
    faq_sauna: 'ご宿泊のお客様は、滞在中マグマサウナを何度でもご利用いただけます。専用の水着をご用意しておりますが、水着のご持参も可能です。',
    faq_parking: '敷地内に完備しております。お車でお越しの際は、事前にお知らせください。',
    faq_wifi: '無料Wi-Fi完備',
    faq_barrier_free: '非対応。館内に階段が多いため、あらかじめご了承ください。',
    faq_transport_text: '最寄りバス停：「炬の口」\nバス停からホテルまで徒歩約4分\n\n神戸三宮 → 洲本BC\n高速バス 約90分\n\n大阪梅田 → 洲本BC\n約120分\n\n洲本BC → 炬の口\n島内路線バス利用',
    faq_transport_note: '※時刻表は淡路交通のウェブサイトでご確認ください。洲本バスセンターから徒歩約10分でのアクセスも可能です。',
    faq_car_text: '最寄りIC：洲本IC\n（神戸淡路鳴門自動車道）\n\n洲本IC → 国道28号を洲本市内方面へ約10分 → 炬口北交差点を直進約200m\n\n新神戸から 約60分\n大阪梅田から 約90分\n京都から 約120分',
    faq_car_note: '※明石海峡大橋は天候により通行制限がかかる場合があります。事前に道路情報をご確認ください。\n※駐車場はホテルに完備。宿泊者は無料でご利用いただけます。',
    faq_transfer: '送迎サービスの詳細は、当施設までお問い合わせください。',
    faq_amenity_shampoo: 'シャンプー・リンス',
    faq_amenity_soap: 'ボディソープ・石鹸',
    faq_amenity_towel: 'タオル・バスタオル',
    faq_amenity_sponge: 'ボディタオル・スポンジ',
    faq_amenity_toothbrush: 'ハミガキセット',
    faq_amenity_dryer: 'ドライヤー',
    faq_amenity_shaver: '髭剃り',
    faq_amenity_nightwear: 'ナイトウェア',
    faq_amenity_bathrobe: 'バスローブ',
    faq_amenity_slippers: 'スリッパ',
    faq_amenity_lotion: '化粧水',
    faq_amenity_emulsion: '乳液',
    faq_amenity_cotton: '綿棒',
    faq_amenity_fridge: '冷蔵庫',
    faq_amenity_kettle: '湯沸しポット',
    faq_amenity_tea: 'お茶セット（無料）',
    faq_amenity_safe: '金庫',
    faq_fac_sauna: 'サウナ（マグマサウナ）',
    faq_fac_parking: '無料駐車場',
    faq_fac_wifi: '無料Wi-Fi',
    faq_fac_restaurant: 'レストラン',
    faq_fac_bar: 'バー',
    grp_page_hero_sub: '一棟まるごと貸切プランのご案内',
    grp_intro_title_jp: '一棟まるごと貸切プラン',
    grp_intro_p1: '淡路島は洲本市にあるオーシャンビューのオーベルジュ「THE BLESS Awaji」は全8室、最大16名様までで「一棟丸ごと貸切」でのご利用が可能です。',
    grp_intro_p2: '設備が充実した豪華ヴィラのように完全プライベート空間で心ゆくまで特別な時間を過ごし、THE BLESS Awajiの世界観を存分に体感できます。',
    grp_intro_p3: '一緒に過ごす皆さまとの忘れられない素敵な思い出になるでしょう。',
    grp_features_sub: 'THE BLESS Awajiの特徴',
    grp_feat1_title: '贅を極めた薪火料理コース＆ライブダイニング',
    grp_feat1_body: '淡路島産の肉、魚、野菜を中心に、薪火料理と相性の良い食材を最適な火入れと薪火ならではの香り付けをして提供いたします。カウンターから調理風景が見渡せるライブキッチンスタイルで、シェフによるパフォーマンスとプレゼンテーションが特別な夜を演出します。',
    grp_feat2_title: 'パン職人の特製モーニングプレート',
    grp_feat2_body: 'シンガポールで大人気だったベーカリーのパン職人が淡路島に移住し、ブレスの朝食を担当。薪火オーブンを使った香ばしくフワフワもっちりの焼き立てパンと、地元野菜のフレッシュサラダ、自家製ベーコンが乗った特製プレートで、素晴らしい一日の始まりを実感できます。',
    grp_feat3_title: '最高峰マグマスパ式サウナで至高のデトックス＆ととのい体験',
    grp_feat3_body: '富士山の溶岩から切り出した特注のマグマプレートを敷き詰めた超高級サウナを導入。温められた溶岩から発せられる遠赤外線と育成光線を浴びることで体の内側から温まり、65℃とは思えないほどの発汗を体験できます。12度の水風呂とリカバリー用の40度の湯船で、"至高のととのい体験"をお楽しみください。',
    grp_more_sub: 'さらなる魅力',
    grp_more1_title: '国産最高峰マットレスによる吸い込まれるような睡眠体験',
    grp_more1_body: '日本国内に１台しか存在しない最新スイス製コイルマシンによって生み出される唯一無二のアワーグラススプリングを贅沢に使用した厚さ３６cmの「雲ごこち」マットレス。自宅以上の熟睡をお約束します。',
    grp_more2_title: '充実のワインセレクション',
    grp_more2_body: '大型ワインセラー3台設置し、常時400本以上のワインやシャンパンを在庫。地元淡路島産のワインからロマネ・コンティまで幅広いラインナップで取り揃え、薪火料理と相性バツグンの一杯をご提案いたします。',
    grp_more3_title: '雰囲気ある内装で写真や動画撮影にも最適',
    grp_more3_body: 'バンクシーを始め、有名アーティストの作品が館内のいたるところに飾られ、アートギャラリーを思わせる空間デザイン。調光＆偏光可能な照明エリアではインパクトある背景での写真・動画撮影が可能です。',
    grp_more4_title: '目の前の釣りスポットで海釣りが楽しめる',
    grp_more4_body: 'THE BLESS Awajiの目の前「炬口（たけのくち）公園」の堤防は淡路島でも有数の釣りスポット。マダイ、チヌ、タチウオ、アジ、サバなど魚種も豊富。釣った魚をディナーコースで提供することも可能です。',
    grp_usecases_sub: '活用方法の事例',
    grp_sched1_title: 'セミナー／合宿／研修／ワークショップ タイムスケジュール例',
    grp_sched1_d1_li1: '15:00　チェックイン',
    grp_sched1_d1_li2: '15:30　セミナー／合宿／研修／ワークショップ開始',
    grp_sched1_d1_li3: '19:00　ディナー開始',
    grp_sched1_d1_li4: '21:30　ディナー終了',
    grp_sched1_d1_li5: '22:00　サウナ＆リラックスタイム',
    grp_sched1_d1_li6: '23:00　就寝',
    grp_sched1_d2_li1: '06:00　海岸沿いを散歩',
    grp_sched1_d2_li2: '06:30　朝セミナー開始',
    grp_sched1_d2_li3: '08:00　朝セミナー終了＆朝食',
    grp_sched1_d2_li4: '09:00　振り返り＆シェアタイム',
    grp_sched1_d2_li5: '10:30　片付け＆集合写真撮影',
    grp_sched1_d2_li6: '11:00　チェックアウト＆出発',
    grp_sched1_note: '※追加料金でセミナールームの延長利用も可能',
    grp_sched2_title: 'リトリートプラン（ヨガ／瞑想／アイスバス／etc…） タイムスケジュール例',
    grp_sched2_d1_li1: '13:00　近隣の提携酵素風呂で酵素デトックス',
    grp_sched2_d1_li2: '15:00　チェックイン',
    grp_sched2_d1_li3: '15:30　マグマスパ＆アイスバスセッション',
    grp_sched2_d1_li4: '17:00　休憩',
    grp_sched2_d1_li5: '18:00　マインドフルネスセッション',
    grp_sched2_d1_li6: '19:00　リトリートプラン専用ヘルシー薪火ディナー',
    grp_sched2_d1_li7: '21:00　ディナー終了＆キャンドルセッション',
    grp_sched2_d1_li8: '22:00　就寝',
    grp_sched2_d2_li1: '06:00　朝ヨガ＆瞑想',
    grp_sched2_d2_li2: '08:00　朝食',
    grp_sched2_d2_li3: '09:00　海岸沿いを散歩して内観',
    grp_sched2_d2_li4: '10:00　振り返り＆シェアタイム',
    grp_sched2_d2_li5: '10:30　片付け＆集合写真撮影',
    grp_sched2_d2_li6: '11:00　チェックアウト＆出発',
    grp_benefits_sub: '貸切プランならではのメリット',
    grp_benefit1_title: '同行者と濃密な時間を',
    grp_benefit1_body: '家族や友人と特別な空間で時間を共有することは、人生の中でもひときわ輝く素晴らしい思い出になります。何年経っても語り合えるメモリアルな旅行体験をお楽しみください。',
    grp_benefit2_title: 'お料理に関してのリクエストも可能',
    grp_benefit2_body: 'アレルギーや苦手な食材の除外はもちろん、「この時期の淡路島のこの食材を食べたい！」といったリクエストにもお応えすることが可能です。使用食材、焼き方、味付けなど、可能な限りのご要望にお応えいたします。',
    grp_benefit3_title: 'お子様連れでもOK',
    grp_benefit3_body: '貸切利用時は他の利用者がいないプライベート空間になりますので、小さなお子様のご宿泊が可能となります。お子様向けの食事もご用意可能です。',
    grp_benefit4_title: 'コースではなくビュッフェスタイルにも変更可能',
    grp_benefit4_body: 'お子様が宿泊される場合はビュッフェ形式に変更も可能です。大人から子どもまで楽しめる薪火ダイニングならではのメニューを大皿でご提供いたします。',
    grp_benefit5_title: '貸切マイクロバスを手配してツアー化',
    grp_benefit5_body: '提携バス会社のマイクロバスを手配して送迎プランをアレンジ可能です。<br>三ノ宮・新神戸・神戸空港：約60分 ／ 伊丹空港：約90分 ／ 新大阪・関西空港：約120分',
    grp_rooms_sub: '部屋割り',
    grp_rooms_intro: 'THE BLESS Awajiは全8室をご用意しており、部屋ごとに眺望や家具の配置が異なります。1階に1部屋（101）、2階に7部屋（202〜208）があります。',
    grp_room101: '52㎡：キングベッド1台＆ソファベッド1台（バスタブ有り）',
    grp_room202: '45㎡：セミダブル2台＆ソファベッド1台（バスタブ有り）',
    grp_room203: '37㎡：セミダブル2台（シャワールーム）',
    grp_room204: '37㎡：セミダブル2台（シャワールーム）',
    grp_room205: '49㎡：セミダブル2台（窓付きバスタブ有り）オーシャンスイート',
    grp_room206: '33㎡：セミダブル2台（シャワールーム）',
    grp_room207: '33㎡：セミダブル2台（シャワールーム）',
    grp_room208: '46㎡：ダブル2台（シャワールーム）',
    grp_rooms_note: '※ 基本は8室16名が規定人数。エクストラベッドにて18〜20名様までお泊まりいただくことも可能です。',
    grp_floormap_sub: '館内マップ',
    grp_options_sub: 'ご利用可能な設備＆オプション',
    grp_opt1: '（無料貸出）120インチのスクリーンと最新プロジェクター完備',
    grp_opt2: '（無料貸出）100wスピーカーとワイヤレスイヤホン2本セット',
    grp_opt3: '（無料貸出｜全15枚）提携しているヨガ講師を１時間２万円で手配可能',
    grp_opt4: '（無料貸出｜薪は一束1,000円）星空の下で焚き火を囲む特別なひとときを',
    grp_opt5: '：ご利用可能時間は15時〜19時、22時〜24時、翌日5時〜10時。どの時間帯も1時間あたり10,000円',
    grp_pricing_sub: 'ご利用条件と価格',
    grp_pricing_per_head: '1泊2日（税込）／ お1人様あたり37,500円計算',
    grp_pricing_guests_label: '宿泊人数',
    grp_pricing_guests_val: '16名（エクストラベッドにて18〜20名まで対応可。追加料金：お1人様35,000円・税別）',
    grp_pricing_incl_label: '含まれるもの',
    grp_pricing_incl_val: '全8室の使用権（15時〜翌11時）、利用人数分のディナー＆朝食',
    grp_pricing_excl_label: '含まれないもの',
    grp_pricing_excl_val: 'コースに含まれるドリンク（コーヒー・紅茶等）以外の飲み物、有料オプション',
    grp_pricing_byo_label: '持込料',
    grp_pricing_byo_val: 'ディナー時はワイン・シャンパンのみ持込可。持込料1本あたり3,000円、上限5本。ビール・ウイスキー等の持込は不可',
    grp_pricing_note: '2泊3日・3泊4日などの連日貸切や、さらに豪華なVIP貸切プランもご用意可能です。柔軟なアレンジや提案も可能ですので、ご希望される場合はぜひご相談ください。',
    grp_cases_sub: '貸切プラン主催で収益化した事例',
    grp_cases_intro: 'THE BLESS Awajiでの特別な宿泊体験に各種研修・セミナー・リトリート・ファンミーティングなどの付加価値を提供することで、一人あたり宿泊費用以上の金額で募集をかけ、参加者の高い満足度と主催者様の収益を両立するプレミアムイベントとして実現いただけます。これまでのご利用事例としては、お１人様５万円から20万円前後の参加費で募集されていたケースがございます。',
    grp_case1_label: 'お１人様５万円 × 15名（主催者除く）',
    grp_case2_label: 'お１人様10万円 × 15名（主催者除く）',
    grp_case3_label: 'お１人様20万円 × 15名（主催者除く）',
    grp_flow_sub: 'ご利用の流れ',
    grp_step1_title: '希望日程のご確認',
    grp_step1_desc: 'ご希望の日程をお知らせください',
    grp_step2_title: 'お申し込み＆決済',
    grp_step2_desc: 'お申し込みと決済をご確認いただきます',
    grp_step3_title: '詳細打ち合わせ',
    grp_step3_desc: '食事・オプション等の詳細を打ち合わせます',
    grp_step4_title: '到着＆チェックイン',
    grp_step4_desc: '心を込めてお迎えいたします',
    grp_step5_title: 'チェックアウト＆お見送り',
    grp_step5_desc: 'またのお越しをお待ちしております',
    grp_faq_sub: 'よくある質問',
    grp_q1: 'ディナー後、レストランエリアは何時まで利用可能ですか？',
    grp_a1: '23時までご利用いただけます。',
    grp_q2: '部屋飲み用のお酒やおつまみは持ち込み可能ですか？',
    grp_a2: '可能です。ただし、ディナー時の持込に関しては、ワインとシャンパンのみ可能で、持込料は１本あたり3,000円、持込数の上限は5本です。ビールやウイスキー、その他の酒類のディナーへの持込は不可となります。部屋飲み後の清掃は各自でお願いしております。嘔吐など本格的な清掃が必要になった場合は清掃料３万円を申し受けます。',
    grp_q3: '連泊で貸切する際、ランチの提供は可能ですか？',
    grp_a3: '基本的に可能ですが、状況によってお受けできない場合もありますので、お申し込みの際にご確認ください。',
    grp_contact_sub: 'お問い合わせ・申込先',
    grp_contact_intro: 'お問い合わせは下記までお気軽にどうぞ。',
    grp_tel_note: '受付時間 10:00〜20:00',
    grp_email_note: '24時間受付',
    idx_concept_body: '私たちは、ただ美しい景色や贅沢な食事を提供するだけの宿泊施設ではありません。<br>薪火料理とマグマ式スパで、心と体をリセットする特別な体験を。<br>「魂が震える食事」と「心と体が満たされるオーベルジュ」——<br>忘れられないひとときをお届けします。',
    idx_dining_h2: '薪火の美学',
    idx_dining_desc: '日本初導入のJOSPER®薪火グリルで調理する淡路ビーフと新鮮な海の幸。<br>19:00〜 季節のフルコース9品',
    idx_dining_btn: 'View Dining',
    idx_stay_jp: '全8室の静かな滞在',
    idx_stay_body: 'それぞれ異なる表情を持つ8つの客室。<br>海を望む部屋、庭に包まれた部屋。<br>どの部屋も、静寂と贅沢が同居しています。',
    idx_stay_btn: 'View Rooms',
    idx_spa_h2: '静寂の中の整い',
    idx_spa_body: '富士山の溶岩石を使ったマグマ式サウナ。<br>体の深部から温め、心を静める。<br>宿泊者は何度でもご利用いただけます。',
    idx_spa_btn: 'View Spa',
    idx_stay_reserve: 'Book a Stay',
    idx_dining_reserve: 'Book Dining',
    room_capacity_2: '最大2名',
    room_capacity_3: '最大3名',
    room1_beds: 'セミダブル×2 + ソファ',
    room2_beds: 'キング×1 + ソファ',
    room4_beds: 'ダブル×2 + ソファ',
    room1_desc: '淡路島の海を正面に望む、最高のロケーション。広大なオーシャンビューと贅沢な空間が、忘れられない滞在を演出します。',
    room2_desc: '広々としたリビングスペースと上質なベッドルームが融合。家族やグループでの特別な滞在に最適です。',
    room3_desc: '緑豊かな庭園を望む静謐な客室。ふたりだけの時間を、自然の音と共にゆっくりとお過ごしください。',
    room4_desc: 'ガーデンビュールームを上回る広さと開放感。大きな窓から差し込む光が、空間を豊かに彩ります。',
    room5_desc: '穏やかな淡路島の海が一望できる客室。日の出から夕暮れまで、刻々と変わる海の表情をお楽しみください。',
    amenity_body: '滞在をより豊かにするために、THE BLESS AWAJIではオリジナルアメニティをご用意しています。上質な素材と香りで、日常を離れた特別な時間をお過ごしください。',
    amenity_item1: 'オリジナルアメニティ',
    amenity_item2: 'Aesop バスアメニティ',
    amenity_item3: 'オリジナルタオル',
    amenity_item4: 'オリジナルバスローブ',
    stay_map_address: '〒656-0011 兵庫県洲本市炬口247',
    spa_feat1_title: '温度設定',
    spa_feat1_body: '体に最も優しく、最も深く浸透する65℃。長時間の入浴でも負担なく整えられる設定温度。',
    spa_feat2_title: '湿度',
    spa_feat2_body: '通常のサウナより高い湿度60%が、皮膚呼吸を活性化。育成光線との相乗効果で深部まで温める。',
    spa_feat3_title: '遠赤外線放射率',
    spa_feat3_body: '富士山溶岩石が放つ遠赤外線の放射率93%以上。30種以上の天然ミネラルを含む岩石が理想的な熱環境を作る。',
    spa_lava_jp: '床と壁すべてに敷き詰められた富士山溶岩石プレート',
    spa_lava_body1: 'マグマサウナルームの最大の特徴は、富士山の恵みとも言えるマグマ（天然溶岩）プレートが床と壁すべてに敷き詰められていること。このプレートを水蒸気で温めることで、言わば「お湯を使わない空気温泉」とも言える室内環境を作り出しています。',
    spa_lava_body2: 'また、マグマ（天然溶岩）には30種類以上の豊富なミネラルが含まれており、水蒸気とともに空気中に充満。同時に発生するマイナスイオン効果も相まって、心身をリラックスした状態に導きます。',
    spa_lava_f1: '高い反射熱効率',
    spa_lava_f2: '高い輻射熱作用',
    spa_lava_f3: '30種類以上の豊富なミネラル（バナジウム効果）',
    spa_lava_f4: '育成光線とも呼ばれる遠赤外線放射率は93%以上',
    spa_lava_f5: '体内深部温度を優しく上昇',
    spa_lava_f6: 'アーシング効果',
    spa_water_jp: '地層式濾過装置',
    spa_water_body1: '水風呂にも徹底したこだわりを持つのがTHE BLESS AWAJIのスパ。富士山の溶岩石で水道水を濾過する「地層式濾過（LOCA）装置」を導入し、富士山の天然水に近い水質を水風呂として実現しました。',
    spa_water_body2: '溶岩石で濾過された水は細く柔らかく、体の深部から温まった状態の肌との相性は抜群。高い浸透性が、温冷交互浴の効果をより深めてくれます。',
    spa_lounge_jp: '整いスペース',
    spa_lounge_body: 'サウナと水風呂のあとは、静かな空間でゆっくりと「整い」の時間を。呼吸が整い、思考が静まり、心身が本来の状態へと戻っていく その深いリセットのための、特別な居場所です。',
    spa_tbl_use: 'ご利用',
    spa_tbl_temp: '温度',
    spa_tbl_hum: '湿度',
    spa_tbl_mat: '素材',
    spa_tbl_mat_val: '富士山溶岩石（床・壁全面）',
    spa_tbl_feat: '特徴',
    spa_tbl_feat_val: '遠赤外線 93%以上・育成光線',
    spa_book_btn: 'Book a Stay to Access',
    scroll_down: 'Scroll',
    terms_hero_title: '宿泊約款',
    terms_hero_sub: 'THE BLESS Awaji — Accommodation Terms',
    privacy_hero_title: 'プライバシーポリシー',
    privacy_hero_sub: 'THE BLESS Awaji — Privacy Policy',
    legal_hero_title: '特定商取引法に基づく表記',
    legal_hero_sub: 'THE BLESS Awaji — Specified Commercial Transaction Act',
    legal_jp_only_notice: '',
  },
  en: {
    nav_home: 'Home',
    nav_dining: 'Dining',
    nav_stay: 'Stay',
    nav_spa: 'Spa',
    nav_gallery: 'Gallery',
    nav_about: 'About',
    nav_faq: 'FAQ',
    nav_reserve: 'Reservation',
    hero_catch: 'A Meal That Moves Your Soul',
    hero_catch_jp: 'Farm to Table — Awaji Island',
    hero_sub: 'Taste the blessings of Awaji Island through all five senses',
    hero_btn: 'Reserve a Table',
    home_dining_label: 'Dining',
    home_dining_title: 'Farm to Table',
    home_dining_sub: 'Fire & Craft',
    home_dining_body: 'Ingredients nurtured by the land and sea of Awaji Island, carefully finished on the JOSPER® wood-fire grill. A philosophy of flame recognized by the world.',
    home_dining_btn: 'Explore Dining',
    home_stay_label: 'Stay',
    home_stay_title: 'Rest in Silence',
    home_stay_sub: 'Eight Unique Rooms',
    home_stay_body: 'Eight rooms, each with its own character. The morning view of the ocean leaves you speechless.',
    home_stay_btn: 'View Rooms',
    home_spa_label: 'Spa & Sauna',
    home_spa_title: 'Magma Sauna',
    home_spa_sub: 'Lava Stone Therapy',
    home_spa_body: 'Far-infrared rays from Mt. Fuji lava stones. At 65°C and 55% humidity, the heat reaches deep into every cell.',
    home_spa_btn: 'Explore Spa',
    story_title: '"The island breathes."',
    story_body1: 'Awaji Island carries the scent of ancient tides and the pulse of the earth.',
    story_body2: 'THE BLESS AWAJI stands quietly within that breath — a sanctuary for the soul.',
    story_body3: 'Eat, sleep, restore. These simple acts become a profound transformation.',
    dining_hero_title: 'Dining',
    dining_hero_sub: 'Farm to Table — The Blessings of Awaji',
    dining_intro_label: 'Our Philosophy',
    dining_intro_title: 'Fire & Land',
    dining_intro_sub: 'Flame & Earth',
    dining_intro_body: 'The JOSPER® Grill — the world\'s only sealed wood-charcoal oven and grill in one. Japan\'s first installation. A 9-course dinner supervised by the world\'s greatest BBQ chef transcends the act of eating into a ritual of the soul.',
    menu_title: "Tonight's Menu",
    menu_sub: 'Full Course Dinner',
    menu_time: 'From 19:00 (Reservation required)',
    menu_price: '¥18,700 (Tax included, service charge extra)',
    menu_courses: [
      { en: 'Amuse Bouche', jp: '', desc: 'Awaji vegetable bite' },
      { en: 'Cold Appetizer', jp: '', desc: 'Seasonal fish carpaccio' },
      { en: 'Hot Appetizer', jp: '', desc: 'Roasted island vegetables' },
      { en: 'Soup', jp: '', desc: 'Seafood bisque' },
      { en: 'Fish', jp: '', desc: 'JOSPER wood-fired' },
      { en: 'Sorbet', jp: '', desc: 'Awaji lemon' },
      { en: 'Meat', jp: '', desc: 'Tajima beef × charcoal' },
      { en: 'Cheese', jp: '', desc: 'Selection & island honey' },
      { en: 'Dessert', jp: '', desc: 'Onion confit' },
    ],
    wine_title: 'Wine Cellar',
    wine_sub: 'Over 600 selections',
    wine_body: 'Romanee-Conti, Jacques Selosse, Salon — the world\'s treasures grace your evening.',
    josper_label: 'The Grill',
    josper_title: 'JOSPER® Grill',
    josper_sub: 'Japan\'s First — Supervised by the World\'s Greatest BBQ Chef',
    josper_body: 'Dual flames of charcoal and wood lock in the umami of every ingredient. The unique convection inside the sealed oven creates a perfectly crisp exterior and succulent interior. This philosophy is the heart of THE BLESS dining.',
    dining_concept_title: 'An Extraordinary Evening,<br>Born of Fire',
    dining_concept_body: 'What we offer is a meal that moves the soul.<br>The blessings of Awaji Island and the magic of flame<br>weave an unforgettable culinary experience.',
    dining_pillar1_title: 'Estate-Grown Vegetables',
    dining_pillar1_body: 'Freshly harvested vegetables delivered straight from the auberge\'s own fields. The heat and fragrance of wood fire draw out the inherent sweetness and depth of each ingredient.',
    dining_pillar2_title: 'Awaji Beef',
    dining_pillar2_body: 'Japanese Black Wagyu from Awaji Island, one of Japan\'s premier Tajima cattle regions. JOSPER®\'s sealed flame draws out every nuance of its unrivalled marbling and umami.',
    dining_pillar3_title: 'Bounty of the Sea',
    dining_pillar3_body: 'The abundant harvest of the Akashi Strait and Kii Channel. Wood-fire smoke envelops these treasures of the deep, creating an unforgettable aroma and depth of flavour.',
    dining_josper_sub: 'The pinnacle of wood-fire grilling — a meal that moves the soul',
    dining_josper_desc1: 'Wood-fire cooking — humanity\'s oldest culinary technique — draws out more umami than gas or induction heat, and yields a juicier result than charcoal alone. The distinctive smokiness that envelops each ingredient awakens ancient memories encoded in our DNA, stirring appetite at a primal level.',
    dining_josper_desc2: 'THE BLESS Awaji was among the first in Japan to introduce the JOSPER® grill and oven combo — engineered exclusively for charcoal and wood-fire cooking, supervised by the world\'s greatest BBQ chef, known as the "sorcerer of embers." Applying the ideal cook and signature wood-fire aroma to every ingredient — meat, fish, vegetables, and fruit alike — we offer a wholly new gastronomic experience that unlocks each ingredient\'s true potential.',
    dining_dinner_title: 'Dinner Course',
    dining_course_name: 'Seasonal Wood-Fire Full Course — 9 Dishes',
    dining_price_suffix: '(tax incl.)',
    dining_reserve_btn: 'Dinner-Only Reservation',
    dish_label: 'Sample Dish',
    dish1_title: 'Awaji Beef',
    dish1_body: 'We use the prized tenderloin of "Awaji Beef," raised on Awaji Island — one of Japan\'s foremost Tajima cattle regions. Alternating between the JOSPER® oven and grill, the exterior is seared to a satisfying crust while the interior stays beautifully juicy.<br><br>Sourced from a carefully selected partner ranch renowned for its exceptional husbandry, this finest-quality Awaji Beef has earned the heartfelt praise — "the most delicious beef I\'ve ever had" — even from guests who typically don\'t eat red meat.',
    dish2_title: 'Wood-Fired<br>Carabinero',
    dish2_body: 'Carabinero — the large Atlantic prawn known as "the red devil." To unlock its unparalleled richness, it must be gently cooked over glowing embers with patient, indirect heat.<br><br>The key is not to "grill" but to "warm." Spritzed with oil to prevent drying, it absorbs the fragrance of wood smoke and is finished like a smoked delicacy — causing the prawn\'s tomalley to burst with flavour.<br><br>A luxurious moment where the deep-sea red jewel meets the glowing embers of fire.',
    dish3_title: 'THE BLESS<br>Amuse-Bouche',
    dish3_body: 'A fragrant overture woven by flame — the first dish etched into memory. Premium bluefin tuna ch\u016btoro set atop smoky, toasted bread. The gastronomic journey at THE BLESS Awaji begins with this singular amuse-bouche.<br><br>The deep, lingering aroma of wood fire instantly awakens all five senses. Each delicate flavour dancing on the palate becomes the perfect prologue to the culinary story ahead.',
    dish4_body: 'A supreme single bite woven from nature\'s bounty. Smoky quail egg crowned with the finest Ossetra caviar, bound by a secret sauce of smoked Awaji Island wild boar lard and house-made garlic koji — an artistic amuse-bouche of extraordinary depth.<br><br>Within the toasty fragrance of wood fire, wildness and elegance cross paths in perfect balance, leaving an unforgettable impression. Savoured alongside the elegant effervescence of Champagne, a transcendent experience that envelops all five senses is complete.',
    dish5_title: 'The Golden Hamburger',
    dish5_body: 'The ultimate "Golden Hamburger," finished in the fragrance of wood fire. A premium minced blend of Awaji Beef tenderloin and Kobe Pork shoulder, wrapped in caul fat and carefully grilled over wood flame.<br><br>A toasty aroma and concentrated umami fill the palate with every bite. The finishing touch: an aromatic P\u00e9rigueux sauce fragrant with truffle. A premium hamburger experience unlike anything you have tasted before.',
    dish6_title: 'Mr. Ota\'s Finest<br>Kishu Duck',
    dish6_body: 'A masterpiece: a whole Kishu duck, lovingly raised by Mr. Ota of Kishu, Wakayama, slowly roasted over wood fire. By deliberately leaving the breastbone in during cooking, the gentle heat conducted through the bone achieves a perfectly moist, tender texture with every drop of jus sealed inside.<br><br>Marinated in house-made salt koji, the duck\'s umami deepens and it takes on a rich, fragrant aroma. A sauce of spring onions finished in high-heat oil, lightly harmonised with the bright acidity of sherry vinegar, creates a beautiful contrast against the powerful character of the duck.',
    wine_cellar_sub_jp: 'One exceptional glass. One extraordinary evening.',
    wine_cellar_body1: 'A collection of over 600 wines housed across three private cellars.',
    wine_cellar_body2: 'From Romanée-Conti to Champagnes such as Jacques Selosse and Salon,',
    wine_cellar_body3: 'the most coveted labels every wine lover dreams of wait quietly for their moment.',
    drink_awaji_wine_sub: 'Awaji Wine (Glass / Bottle)',
    drink_wine1: 'Merlot',
    drink_wine2: 'Muscat Bailey A',
    drink_wine3: 'Pione',
    drink_wine4: 'Pétillant Bailey A',
    drink_wine5: 'Awaji Island Limoncello',
    drink_craft_beer_sub: 'Awaji Island Craft Beer',
    drink_beer1: 'Pilsner',
    drink_beer2: 'Red Ale',
    drink_beer3: 'Weizen',
    drink_beer4: 'Pale Ale',
    drink_beer5: 'IPA',
    drink_beer6: 'Island Lemon',
    drink_nonalc_sub: 'Soft Drinks',
    drink_nonalc1: 'Awaji Manma Mikan Juice',
    drink_nonalc2: 'Naruto Orange Juice',
    drink_nonalc3: 'Organic Ginger Ale',
    drink_nonalc4: 'Perrier',
    dining_breakfast_sub_jp: 'A Special Morning to Nourish Body and Soul.',
    dining_breakfast_body: 'A Western-style detox plate — not a buffet, but each dish carefully prepared and served individually. Begin with a silky avocado and Mozart-brand milk smoothie that gently awakens the body, followed by a soup of Awaji Island onions slow-cooked over JOSPER® wood fire to draw out their natural sweetness, warming the morning stomach.<br><br>The main features freshly baked handmade bread using Hokkaido "Yumechikara" wheat at 80% hydration, grilled to a golden fragrance in the JOSPER®, alongside house-made bacon marinated in salt koji for three days before being finished over wood fire. The warmth of skilled hands and the bounty of the flame together make the morning a truly special time.',
    stay_hero_title: 'Stay',
    stay_hero_sub: 'Eight Rooms — Embraced by Sea and Nature',
    rooms_intro_label: 'Accommodation',
    rooms_intro_title: 'Eight Rooms',
    rooms_intro_sub: 'Eight Stories',
    rooms_intro_body: 'Each room has its own design and view. The voice of the sea, the scent of the breeze, the light of morning —<br>all welcomed inside.',
    room_ocean_suite: 'Ocean Suite',
    room_junior_suite: 'Junior Suite',
    room_garden: 'Garden View Room',
    room_grand_garden: 'Grand Garden View',
    room_ocean_view: 'Ocean View Room',
    amenity_label: 'Amenities',
    amenity_title: 'Amenities',
    amenity_sub: 'Carefully Curated',
    spa_hero_title: 'Spa',
    spa_hero_sub: 'Magma Sauna — Restore from Within',
    spa_intro_label: 'Sauna Experience',
    spa_intro_title: 'Magma Earth',
    spa_intro_sub: 'Energy of the Earth',
    spa_intro_body: 'Mt. Fuji lava stones cover every surface, creating a sanctuary at 65°C, 60% humidity, and growth rays (Ikusei-kosen). With a far-infrared emissivity of 93%+, the body is warmed from its deepest core, promoting natural perspiration and profound restoration.',
    gallery_hero_title: 'Gallery',
    gallery_hero_sub: 'Discover THE BLESS AWAJI',
    gallery_all: 'All',
    gallery_dining: 'Dining',
    gallery_spa: 'Spa',
    gallery_rooms: 'Rooms',
    gallery_exterior: 'Exterior',
    reserve_hero_title: 'Reservation',
    reserve_hero_sub: 'Reserve & Inquire',
    form_name: 'Name / お名前',
    form_email: 'Email / メールアドレス',
    form_tel: 'Phone / 電話番号',
    form_date: 'Preferred Date / ご希望日',
    form_guests: 'Number of Guests / 人数',
    form_type: 'Type / ご利用区分',
    form_type_stay: 'Stay',
    form_type_dining: 'Dining',
    form_type_both: 'Stay + Dining',
    form_type_other: 'Other',
    form_message: 'Message / ご要望',
    form_submit: 'Send Inquiry',
    checkin: 'Check-in 15:00 (Last 18:00)',
    checkout: 'Check-out 11:00',
    address: '247 Taikuchi, Sumoto, Hyogo',
    tel: '0799-22-7775',
    email: 'awajiauberge@gmail.com',
    access1_from: 'Sumoto IC',
    access1_time: '10 min',
    access2_from: 'Shin-Kobe',
    access2_time: '60 min',
    access3_from: 'Osaka Umeda',
    access3_time: '90 min',
    access4_from: 'Kyoto',
    access4_time: '120 min',
    footer_address: '247 Taikuchi, Sumoto, Hyogo',
    footer_terms: 'Accommodation Terms',
    footer_privacy_link: 'Privacy Policy',
    footer_legal_link: 'Specified Commercial Transactions',
    footer_reserve: 'Reserve',
    footer_privacy: 'Privacy Policy',
    footer_copyright: '© Copyright 2025 THE BLESS AWAJI All Right Reserved',
    cta_title: 'Begin Your Journey',
    cta_sub: 'Reserve your extraordinary experience',
    cta_btn: 'Reserve Now',
    about_hero_subtitle: 'A hidden retreat surrounded by the rich nature of Awaji Island, where we serve extraordinary cuisine found nowhere else.<br>\n          Known since ancient times as "Miketsukuni" — the land of sacred provisions — Awaji Island has long offered its finest ingredients to the imperial court.<br>\n          We invite you to a one-of-a-kind culinary experience where tradition and innovation become one.',
    about_intro_text: 'The blessings of the island, brought to life by fire and fermentation.<br>\n          As both farmer and chef, we engage sincerely with the nature of Awaji Island.<br>\n          Every dish born from this dedication carries a story and a deep sense of love.',
    about_concept_title_jp: 'Three Core Concepts',
    about_pillar1_h3: '100% Local Ingredients —<br>From Island to Table',
    about_pillar1_block1_title: 'Our Own Organic Farm',
    about_pillar1_block1_body: 'We cultivate pesticide-free vegetables in our own farm adjacent to the restaurant. Guests are also welcome to enjoy a harvest experience. Onions and seasonal vegetables picked from the field right before your eyes arrive on your plate at the peak of freshness.',
    about_pillar1_block2_title: 'Awaji Beef & Island Gibier',
    about_pillar1_block2_body: 'We make lavish use of Awaji Beef, descended from the prized Tajima bloodline, savouring its fine-grained texture and deep umami. We also work with certified gibier — wild boar and deer from the island — under the "AWAJISHIMA Shishika" label, elevating their robust, primal flavour into refined cuisine.',
    about_pillar1_block3_title: 'True Sustainability',
    about_pillar1_block3_body: 'Almost all our ingredients come from Awaji Island. Working closely with local farmers, fishermen, and hunters, we honour every life that reaches our kitchen, wasting nothing. Each dish is crafted with heartfelt gratitude to nature.',
    about_pillar2_h3: 'Wood Fire That Awakens<br>the Ingredient\'s True Power',
    about_pillar2_block1_title: 'Simplicity That Amplifies Umami',
    about_pillar2_block1_body: 'The heart of our kitchen is the wood fire. By using wood itself — not gas — as our heat source, we infuse every ingredient with the bold energy of flame. The gentle fire and fragrant smoke produced as the wood burns wrap each ingredient in a distinctive aroma. Wood-fire cooking yields a perfectly crisped exterior and a succulent, vibrant interior, drawing out the fullest possible umami from every ingredient.',
    about_pillar2_block2_title: 'A Culinary Experience for All Five Senses',
    about_pillar2_block2_body: 'The dancing flames, the crackling of the wood, the rising fragrance of smoke. Watching the ingredients cook right before your eyes offers a special moment — as though you are gathered around a glowing campfire.',
    about_pillar3_h3: 'The Magic of Fermentation,<br>Guided by Koji',
    about_pillar3_block1_title: 'Japan\'s Fermentation Culture, Reimagined',
    about_pillar3_block1_body: 'From miso, soy sauce, and vinegar to house-made shio-koji, soy-sauce koji, and fermented butter — we draw on koji-based fermented ingredients throughout our cooking. Fermentation amplifies the umami compounds in each ingredient, creating mellow, complex layers of flavour. Wild boar is aged in a miso bed to remove any gaminess and deepen its richness; vegetables are pickled in koji to concentrate their natural sweetness.',
    about_pillar3_block2_title: 'Where Wellness Meets Flavour',
    about_pillar3_block2_body: 'Fermented foods support gut health and enhance the nutritional value of ingredients. Without relying on preservatives, we revive the ancestral wisdom of coaxing deliciousness from nature through time and craft.',
    about_chef_body: 'Our head chef lives by the motto "farmer and chef in one," engaging sincerely with the nature of Awaji Island. Sparing no effort — from growing vegetables to preparing fermentation cultures — he converses directly with each ingredient through his own hands, drawing constant inspiration for new dishes.<br><br>\n            He roams the island\'s mountains in search of wild herbs and mushrooms, listening to the stories of hunters and farmers about the food they raise. The dishes born from this dedication carry both a narrative and a profound sense of love.',
    about_location_heading_jp: 'A Blessed Time in an Extraordinary Setting',
    about_location_body: 'We are nestled at the foot of rolling hills and rural landscapes overlooking the Seto Inland Sea. Escape the noise of the city and lose yourself in the gentle, unhurried pace of island life.<br><br>\n            After dark, a sky filled with stars unfolds above you; by day, the soft sea breeze and the whisper of the trees restore the soul.',
    about_auberge_heading_jp: 'A Culinary Journey to Stay',
    about_auberge_body: 'For guests who wish to stay, we can arrange accommodation at our partner properties on the island. Savour the full wood-fire and fermentation course at dinner, then the next morning enjoy a farm harvest experience and a breakfast featuring our fermented creations.<br><br>\n            The chance to experience a slow, satoyama way of life is one of the unique pleasures of a stay at our island auberge.',
    about_limited_card1_h4: 'Intimate Hospitality for a Select Few',
    about_limited_card1_p: 'We limit our seatings to a small number of groups per day — approximately 10 to 12 guests in total. This allows us to devote meticulous care to every dish and ensure that every plate reaches you in its finest possible state.',
    about_limited_card2_h4: 'Seasonal & Limited-Quantity Menus',
    about_limited_card2_p: 'Our ingredients change with the seasons. From the winter-exclusive wood-fired wild boar roast to sauces crafted from aged fermented ingredients that require months of preparation, we offer rare, season-specific dishes that can only be tasted here, at this very time.',
    about_final_body: 'The abundant blessings of Awaji Island,<br>\n          combined with our passion — giving rise to a time and cuisine that exist nowhere else.<br>\n          We trust it will speak deeply to all five of your senses and become a cherished memory.<br><br>\n          A profound sense of fulfilment and a truly special experience that no ordinary meal can provide —<br>\n          we warmly invite you to come and taste it for yourself.',
    about_cta_sub: 'Follow us on Instagram for island news and the latest menu updates',
    faq_page_hero_sub: 'Frequently Asked Questions',
    faq_online_reserve: 'Online Reservation (24 hours)',
    faq_facility_sub: 'Facility Information & Amenities',
    faq_floor_sub: 'Floor Map',
    faq_access_sub: 'Access',
    faq_label_pet: 'Pets',
    faq_label_children: 'Children',
    faq_label_room_service: 'Room Service',
    faq_label_restaurant: 'Restaurant',
    faq_label_sauna: 'Sauna',
    faq_label_parking: 'Parking',
    faq_label_wifi: 'Wi-Fi',
    faq_label_barrier_free: 'Accessibility',
    faq_pet: 'Not permitted',
    faq_children_val: 'Not available',
    faq_children_note: '· Guests under 14 years of age are not permitted to stay.',
    faq_room_service: 'Not available',
    faq_restaurant: 'Our restaurant is available, centred on a "Farm to Table" concept celebrating the seasonal bounty of Awaji Island. Dinner service begins simultaneously for all guests at 18:00. Please enquire at the time of reservation or contact us directly for details.',
    faq_sauna: 'Staying guests may use the Magma Sauna as many times as they wish throughout their stay. Dedicated swimwear is provided, though you are welcome to bring your own.',
    faq_parking: 'On-site parking is available. Please notify us in advance if you are arriving by car.',
    faq_wifi: 'Complimentary Wi-Fi throughout',
    faq_barrier_free: 'Not available. Please note that the building contains a number of staircases.',
    faq_transport_text: 'Nearest bus stop: "Taikeguchi"\nApprox. 4-min walk from the bus stop\n\nKobe Sannomiya → Sumoto BC\nExpress bus, approx. 90 min\n\nOsaka Umeda → Sumoto BC\nApprox. 120 min\n\nSumoto BC → Taikeguchi\nLocal bus service',
    faq_transport_note: '* Please check the Awaji Kotsu website for timetables. The hotel is also accessible on foot (approx. 10 minutes) from Sumoto Bus Centre.',
    faq_car_text: 'Nearest IC: Sumoto IC\n(Kobe-Awaji-Naruto Expressway)\n\nSumoto IC → Route 28 toward Sumoto city, approx. 10 min → Straight ahead approx. 200m past Taikeguchi-kita intersection\n\nFrom Shin-Kobe: approx. 60 min\nFrom Osaka Umeda: approx. 90 min\nFrom Kyoto: approx. 120 min',
    faq_car_note: '* The Akashi Kaikyo Bridge may be subject to traffic restrictions in adverse weather. Please check road conditions in advance.\n* Free parking is available on site for hotel guests.',
    faq_transfer: 'Please contact us directly for details on our transfer service.',
    faq_amenity_shampoo: 'Shampoo & Conditioner',
    faq_amenity_soap: 'Body Wash & Soap',
    faq_amenity_towel: 'Towel & Bath Towel',
    faq_amenity_sponge: 'Body Towel & Sponge',
    faq_amenity_toothbrush: 'Toothbrush Set',
    faq_amenity_dryer: 'Hair Dryer',
    faq_amenity_shaver: 'Razor',
    faq_amenity_nightwear: 'Nightwear',
    faq_amenity_bathrobe: 'Bathrobe',
    faq_amenity_slippers: 'Slippers',
    faq_amenity_lotion: 'Facial Lotion',
    faq_amenity_emulsion: 'Facial Emulsion',
    faq_amenity_cotton: 'Cotton Swabs',
    faq_amenity_fridge: 'Refrigerator',
    faq_amenity_kettle: 'Electric Kettle',
    faq_amenity_tea: 'Tea Set (Complimentary)',
    faq_amenity_safe: 'In-Room Safe',
    faq_fac_sauna: 'Sauna (Magma Sauna)',
    faq_fac_parking: 'Free Parking',
    faq_fac_wifi: 'Free Wi-Fi',
    faq_fac_restaurant: 'Restaurant',
    faq_fac_bar: 'Bar',
    grp_page_hero_sub: 'Full Buyout Plan — Exclusively Yours',
    grp_intro_title_jp: 'Full Buyout Plan',
    grp_intro_p1: 'THE BLESS Awaji, an ocean-view auberge in Sumoto, Awaji Island, offers all 8 rooms for exclusive private buyout, accommodating up to 16 guests.',
    grp_intro_p2: 'Like a luxuriously appointed private villa, the property becomes entirely yours — a completely private sanctuary in which to savour every moment and fully immerse yourself in the world of THE BLESS Awaji.',
    grp_intro_p3: 'It will become an unforgettable memory to share with those closest to you for years to come.',
    grp_features_sub: 'What Makes THE BLESS Awaji Special',
    grp_feat1_title: 'An Exquisite Wood-Fire Course & Live Dining',
    grp_feat1_body: 'Centred on Awaji Island-sourced meat, fish, and vegetables, each ingredient is paired with the ideal wood-fire technique and signature smoky fragrance. In our live kitchen style — where the full theatre of cooking is visible from the counter — the chef\'s performance and presentation make every evening truly extraordinary.',
    grp_feat2_title: 'Artisan Baker\'s Special Morning Plate',
    grp_feat2_body: 'Our breakfast is led by a master baker who moved to Awaji Island from a beloved bakery in Singapore. Freshly baked bread — golden and wonderfully soft from the wood-fire oven — served alongside a fresh salad of local vegetables and house-made bacon, makes for a truly inspiring start to the day.',
    grp_feat3_title: 'Supreme Detox & Restoration in Our Magma Spa Sauna',
    grp_feat3_body: 'Our ultra-premium sauna features bespoke magma plates hewn from the lava of Mt. Fuji. The far-infrared rays and growth rays (ikusei-kosen) radiated by the heated lava warm the body from within, delivering a depth of perspiration that belies the 65°C temperature. Paired with a 12°C cold plunge and a 40°C recovery bath, the ultimate restorative experience awaits.',
    grp_more_sub: 'Further Highlights',
    grp_more1_title: 'Sleep Like Never Before on Japan\'s Finest Mattress',
    grp_more1_body: 'The "Kumogokochi" mattress — 36 cm thick and crafted with unique hourglass springs produced by the only Swiss coil machine of its kind in Japan. A deeper, more restorative sleep than you\'ve ever known, guaranteed.',
    grp_more2_title: 'An Exceptional Wine Selection',
    grp_more2_body: 'Three large wine cellars keep a rolling inventory of over 400 wines and Champagnes — from local Awaji Island vintages to Romanée-Conti. Our team will help you find the perfect pairing for your wood-fire dinner.',
    grp_more3_title: 'Atmospheric Interiors Ideal for Photography & Video',
    grp_more3_body: 'Works by Banksy and other renowned artists are displayed throughout, creating an ambience reminiscent of a private art gallery. Dimmable and polarisable lighting areas allow for striking photo and video backdrops.',
    grp_more4_title: 'Sea Fishing Right on Your Doorstep',
    grp_more4_body: 'The breakwater at Taikuchi Park, directly in front of THE BLESS Awaji, is one of Awaji Island\'s premier fishing spots, teeming with sea bream, black porgy, beltfish, horse mackerel, and mackerel. Your catch can even be incorporated into that evening\'s dinner course.',
    grp_usecases_sub: 'How Guests Use the Space',
    grp_sched1_title: 'Seminar / Retreat / Training / Workshop — Sample Schedule',
    grp_sched1_d1_li1: '15:00  Check-in',
    grp_sched1_d1_li2: '15:30  Seminar / retreat / training / workshop begins',
    grp_sched1_d1_li3: '19:00  Dinner service begins',
    grp_sched1_d1_li4: '21:30  Dinner concludes',
    grp_sched1_d1_li5: '22:00  Sauna & relaxation time',
    grp_sched1_d1_li6: '23:00  Retire for the night',
    grp_sched1_d2_li1: '06:00  Morning coastal walk',
    grp_sched1_d2_li2: '06:30  Morning session begins',
    grp_sched1_d2_li3: '08:00  Morning session ends & breakfast',
    grp_sched1_d2_li4: '09:00  Reflection & share time',
    grp_sched1_d2_li5: '10:30  Tidy up & group photo',
    grp_sched1_d2_li6: '11:00  Check-out & departure',
    grp_sched1_note: '* Extended seminar room use available at additional charge',
    grp_sched2_title: 'Retreat Plan (Yoga / Meditation / Ice Bath / etc.) — Sample Schedule',
    grp_sched2_d1_li1: '13:00  Enzyme detox bath at a nearby partner facility',
    grp_sched2_d1_li2: '15:00  Check-in',
    grp_sched2_d1_li3: '15:30  Magma spa & ice bath session',
    grp_sched2_d1_li4: '17:00  Rest & recovery',
    grp_sched2_d1_li5: '18:00  Mindfulness session',
    grp_sched2_d1_li6: '19:00  Healthy wood-fire retreat dinner',
    grp_sched2_d1_li7: '21:00  Dinner concludes & candlelight session',
    grp_sched2_d1_li8: '22:00  Retire for the night',
    grp_sched2_d2_li1: '06:00  Morning yoga & meditation',
    grp_sched2_d2_li2: '08:00  Breakfast',
    grp_sched2_d2_li3: '09:00  Reflective walk along the coast',
    grp_sched2_d2_li4: '10:00  Reflection & share time',
    grp_sched2_d2_li5: '10:30  Tidy up & group photo',
    grp_sched2_d2_li6: '11:00  Check-out & departure',
    grp_benefits_sub: 'The Exclusive Advantages of a Full Buyout',
    grp_benefit1_title: 'Precious Time, Shared Deeply',
    grp_benefit1_body: 'Sharing a truly special space with family or close friends creates memories that shine brightest throughout a lifetime. Enjoy a meaningful travel experience you will be talking about for years to come.',
    grp_benefit2_title: 'Fully Personalised Menu',
    grp_benefit2_body: 'Dietary restrictions and ingredient preferences are of course accommodated. We can also fulfil requests such as "I\'d love to try this particular Awaji Island ingredient at this time of year." We will do our utmost to honour requests regarding ingredients, cooking methods, and seasoning.',
    grp_benefit3_title: 'Children Welcome',
    grp_benefit3_body: 'With no other guests sharing the property during a buyout, even young children are warmly welcomed to stay. Child-friendly menus can be arranged.',
    grp_benefit4_title: 'Switch to Buffet Style',
    grp_benefit4_body: 'When children are staying, we can switch from the set course to a buffet format. Generous sharing platters of wood-fire dishes the whole family — adults and children alike — can enjoy.',
    grp_benefit5_title: 'Private Minibus Transfer — Turn It into a Tour',
    grp_benefit5_body: 'We can arrange a private minibus transfer through our partner company to create a seamless door-to-door experience.<br>Sannomiya / Shin-Kobe / Kobe Airport: approx. 60 min / Itami Airport: approx. 90 min / Shin-Osaka / Kansai Airport: approx. 120 min',
    grp_rooms_sub: 'Room Layout',
    grp_rooms_intro: 'THE BLESS Awaji offers 8 rooms, each with its own unique views and furnishings. One room is located on the first floor (101); seven are on the second floor (202–208).',
    grp_room101: '52 m² — 1 king bed & 1 sofa bed (bathtub)',
    grp_room202: '45 m² — 2 semi-double beds & 1 sofa bed (bathtub)',
    grp_room203: '37 m² — 2 semi-double beds (shower room)',
    grp_room204: '37 m² — 2 semi-double beds (shower room)',
    grp_room205: '49 m² — 2 semi-double beds (window bathtub) Ocean Suite',
    grp_room206: '33 m² — 2 semi-double beds (shower room)',
    grp_room207: '33 m² — 2 semi-double beds (shower room)',
    grp_room208: '46 m² — 2 double beds (shower room)',
    grp_rooms_note: '* Standard capacity is 16 guests across 8 rooms. Extra beds can accommodate up to 18–20 guests.',
    grp_floormap_sub: 'Venue Floor Map',
    grp_options_sub: 'Available Facilities & Options',
    grp_opt1: '(Complimentary) 120-inch screen with latest projector',
    grp_opt2: '(Complimentary) 100W speaker with 2 wireless microphones',
    grp_opt3: '(Complimentary | 15 mats) Partner yoga instructor available at ¥20,000/hour',
    grp_opt4: '(Complimentary | firewood ¥1,000/bundle) A special evening gathered around a fire beneath the stars',
    grp_opt5: ': Available 15:00–19:00, 22:00–24:00, and 05:00–10:00 the following morning. ¥10,000/hour at any time.',
    grp_pricing_sub: 'Terms & Pricing',
    grp_pricing_per_head: '1 night / 2 days (tax incl.) — ¥37,500 per person',
    grp_pricing_guests_label: 'Guests',
    grp_pricing_guests_val: '16 guests (extra beds available for 18–20 guests; supplement ¥35,000 per person, excl. tax)',
    grp_pricing_incl_label: 'Included',
    grp_pricing_incl_val: 'Exclusive use of all 8 rooms (15:00–11:00 next day), dinner and breakfast for all guests',
    grp_pricing_excl_label: 'Not Included',
    grp_pricing_excl_val: 'All beverages beyond those included in the course (coffee, tea, etc.), paid optional extras',
    grp_pricing_byo_label: 'Corkage',
    grp_pricing_byo_val: 'Wine and Champagne only permitted at dinner; corkage ¥3,000/bottle, maximum 5 bottles. Beer, whisky, and other spirits may not be brought in.',
    grp_pricing_note: 'Multi-night consecutive buyouts (2 nights/3 days, 3 nights/4 days, etc.) and premium VIP packages are also available. We are happy to discuss flexible arrangements — please do not hesitate to enquire.',
    grp_cases_sub: 'Revenue Case Studies',
    grp_cases_intro: 'By combining a premium stay experience at THE BLESS Awaji with added-value programming — training, seminars, retreats, fan meet-and-greets, and more — organisers have successfully charged above the per-person accommodation cost, achieving both high participant satisfaction and meaningful revenue. Past cases have seen ticket prices ranging from ¥50,000 to ¥200,000 per person.',
    grp_case1_label: '¥50,000 × 15 guests (excl. organiser)',
    grp_case2_label: '¥100,000 × 15 guests (excl. organiser)',
    grp_case3_label: '¥200,000 × 15 guests (excl. organiser)',
    grp_flow_sub: 'How to Book',
    grp_step1_title: 'Check Availability',
    grp_step1_desc: 'Let us know your preferred dates',
    grp_step2_title: 'Apply & Pay',
    grp_step2_desc: 'Complete your application and payment',
    grp_step3_title: 'Detail Planning',
    grp_step3_desc: 'We\'ll discuss menus, options, and all the details',
    grp_step4_title: 'Arrive & Check In',
    grp_step4_desc: 'We welcome you with warmth and care',
    grp_step5_title: 'Check Out & Farewell',
    grp_step5_desc: 'We look forward to welcoming you again',
    grp_faq_sub: 'Frequently Asked Questions',
    grp_q1: 'Until what time can we use the restaurant area after dinner?',
    grp_a1: 'The restaurant area is available until 23:00.',
    grp_q2: 'May we bring our own drinks and snacks to enjoy in our rooms?',
    grp_a2: 'Yes, this is permitted. However, during dinner service, only wine and Champagne may be brought in, subject to a corkage fee of ¥3,000 per bottle with a maximum of 5 bottles. Beer, whisky, and other spirits may not be brought in to the dining room. Guests are asked to tidy up after in-room drinking. In cases where thorough cleaning is required — such as in the event of illness — a cleaning fee of ¥30,000 will be charged.',
    grp_q3: 'Can lunch be provided for multi-night buyouts?',
    grp_a3: 'This is generally possible, though availability may vary. Please confirm at the time of booking.',
    grp_contact_sub: 'Contact & Enquiries',
    grp_contact_intro: 'Please feel free to reach out to us through any of the channels below.',
    grp_tel_note: 'Available 10:00–20:00',
    grp_email_note: 'Available 24 hours',
    idx_concept_body: 'We are more than a beautiful view and a luxurious meal.<br>Wood-fire cuisine and our magma spa offer a profound reset for mind and body.<br>"A meal that moves the soul" and "an auberge that fulfils body and spirit" —<br>an unforgettable experience awaits.',
    idx_dining_h2: 'The Aesthetics of Fire',
    idx_dining_desc: 'Awaji beef and the freshest seafood, cooked on Japan\'s first JOSPER® wood-fire grill.<br>Full course, 9 dishes from 19:00',
    idx_dining_btn: 'Explore Dining',
    idx_stay_jp: 'Eight Rooms — Quiet Stays',
    idx_stay_body: 'Eight rooms, each with its own character.<br>Ocean views, garden retreats.<br>Every room holds both silence and luxury.',
    idx_stay_btn: 'View Rooms',
    idx_spa_h2: 'Restore in Silence',
    idx_spa_body: 'A magma sauna using Mt. Fuji lava stones.<br>Warming from your deepest core, stilling the mind.<br>Complimentary for all overnight guests.',
    idx_spa_btn: 'Explore Spa',
    idx_stay_reserve: 'Reserve a Room',
    idx_dining_reserve: 'Reserve Dining',
    room_capacity_2: 'Up to 2 guests',
    room_capacity_3: 'Up to 3 guests',
    room1_beds: '2 Semi-double beds + Sofa',
    room2_beds: '1 King bed + Sofa',
    room4_beds: '2 Double beds + Sofa',
    room1_desc: 'The finest location, with the sea of Awaji Island directly before you. A sweeping ocean view and luxurious space come together to create an unforgettable stay.',
    room2_desc: 'A spacious living area seamlessly blends with a refined bedroom. Perfect for families or groups seeking a special retreat.',
    room3_desc: 'A tranquil room overlooking a lush garden. Spend intimate, unhurried time with nature\'s sounds as your backdrop.',
    room4_desc: 'More spacious and open than the Garden View Room. Light streaming through large windows fills the space with warmth.',
    room5_desc: 'A room commanding panoramic views of the gentle Awaji Island sea. Enjoy the ever-changing face of the ocean from sunrise to sunset.',
    amenity_body: 'To enrich your stay, THE BLESS AWAJI has prepared an original amenity collection. With premium materials and signature scents, enjoy a truly special time away from the everyday.',
    amenity_item1: 'Original Amenity Set',
    amenity_item2: 'Aesop Bath Amenities',
    amenity_item3: 'Original Towel',
    amenity_item4: 'Original Bathrobe',
    stay_map_address: '247 Taikuchi, Sumoto, Hyogo 656-0011',
    spa_feat1_title: 'Temperature',
    spa_feat1_body: 'At 65°C — the gentlest yet most deeply penetrating temperature. You can bathe for extended periods without strain, emerging balanced and restored.',
    spa_feat2_title: 'Humidity',
    spa_feat2_body: 'At 60% humidity — higher than a conventional sauna — skin respiration is activated. Combined with ikusei-kosen (growth rays), the warmth penetrates to the body\'s core.',
    spa_feat3_title: 'Far-infrared Emissivity',
    spa_feat3_body: 'Mt. Fuji lava stones emit far-infrared rays at 93%+. Containing over 30 natural minerals, these stones create an ideal thermal environment.',
    spa_lava_jp: 'Mt. Fuji Lava Plates Across Every Floor and Wall',
    spa_lava_body1: 'The defining feature of the Magma Sauna Room is the natural lava (magma) plates from Mt. Fuji that cover every surface — floor and walls alike. Heated by steam, they create an environment akin to an "air hot spring without water."',
    spa_lava_body2: 'The natural lava is also rich in over 30 minerals, which permeate the air alongside the steam. The simultaneous generation of negative ions works in harmony to guide both mind and body into deep relaxation.',
    spa_lava_f1: 'High reflective heat efficiency',
    spa_lava_f2: 'High radiant heat effect',
    spa_lava_f3: 'Over 30 natural minerals (including vanadium)',
    spa_lava_f4: 'Far-infrared emissivity of 93%+, also known as ikusei-kosen',
    spa_lava_f5: 'Gently raises core body temperature',
    spa_lava_f6: 'Earthing effect',
    spa_water_jp: 'Geological Filtration System (LOCA)',
    spa_water_body1: 'THE BLESS AWAJI spa is equally devoted to its cold plunge. By introducing the Geological Filtration (LOCA) system — filtering tap water through Mt. Fuji lava stones — we have achieved a water quality close to natural Mt. Fuji spring water.',
    spa_water_body2: 'The lava-filtered water is fine and gentle, perfectly suited to skin warmed from within. Its high permeability deepens the benefits of alternating hot and cold immersion.',
    spa_lounge_jp: 'Recovery Lounge',
    spa_lounge_body: 'After the sauna and cold plunge, take time in quiet contemplation — the Japanese art of "totonou" (achieving equilibrium). Breathing settles, thoughts quieten, and body and mind return to their natural state. A special space designed for that profound reset.',
    spa_tbl_use: 'Availability',
    spa_tbl_temp: 'Temperature',
    spa_tbl_hum: 'Humidity',
    spa_tbl_mat: 'Material',
    spa_tbl_mat_val: 'Mt. Fuji lava stone (entire floor & walls)',
    spa_tbl_feat: 'Features',
    spa_tbl_feat_val: 'Far-infrared 93%+, Ikusei-kosen',
    spa_book_btn: 'Book a Stay to Access',
    scroll_down: 'Scroll',
    terms_hero_title: 'Accommodation Terms',
    terms_hero_sub: 'THE BLESS Awaji — Accommodation Terms',
    privacy_hero_title: 'Privacy Policy',
    privacy_hero_sub: 'THE BLESS Awaji — Privacy Policy',
    legal_hero_title: 'Specified Commercial Transactions',
    legal_hero_sub: 'THE BLESS Awaji — Specified Commercial Transaction Act',
    legal_jp_only_notice: 'This document is only available in Japanese, as it is a legally binding document under Japanese law.',
  },
};

let currentLang = localStorage.getItem('bless_lang') || 'jp';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('bless_lang', lang);
  applyTranslations();
  updateLangToggle();
}

function t(key) {
  return i18n[currentLang][key] || i18n['jp'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key] !== undefined) {
      el.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[currentLang][key] !== undefined) {
      el.innerHTML = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key] !== undefined) {
      el.placeholder = i18n[currentLang][key];
    }
  });

  // 法的文書ページのEN注記バナー（不要になったため非表示）
  const notice = document.getElementById('legal-en-notice');
  if (notice) {
    notice.style.display = 'none';
  }

  // data-lang-show: 指定言語のみ表示
  document.querySelectorAll('[data-lang-show]').forEach(el => {
    const showFor = el.getAttribute('data-lang-show');
    el.style.display = (showFor === currentLang) ? '' : 'none';
  });
}

function updateLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    const jpEl = toggle.querySelector('[data-lang="jp"]');
    const enEl = toggle.querySelector('[data-lang="en"]');
    if (jpEl && enEl) {
      jpEl.classList.toggle('active', currentLang === 'jp');
      jpEl.classList.toggle('inactive', currentLang !== 'jp');
      enEl.classList.toggle('active', currentLang === 'en');
      enEl.classList.toggle('inactive', currentLang !== 'en');
    }
  });
}

/* ── Header Scroll Behavior ── */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function updateHeader() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/* ── Hamburger / Nav Overlay ── */
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.getElementById('nav-overlay');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('open');
    overlay.classList.toggle('open', !isOpen);
    hamburger.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Dot Navigation ── */
function initDotNav() {
  const dotNav = document.getElementById('dot-nav');
  if (!dotNav) return;

  const sections = document.querySelectorAll('[data-section]');
  const dots = dotNav.querySelectorAll('.dot-nav-item');

  function updateDots() {
    const scrollY = window.scrollY + window.innerHeight / 2;
    let activeIdx = 0;

    sections.forEach((section, idx) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        activeIdx = idx;
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIdx);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      if (sections[idx]) {
        sections[idx].scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', updateDots, { passive: true });
  updateDots();
}

/* ── Scroll Reveal Animation ── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}


/* ── Language Toggle Click ── */
function initLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      setLang(currentLang === 'jp' ? 'en' : 'jp');
    });
  });
}

/* ── Gallery Filter & Lightbox ── */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (cat === 'all' || item.getAttribute('data-cat') === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if (lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Sent ✓';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ── Parallax (subtle) ── */
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;

  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
      const rect = el.closest('section, .hero, .page-hero')?.getBoundingClientRect();
      if (rect) {
        el.style.transform = `translateY(${scrollY * speed * 0.3}px)`;
      }
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
}

/* ── Floating CTA (Mobile) ── */
function initFloatingCTA() {
  if (window.innerWidth > 768) return;

  const RESERVE_URL = 'https://reserve.489ban.net/client/the-bless/0/plan/availability/daily';
  const CONTACT_MAIL = 'mailto:awajiauberge@gmail.com';

  const cta = document.createElement('div');
  cta.className = 'float-cta';
  cta.setAttribute('role', 'navigation');
  cta.setAttribute('aria-label', 'Contact & Reserve');

  cta.innerHTML = `
    <div class="float-cta-inner">
      <a class="float-cta-contact" href="${CONTACT_MAIL}" aria-label="メールでお問い合わせ">
        <span class="float-cta-btn-label">Contact</span>
      </a>
      <a class="float-cta-reserve" href="${RESERVE_URL}" target="_blank" rel="noopener" aria-label="Reserve">
        <span class="float-cta-btn-label">Reserve</span>
      </a>
    </div>
  `;

  document.body.appendChild(cta);

  const hero = document.querySelector('.hero, .page-hero');
  const footer = document.getElementById('site-footer');
  const navOverlay = document.getElementById('nav-overlay');

  function updateCTAVisibility() {
    const scrollY = window.scrollY;
    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 200;
    const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
    const winBottom = scrollY + window.innerHeight;
    const isNavOpen = navOverlay && navOverlay.classList.contains('open');

    if (isNavOpen) {
      cta.classList.remove('visible');
      return;
    }

    if (scrollY > heroBottom - 100 && winBottom < footerTop + 80) {
      cta.classList.add('visible');
      cta.classList.remove('hidden-behind-footer');
    } else if (winBottom >= footerTop + 80) {
      cta.classList.add('hidden-behind-footer');
      cta.classList.remove('visible');
    } else {
      cta.classList.remove('visible');
      cta.classList.remove('hidden-behind-footer');
    }
  }

  window.addEventListener('scroll', updateCTAVisibility, { passive: true });
  window.addEventListener('resize', updateCTAVisibility, { passive: true });
  updateCTAVisibility();

  if (navOverlay) {
    const observer = new MutationObserver(updateCTAVisibility);
    observer.observe(navOverlay, { attributes: true, attributeFilter: ['class'] });
  }
}

/* ── Hero Slideshow Indicators ── */
function initHeroSlideshow() {
  const indicators = document.querySelectorAll('.hero-indicator');
  if (!indicators.length) return;

  const SLIDE_DURATION = 7000; // must match CSS animation (28s / 4 slides)
  let current = 0;

  function activate(index) {
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
      // Re-trigger CSS progress bar animation
      if (i === index) {
        ind.style.animation = 'none';
        void ind.offsetWidth; // reflow
        ind.style.animation = '';
      }
    });
    current = index;
  }

  // Click to jump
  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      activate(i);
      clearInterval(timer);
      timer = setInterval(next, SLIDE_DURATION);
    });
  });

  function next() {
    activate((current + 1) % indicators.length);
  }

  let timer = setInterval(next, SLIDE_DURATION);
  // Kick off initial progress bar
  activate(0);
}

/* ── Floating Reserve Button (bottom-right) ── */
function initFloatReserve() {
  const btn = document.querySelector('.float-reserve');
  if (!btn) return;

  function onScroll() {
    btn.classList.toggle('is-visible', window.scrollY > 200);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNav();
  initDotNav();
  initReveal();
  initLangToggle();
  initGallery();
  initContactForm();
  initParallax();
  initFloatingCTA();
  initHeroSlideshow();
  initFloatReserve();
  applyTranslations();
  updateLangToggle();
});
