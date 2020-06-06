new Vue({
    el: '#app',
    data: function () {
        return {
            storeName: '店舗名を入力してくださいね',
            storePicPath: './img/store.jpg',
        };
    },
    methods: {
        //店舗画像をアップロードする
        uploadStorePic: function () {

        },
        //'MenuCreate.html'に遷移
        moveToMenuCreate: function () {
            location.href = 'MenuCreate.html';
        },
    }
});

//memo
//・店名をDBへアップロードの関数を作成
//・店舗画像をDBへアップロードの関数を作成