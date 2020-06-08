new Vue({
    el: '#app',
    data: function () {
        return {
            itemName1: '',
            itemPrice1: '',
            itemPicPath1: '',
        };
    },
    methods: {
        //フォームの入力内容をCloud Firestoreとstorageに送信
        pushStoreToDB: function () {

            //Storageに店舗画像を追加
            const ref = firebase.storage().ref()
            const file = document.querySelector("#storePic").files[0]
            const name = new Date() + '_' + file.name
            const metadata = {
                contentType: file.type
            }
            const task = ref.child('images/' + name).put(file, metadata)
            task
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(url => {
                    console.log(url)
                    alert("店舗登録が完了しました")
                    //#imageにURLを突っ込む方法
                    // const image = document.querySelector('#image')
                    // image.src = url

                    //Cloud Firestoreに店舗名と画像URLを追加
                    itemDB.add({
                        storeName: this.storeName,
                        storePicPath: url,
                        storeColor: "",
                    });
                })

        },
    }
});

//memo
// 