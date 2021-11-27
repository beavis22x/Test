const btnsWrapper = document.querySelector('.buttons__wrapper'),
      value = document.querySelector('#value'),
      isEven = document.querySelector('#isEven'),
      btns = document.querySelectorAll('.btn');
let count = 0;

function multiplicity (count) {
    const white = '#FFFFFF',
          pink = '#FFB6C1';

    function evenAndOdd (color, number) {
        isEven.textContent = 'Введено ' + number + ' число';
        document.body.style.background = color;
        btns.forEach(btn => {btn.style.background = color});
    }

    if (count === 0) {
        evenAndOdd(white, 'чётное');
    } else if (count % 2 === 0) {
        evenAndOdd(pink, 'чётное');
    } else {
        evenAndOdd(white, 'нечётное');
    };
}

btnsWrapper.addEventListener("click", (e) => {
    if (e.currentTarget && e.target.tagName === 'BUTTON') {
        const styles = e.target.classList;
        if (styles.contains("decrement") && count > 0) {
                count--;
        } else if (styles.contains("increment")) {
            count++;
        } else {
            count = 0;
        };
        multiplicity(count);
        value.textContent = count;
    }
    });