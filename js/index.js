new Vue({
    el: '#app',
    // data: "",
    methods: {
        //"create_store.html"に遷移
        moveToStoreCreate: function () {
            location.href = "store_create.html";
        },
        //"store_list.html"に遷移
        moveToStoreList: function () {
            location.href = "https://www.google.com/"
        }
    }
});