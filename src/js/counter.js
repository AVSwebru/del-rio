export default (minusBtnArr, plusBtnArr, inputArr) => {

  minusBtnArr.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.nextElementSibling.value > 1) element.nextElementSibling.value--;
    });
  });

  plusBtnArr.forEach((element) => {
    element.addEventListener('click', () => {
      element.previousElementSibling.value++;
    });
  });

  inputArr.forEach((element) => {
    element.addEventListener('input', () => {
      if (element.value < 1) element.value = 1;
    });
  });

};
