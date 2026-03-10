# THE BLESS AWAJI — サイト構築プラン

## コンセプト

**Farm to Table Auberge — 淡路島**
魂が震える食事と、静寂の中の滞在。
JOSPER® 薪火グリルを核とした、唯一無二のオーベルジュ体験。

### デザイン方針
- **余白重視**：圧迫感をなくす。セクションの min-height は抑えめ（65〜70vh）
- **ミニマルラグジュアリー**：Aman / Six Senses 的な品格
- **クリーム × チャコール**：ベースカラーを統一（`var(--cream)` / `var(--charcoal)`）
- **英字イタリック見出し**：フォントは serif italic、font-weight 300
- **画像は小さめに**：aspect-ratio は 21/6（横長）、3/4（縦）を基本

---

## ページ構成

| ページ | ファイル | 状態 |
|--------|----------|------|
| TOP | index.html | ✅ 完成・調整済み |
| Dining | dining.html | ✅ Tonight's Menu 削除済み |
| Stay | stay.html | ✅ |
| Spa | spa.html | ✅ |
| Gallery | gallery.html | ✅ |
| Group | group.html | ✅ |
| Reservation / Contact | private.html | ✅ |
| **プランページ** | plan.html | 🔲 検討中 |

---

## 各ページの役割

### TOP (index.html)
- Hero スライドショー（5枚・Ken Burns）
- Editorial Intro（Dining 導線）
- Feature: The Art of Fire（JOSPER® 紹介）
- Food Showcase
- Stay Feature
- Story CTA

### Dining (dining.html)
- JOSPER® 説明（ブランドストーリー）
- Farm to Table 哲学
- Dish Stories（料理ストーリー × 6品）
- Wine Cellar
- Breakfast
- CTA

---

## 画像運用ルール

### WebP 変換フロー
1. `public/images/new/` フォルダに JPG / PNG を入れる
2. ターミナルで `npm run webp-new` を実行
3. WebP に変換 → 元ファイル自動削除
4. 変換済み WebP を適切なサブフォルダに移動して使う

### フォルダ構成
```
public/images/
  hero/        ← ヒーロー画像
  dining/      ← ダイニング・料理
  cuisine/     ← 料理クローズアップ
  rooms/       ← 客室
  spa/         ← スパ
  new/         ← 新規追加画像の投入口（変換後は移動）
```

---

## 残タスク・検討事項

### 優先度 高
- [ ] プランページ（plan.html）作成を検討
  - 宿泊プラン（ディナー付き・朝食付きなど）
  - ダイニングプラン（ランチ・ディナー）

### 優先度 中
- [ ] モバイル表示の最終確認
- [ ] OGP 画像の最適化
- [ ] Google Analytics / 予約システム連携確認

### 優先度 低
- [ ] Privacy Policy ページ（現在 # リンク）
- [ ] FAQ ページ

---

## 技術スタック

- **フロントエンド**：HTML / CSS / Vanilla JS
- **サーバー**：Node.js + Express（`server.js`）
- **画像**：WebP（sharp で変換）
- **フォント**：Google Fonts（Cormorant Garamond 系）
- **ローカル起動**：`npm run dev` → http://localhost:3000
