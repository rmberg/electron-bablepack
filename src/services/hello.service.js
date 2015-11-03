
class HelloService {

  sayHello() {
      console.log("Hello, World!");
  }

}

export default angular.module('services.helloService', [])
  .service('helloService', HelloService)
  .name;
