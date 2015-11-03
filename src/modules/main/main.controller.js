export default class MainController {

  constructor($mdDialog, helloService) {
    this.helloService = helloService;
    this._mdDialog = $mdDialog;
  }

  test() {
    this.helloService.sayHello();
  }

  showDialog() {

    alert = this._mdDialog.alert({
        title: 'Test Dialog',
        content: 'Hello There!',
        ok: 'Close'
      });

      this._mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });

  }

}
