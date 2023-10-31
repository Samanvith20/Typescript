"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // public keyword
    function User(email, name) {
        this.email = email;
        this.name = name;
        // private keyword
        this._classstudent = 2;
        //protected keyword
        this.rollno = 55;
        this.user_id = "samanvith";
    }
    Object.defineProperty(User.prototype, "classstudent", {
        get: function () {
            return this._classstudent;
        },
        // setter cannot have a return type
        set: function (countnumber) {
            if (countnumber <= 2) {
                throw Error("count number should be less than (or) equal to 2");
            }
            this.classstudent = countnumber;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
// differnce between the protected and private is the private can be accessable only in the given class but protected can be accessible in the given class and also an inheritance class
var admin = /** @class */ (function (_super) {
    __extends(admin, _super);
    function admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isinheritance = true;
        return _this;
        //_classstudent()
    }
    admin.prototype.changerollno = function () {
        this.rollno = 45;
    };
    return admin;
}(User));
exports.default = User;
