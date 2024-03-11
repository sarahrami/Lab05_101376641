class CustomerTwo {
   private firstName: string
   private lastName: string

   constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
   }
   
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
} 

let customerTwo = new CustomerTwo("John", "Smith")
customerTwo.greeter()
