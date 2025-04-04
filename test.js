function trickyHoisting() {

    console.log(foo); // 1번 출력 = undefined
    // foo가 선언이 안되어 있는 상태이기 때문에 undefined가 출력된다.

    var foo = function () {
    console.log('Inner foo');
    }; //foo 함수(Inner foo를 출력하는 기능을 가진)를 선언 한것

    console.log(foo); //2번째 함수의 문자열 그자체를 내보냄

    bar(); // 3번째 출력 = 'Bar called'가 출력된다.

    var bar = function () {
    console.log('Bar called');
    };

    function bar() {
        console.log('Original bar'); // 이미 선언되어 있는 상태태
    }

    bar(); //bar가 다시 할당 됨

   }
   trickyHoisting();
   