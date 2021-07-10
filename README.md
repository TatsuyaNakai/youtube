## Youtube APIを試しましたが、status error code 400が出てきて動画再生することができません。

こちらのサイトを試して作っていました。
[Youtube APIを使って検索+再生をやってみた](https://qiita.com/okula-hs/items/6fc2986e7e3bf9741628)

画面としては、youtubeの再生画面は表示されるのですが、再生することができません。
コンソールを確認したところ、**error code 400**, 
messageには **API key not valid. Please pass a valid API key**という表示がありました。
いつもstates codeは200なのに、今回は400だったので、こちらから調べていくことにしました。
[400 Bad Request](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/400)

僕が考えた答えとしては、APIの取得方法が間違っているのかと思い、YoutubeAPIの取得方法を再度調べました。

APIが初めてなので、間違っていると思い以下のサイトを参考にしましたが、結果としてはいまも変わらず表示されませんでした。
[Youtube Data API で取得したデータをPython（Pandas/matplotlib）で可視化](https://qiita.com/Ryooota/items/7084bb7dcb655d86eadb)
[YouTube API APIキーの取得方法](https://qiita.com/chieeeeno/items/ba0d2fb0a45db786746f)

google Cloud Platformによれば5分以上設定に時間がかかるかも。とありましたが、それも改善されませんでした。。
エラーの原因についてまだ詳しくないので、何を見ていけばいいのか教えてもらえたらと思います。

