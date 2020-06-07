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

function uploadImage() {
    const ref = firebase.storage().ref()
    const file = document.querySelector("#photo").files[0]
    const name = new Date() + '-' + file.name
    const metadata = {
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata)
    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url)
            alert("Image upload sucessfully")
            const image = document.querySelector('#image')
            image.src
        })

}

//memo
// done! ・店名をDBへアップロードの関数を作成
//・店舗画像をDBへアップロードの関数を作成