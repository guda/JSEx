/*
    JavaScript String Extensions v1.0.0
    Author Senad Meškin, 2016.
*/
if (!String.prototype.contains) {
    String.prototype.contains = function (s) {
        return this.toString().indexOf(s) > -1;
    }
}
/*
    Convert string to array passing separator, or to array of arrays passing second separator
*/
if (!String.prototype.toArray) {
    String.prototype.toArray = function (s1, s2) {
        var s = this.toString();
        if (s2 == null) {
            return s.toString().split(s1);
        } else {
            var d = s.toArray(s1);
            var r = [];
            for (var x in d) {
                r.push(d[x].split(s2));
            }
            return r;
        }
    }
}
//Check if string is email
if (!String.prototype.isEmail) {
    String.prototype.isEmail = function () {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.toString());
    }
}
//Check if string is empty
if (!String.prototype.isEmpty) {
    String.prototype.isEmpty = function () {
        return this.toString().length == 0;
    }
}
//trim string
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
//deserialize string to object
if (!String.prototype.deserialize) {
    String.prototype.deserialize = function () {
        return JSON.parse(this.toString());
    }
}
