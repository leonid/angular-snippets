angular.module('modal.scope', ['ui.bootstrap']);
angular.module('modal.scope').controller('ModalDemoCtrl', function ($scope, $modal, $log) {
  $scope.data = {
    name: '',
    serial: '',
  };
  $scope.didSelect = false;
  $scope.items = [{
    name: '1',
    serial: '1s',
  }, {
    name: '2',
    serial: '2s',
  }, {
    name: '3',
    serial: '3s',
  },];
  $scope.data = {
    name: '',
    serial: '',
  };

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        },
      },
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;

      console.log(selectedItem);
      if (selectedItem) {
        $scope.data.name = $scope.selected.name;
        $scope.data.serial = $scope.selected.serial;
        $scope.didSelect = true;
      }

    }, function (result) {

      $log.info('Modal dismissed at: ' + new Date());
      $scope.didSelect = false;
    });
  };
});

angular.module('modal.scope').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.editable = items[0];

  $scope.ok = function () {
    $modalInstance.close($scope.editable);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss(false);
  };
});
