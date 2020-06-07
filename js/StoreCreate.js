new Vue({
    el: '#app',
    data: function () {
        return {
            storeName: '',
            storePicPath: '',
        };
    },
    methods: {
        //店舗画像をアップロードする
        uploadStorePic: function () {
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
    }
});

//memo
//・店名をDBへアップロードの関数を作成
//・店舗画像をDBへアップロードの関数を作成