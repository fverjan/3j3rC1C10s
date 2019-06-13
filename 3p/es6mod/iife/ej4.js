(function (x){
    return function (y) {
        return function (z) {
            return x+y+z;
        };
    };
}
)(1)(2)(3);
