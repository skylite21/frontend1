getServerStatus(1, function (error, result) {
  console.log(result);
  getServerStatus(2, function (error, result) {
    console.log(result);
    getServerStatus(3, function (error, result) {
      console.log(result);
      getServerStatus(4, function (error, result) {
        console.log(result);
        getServerStatus(5, function (error, result) {
          console.log(result);
          getServerStatus(6, function (error, result) {
            console.log(result);
          });
        });
      });
    });
  });
});
