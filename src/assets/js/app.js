var app = angular.module('contact', []);
app.controller("contactController", ['$scope', '$http', function ($scope, $http) {


    $scope.formData = {

        name: '',
        email: '',
        phone:'',
        company:'',
        message: ''
    };
    console.log(formData);
    // process the form
    $scope.processForm = function () {
        $http({
            method: 'POST',
            url: 'http://localhost/contact.php',
            data: $scope.formData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })


    };


} ]);