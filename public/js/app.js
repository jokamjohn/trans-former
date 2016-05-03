var itemsRef = new Firebase("https://trans-former.firebaseio.com/data/");
var vm = new Vue({
    el: "#app",
    firebase: {
        // can bind to either a direct Firebase reference or a query
        items: itemsRef.limitToLast(25),

        anObject: {
            source: new Firebase("https://trans-former.firebaseio.com/data/"),
            // optionally bind as an object
            asObject: true,
            // optionally provide the cancelCallback
            cancelCallback: function () {}
        }
    },
    
    methods: {
        animalName: function (capturedTag) {
            switch(capturedTag) {
                case 27209:
                    return "Mpuga";
                    break;

                case 28233:
                    return "Kyozi";
                    break;

                case 29001:
                    return "Siina";
                    break;

                case 4294953522:
                    return "Ngabo";
                    break;

                case 4294955080:
                    return "Kyiroko";
                    break;

                case 28489:
                    return "Kanyibure";
                    break;
                default:
                return "UNKNOWN";
            }
        },
        timeConverter: function (UNIX_timestamp){
            var dateTime = new Date(UNIX_timestamp * 1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = dateTime.getFullYear();
            var month = months[dateTime.getMonth()];
            var date = dateTime.getDate();
            var hour = dateTime.getHours();
            var min = dateTime.getMinutes();
            var sec = dateTime.getSeconds();
            return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        }
    }
});
