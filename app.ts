interface IFlat{
    Floor: number;
    neighborhoodInfo(): void;
}
    
class Flat implements IFlat{
    private floors: number;
    private rooms: number;
    private area: number;
    private date: number;
    private district: string;
    private price: number;
    private description: string;
    Floor: number;
    constructor(floors: number, Floor: number,rooms: number, area: number, date: number, district: string, description: string, price: number){
    this.floors = floors;
    this.Floor = Floor;
    this.rooms = rooms;
    this.area = area;
    this.date = date;
    this.district = district;
    this.description = description;
    this.price = price;
    }
    printAllInfo(): void {
        let block = document.createElement('h1');
        let tab = document.querySelector('.table');
        block.classList.add('flex');
        block.innerHTML = `${this.area}`; 
        tab.insertAdjacentElement('afterbegin', block)
    }
    printDescription(): void {
        let block = document.createElement('p');
        let tab = document.querySelector('.table');
        block.innerHTML = `${this.description}`; 
        tab.insertAdjacentElement('afterbegin', block)
    }
    neighborhoodInfo(): void {

    }
}

let res: number  = +prompt('Оберіть опцію: \n 1 - додати квартиру; \n 2- видалити квартиру; \n 3- редагування квартири; \n 4- вивести квартиру по району;\n 5- сортування квартир в порядку зростання вартості; \n 6- сортування квартир в порядку спадання вартості; \n *Увага! Введіть лише номер опції');

let flat1 = new Flat(6,1, 3, 81, 2019, "Center",'Повністю закрита територія з власною охороною, цілодобове відеоспостереження, ландшафтний дизайн та місце для паркування авто.Ідеальний варіант для комфортного життя або здачі в оренду.ТОРГ реальним, зацікавленим покупцям', 45000);

let flat2 = new Flat(6,9, 1, 34, 2016, "Chayka",'Простора, світла та стильна однокімнатна квартира в новобудові ЖК "Спектрум" (Реноме).Продумане планування з кухнею - вітальнею, велика засклена лоджія з гарним виглядом на приватну забудову та окрема спальня.Всі меблі та техніка залишаються.У квартирі найкраще технічне наповнення, автономне опалення з німецьким котлом Vaillant та вікна з німецького профілю Rehau.',23000);

let arrFlat: Flat[] = [flat1, flat2];

switch(res){
    case 1:
        let newFlat = new Flat(
            +prompt('Кількість поверхів в будинку?\n *Увага! Дані мають містити лише цифри', ), 
            +prompt('На якому поверсі знаходиться квартира?\n *Увага! Дані мають містити лише цифри', ''), 
            +prompt('Кількість кімнат у квартирі?\n *Увага! Дані мають містити лише цифри', ''), 
            +prompt('Яка площа квартири?\n *Увага! Дані мають містити лише цифри', ''), 
            +prompt('Рік будівництва будинку?\n *Увага! Дані мають містити лише цифри', ''), 
            prompt('Район знаходження квартири', ''), 
            prompt('Опишіть особливості та переваги квартири', ''),
            +prompt('Вартість квартири в доларах\n *Увага! Дані мають містити лише цифри', '')
        );    
        arrFlat.push(newFlat);   
        newFlat.printDescription();
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    default: alert('Бувай!')
}