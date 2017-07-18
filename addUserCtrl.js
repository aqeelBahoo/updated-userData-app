angular.module("myApp")
    .controller("addUserCtrl", function($scope,$location){
        var indexforEditData = localStorage.getItem("index");
        console.log(typeof (indexforEditData))
        localStorage.removeItem("index");
        $scope.addUser = function(){
            var firstName= $scope.firstName;
            var lastName= $scope.lastName;
            var email= $scope.email;
          //  var address= $scope.address;
            var phone= $scope.phone;
            var userData = {"firstName": firstName, "lastName": lastName,
                "email": email, "phone": phone,"d": new Date().toLocaleString()
            };
            if (indexforEditData != -1) {
                if(firstName && lastName && email && phone) {
                    var usersData = localStorage.getItem("userData");
                    usersData = JSON.parse(usersData);
                    usersData.splice(Number(indexforEditData),1,userData);
                    localStorage.setItem("userData", JSON.stringify(usersData));
                    clearFilter();
                    $location.path("/users");
                }
            }
            else {
                if (firstName && lastName && email && phone) {
                    setStorage(userData);
                    clearFilter();
                    $location.path("/users");
                }
            }
        }

        /*$scope.move = function(){
            var elem = document.getElementById("myBar");
            var width = 20;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                    elem.innerHTML = width * 1  + '%';
                }
            }
        }*/

        if(indexforEditData){
            indexforEditData = JSON.parse(indexforEditData);
            var getUsersData = localStorage.getItem("userData");
            getUsersData = JSON.parse(getUsersData);
            var selectUserData = getUsersData.slice(indexforEditData,indexforEditData + 1);
            selectUserData = selectUserData[0];
            $scope.firstName = selectUserData.firstName;
            $scope.lastName = selectUserData.lastName;
            $scope.email = selectUserData.email;
            $scope.phone = selectUserData.phone;
        }

        function setStorage(data){
            var list = localStorage.getItem("userData");
            if(list){
                list = JSON.parse(list);
            }
            else {
                list = [];
            }
            list.push(data);
            localStorage.setItem("userData", JSON.stringify(list))
        }
        function clearFilter(){
            $scope.firstName = ""
            $scope.lastName = ""
            $scope.email = ""
            $scope.phone = ""
        }
    })