new Vue({
    el: '#app',
    data: function () {
        return {
            storeName: '',
            storePicPath: '',
            storeColor: '',
        };
    },
    methods: {
        //店舗画像をアップロードする
        previewStorePic: function () {
            const files = this.$refs.upfile;
            const fileImg = files.files[0];
            if (fileImg.type.startsWith("image/")) {
                this.storePicPath = window.URL.createObjectURL(fileImg);
            }
        },
        //'MenuCreate.html'に遷移
        moveToMenuCreate: function () {
            location.href = 'MenuCreate.html';
        },
        //フォームの入力内容をCloud Firestoreに送信
        pushStoreToDB: function () {
            storeDB.add({
                storeName: this.storeName,
                storePicPath: "",
            })
        },
        downloadImgFromDB: function () {
        },
    }
});



//memo
// done! ・店名をDBへアップロードの関数を作成
//・店舗画像をDBへアップロードの関数を作成