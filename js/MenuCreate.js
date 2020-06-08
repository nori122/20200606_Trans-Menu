new Vue({
    el: '#app',
    data: function () {
        return {
            itemName1: '',
            itemPrice1: '',
            itemPicPath1: '',
            itemName2: '',
            itemPrice2: '',
            itemPicPath2: '',
            itemName3: '',
            itemPrice3: '',
            itemPicPath3: '',
            itemName4: '',
            itemPrice4: '',
            itemPicPath4: '',
        };
    },
    methods: {
        //フォームの入力内容をCloud Firestoreとstorageに送信
        pushItemsToDB: function () {
            this.pushItem1toDB()
            this.pushItem2toDB()
        },

        pushItem1toDB: function () {
            //Storageに商品画像を追加
            const ref = firebase.storage().ref()
            const file = document.querySelector("#itemPic1").files[0]
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
                    //できればv-bindでここに描画したいので、これは妥協案
                    const image = document.querySelector('#itemPreview1')
                    image.src = url

                    //Cloud Firestoreに店舗名と画像URLを追加
                    itemDB.add({
                        itemName1: this.itemName1,
                        itemPrice1: this.itemPrice1,
                        itemPicPath1: url,

                        // itemName2: this.itemName2,
                        // itemPrice2: this.itemPrice2,
                        // itemPicPath2: url,

                        // itemName3: this.itemName3,
                        // itemPrice3: this.itemPrice3,
                        // itemPicPath3: url,

                        // itemName4: this.itemName4,
                        // itemPrice4: this.itemPrice4,
                        // itemPicPath4: url,
                    });
                })

        },
        pushItem2toDB: function () {
            //Storageに商品画像を追加
            const ref = firebase.storage().ref()
            const file = document.querySelector("#itemPic2").files[0]
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
                    //できればv-bindでここに描画したいので、これは妥協案
                    const image = document.querySelector('#itemPreview2')
                    image.src = url

                    //Cloud Firestoreに店舗名と画像URLを追加
                    itemDB.add({
                        // itemName1: this.itemName1,
                        // itemPrice1: this.itemPrice1,
                        // itemPicPath1: url,

                        itemName2: this.itemName2,
                        itemPrice2: this.itemPrice2,
                        itemPicPath2: url,

                        // itemName3: this.itemName3,
                        // itemPrice3: this.itemPrice3,
                        // itemPicPath3: url,

                        // itemName4: this.itemName4,
                        // itemPrice4: this.itemPrice4,
                        // itemPicPath4: url,
                    });
                })

        },
    }
});

//memo
// 