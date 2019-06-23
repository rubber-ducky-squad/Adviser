function dateFunction() {
    // if your function took a date (instead of creating it), it would be very testable!
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;

    // This also works:
    // return today.toISOString().split('T')[0]
}

export default dateFunction;