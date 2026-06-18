// HIG 営業デモ — 共通ナビ注入（全ページ共有）
// Salesforce Lightning風。各タブ＝オブジェクトのリストビュー。レコード詳細はリスト/関連リストから遷移。
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var nav = [
    { key: 'home', label: 'ホーム', href: 'index.html' },
    {
      key: 'dash', label: 'ダッシュボード', href: 'dashboard-weekly.html',
      menu: [
        { label: '週報（毎週全員）', href: 'dashboard-weekly.html' },
        { label: '営業チーム', href: 'dashboard-team.html' },
        { label: '個人', href: 'dashboard-personal.html' },
        { label: '四半期・経営', href: 'dashboard-quarter.html' },
        { label: '出荷・売上（Tシステム連携）', href: 'dashboard-shipping.html' }
      ]
    },
    { key: 'acct', label: '取引先', href: 'accounts.html' },
    { key: 'contact', label: '取引先責任者', href: 'contacts.html' },
    { key: 'opp', label: '商談', href: 'opportunities.html' },
    { key: 'act', label: '活動', href: 'activities.html' },
    { key: 'sample', label: 'サンプル', href: 'sample-follow.html' },
    { key: 'prod', label: '商品', href: 'products.html' },
    {
      key: 'more', label: 'その他', href: 'mapping.html',
      menu: [
        { label: '対応表 整備（名寄せ）', href: 'mapping.html' },
        { label: '承認プロセス', href: 'approval.html' },
        { label: '新規 取引先 登録', href: 'account-new.html' },
        { label: '週報入力', href: 'weekly-report.html' }
      ]
    }
  ];

  var tabsHtml = nav.map(function (n) {
    var active = (n.key === page) ? ' active' : '';
    if (n.menu) {
      var items = n.menu.map(function (m) { return '<a href="' + m.href + '">' + m.label + '</a>'; }).join('');
      return '<span class="dd"><a class="' + active.trim() + '" href="' + n.href + '">' + n.label + '</a>' +
        '<div class="dd-menu">' + items + '</div></span>';
    }
    return '<a class="' + active.trim() + '" href="' + n.href + '">' + n.label + '</a>';
  }).join('');

  var header =
    '<div class="appbar">' +
    '  <div class="logo"><span class="badge">HIG</span> 営業</div>' +
    '  <div class="search"><input placeholder="検索（取引先・施設・商談・品番…）"></div>' +
    '  <div class="right"><span class="ico">🔔</span><span class="ico">⚙️</span>' +
    '  <span class="avatar">倉</span></div>' +
    '</div>' +
    '<nav class="tabs">' + tabsHtml + '</nav>';

  document.body.insertAdjacentHTML('afterbegin', header);
})();
