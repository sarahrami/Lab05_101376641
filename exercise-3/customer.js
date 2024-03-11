var CustomerTwo = /** @class */ (function () {
    function CustomerTwo(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CustomerTwo.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return CustomerTwo;
}());
var customerTwo = new CustomerTwo("John", "Smith");
customerTwo.greeter();
