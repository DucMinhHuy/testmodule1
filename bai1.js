function Sum() {
    let array = [2, 10, 10, 3];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum / array.length;
    document.write(avg)
    return avg;
}
Sum();