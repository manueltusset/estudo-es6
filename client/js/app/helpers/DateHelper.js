class DateHelper {

    constructor() {
        throw new Error('DateHelper cannot be instantiated');
    }

    static textToDate(text) {
        return new Date(...
            text.split('-')
                .map((item, index) => {
                    return item - (index == 1 ? 1 : 0);
                })
        );
    }

    static dateToText(date) {
        let day = date.getDate();
        let month = (date.getMonth() + 1);
        let year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}