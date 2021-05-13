var Flat = /** @class */ (function () {
    function Flat(floors, Floor, rooms, area, date, district, description, price) {
        this.floors = floors;
        this.Floor = Floor;
        this.rooms = rooms;
        this.area = area;
        this.date = date;
        this.district = district;
        this.description = description;
        this.price = price;
    }
    Flat.prototype.printAllInfo = function () {
        var block = document.createElement('h1');
        var tab = document.querySelector('.table');
        block.classList.add('flex');
        block.innerHTML = "" + this.area;
        tab.insertAdjacentElement('afterbegin', block);
    };
    Flat.prototype.printDescription = function () {
        var block = document.createElement('p');
        var tab = document.querySelector('.table');
        block.innerHTML = "" + this.description;
        tab.insertAdjacentElement('afterbegin', block);
    };
    Flat.prototype.neighborhoodInfo = function () {
    };
    return Flat;
}());
var res = +prompt('Оберіть опцію: \n 1 - додати квартиру; \n 2- видалити квартиру; \n 3- редагування квартири; \n 4- вивести квартиру по району;\n 5- сортування квартир в порядку зростання вартості; \n 6- сортування квартир в порядку спадання вартості; \n *Увага! Введіть лише номер опції');
var flat1 = new Flat(6, 1, 3, 81, 2019, "Center", 'Повністю закрита територія з власною охороною, цілодобове відеоспостереження, ландшафтний дизайн та місце для паркування авто.Ідеальний варіант для комфортного життя або здачі в оренду.ТОРГ реальним, зацікавленим покупцям', 45000);
var flat2 = new Flat(6, 9, 1, 34, 2016, "Chayka", 'Простора, світла та стильна однокімнатна квартира в новобудові ЖК "Спектрум" (Реноме).Продумане планування з кухнею - вітальнею, велика засклена лоджія з гарним виглядом на приватну забудову та окрема спальня.Всі меблі та техніка залишаються.У квартирі найкраще технічне наповнення, автономне опалення з німецьким котлом Vaillant та вікна з німецького профілю Rehau.', 23000);
var arrFlat = [flat1, flat2];
switch (res) {
    case 1:
        var newFlat = new Flat(+prompt('Кількість поверхів в будинку?\n *Увага! Дані мають містити лише цифри'), +prompt('На якому поверсі знаходиться квартира?\n *Увага! Дані мають містити лише цифри', ''), +prompt('Кількість кімнат у квартирі?\n *Увага! Дані мають містити лише цифри', ''), +prompt('Яка площа квартири?\n *Увага! Дані мають містити лише цифри', ''), +prompt('Рік будівництва будинку?\n *Увага! Дані мають містити лише цифри', ''), prompt('Район знаходження квартири', ''), prompt('Опишіть особливості та переваги квартири', ''), +prompt('Вартість квартири в доларах\n *Увага! Дані мають містити лише цифри', ''));
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
    default: alert('Бувай!');
}
// - Вивести інформацію про квартиру
// - Опис квартири
// = Додавання квартри
// = Видалення квартри
// = Редагування квартири
// = Вивыд квартир по району
// = Сортування по ціні (в обох напрмках)
