# またつまらぬコードを書いてしまった

タイトルの通り、つまらぬコードばかりです。

プログラムの実行は、自己責任のもと行ってください。

## freee の「[自動で経理](https://secure.freee.co.jp/wallet_txns/stream)」の画面一覧にある項目の登録作業を行うワンライナー

https://www.youtube.com/watch?v=yYSmyicS8Lo

<!-- prettier-ignore -->
```javascript
Array.from(document.getElementsByClassName('vb-button vb-button--appearancePrimary vb-button--small vb-mr25')).map((element) => element.click());
```
