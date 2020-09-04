export default class Diference{
    constructor(column, items){
        this.column = document.querySelector(column);
        this.itemsColumn = this.column.querySelectorAll(items);
        this.counter = 0;
    }
    bindtriggers(){
        this.column.querySelector('.plus').addEventListener('click', () => {
            if (this.counter < this.itemsColumn.length - 2) {
                this.itemsColumn[this.counter].style.display = '';
                this.counter++;
            } else{
                this.itemsColumn[this.counter].style.display = '';
                this.column.querySelector('.plus').closest('.officer__card-item').remove();
            }
        });
    }
    hideItems() {
        this.itemsColumn.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init(){
        this.hideItems();
        this.bindtriggers();
    }
}