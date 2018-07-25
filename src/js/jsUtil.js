var jsUtil = {
    inherit: function(target, origin) {
        var temp = function() {};
        temp.prototype = origin.prototype;
        target.prototype = new temp();
        target.prototype.constructor = target;
    },
    extends: function(origin) {
        var result =  function () {
            origin.apply(this, arguments);
        };
        this.inherit(result, origin);
        return result;
    },
    single: function(origin) {
        var singleResult = (function() {
            var instence;
            return function () {
                if(typeof(instence) == 'object') {
                    return instence;
                }
                origin && origin.apply(this, arguments)
            }
        })()
        origin && this.inherit(singleResult, origin);
        return singleResult;
    }
}

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};