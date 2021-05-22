var Flat = /** @class */ (function () {
    function Flat(name, floors, Floor, rooms, area, date, district, description, price) {
        this.name = name;
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
        block.innerHTML = "" + this.name;
        if (tab) {
            tab.insertAdjacentElement('afterbegin', block);
        }
    };
    Flat.prototype.printDescription = function () {
        var description = document.createElement('div');
        var tab = document.querySelector('.table');
        description.innerHTML = "\u041E\u043F\u0438\u0441: " + this.description;
        if (tab) {
            tab.insertAdjacentElement('afterbegin', description);
        }
    };
    Flat.prototype.neighborhoodInfo = function () {
    };
    return Flat;
}());
var res = Number(prompt('Оберіть опцію: \n 1 - додати квартиру; \n 2- видалити квартиру; \n 3- редагування квартири; \n 4- вивести квартиру по району;\n 5- сортування квартир в порядку зростання вартості; \n 6- сортування квартир в порядку спадання вартості; \n *Увага! Введіть лише номер опції'));
var flat1 = new Flat('Стильна 3- кімнатна квартира в новобудові з авторським ремонтом!', 6, 1, 3, 81, 2019, "Center", 'Повністю закрита територія з власною охороною, цілодобове відеоспостереження, ландшафтний дизайн та місце для паркування авто.Ідеальний варіант для комфортного життя або здачі в оренду.ТОРГ реальним, зацікавленим покупцям', 45000);
var flat2 = new Flat('Продам 1-кім. квартиру .Новобудова.Євроремонт!', 6, 9, 1, 34, 2016, "Chayka", 'Простора, світла та стильна однокімнатна квартира в новобудові ЖК "Спектрум" (Реноме).Продумане планування з кухнею - вітальнею, велика засклена лоджія з гарним виглядом на приватну забудову та окрема спальня.Всі меблі та техніка залишаються.У квартирі найкраще технічне наповнення, автономне опалення з німецьким котлом Vaillant та вікна з німецького профілю Rehau.', 23000);
var arrFlat = [flat1, flat2];
switch (res) {
    case 1:
        var newFlat = new Flat(String(prompt('Введіть назву квартири', '')), Number(prompt('Кількість поверхів в будинку?\n *Увага! Дані мають містити лише цифри')), Number(prompt('На якому поверсі знаходиться квартира?\n *Увага! Дані мають містити лише цифри', '')), Number(prompt('Кількість кімнат у квартирі?\n *Увага! Дані мають містити лише цифри', '')), Number(prompt('Яка площа квартири?\n *Увага! Дані мають містити лише цифри', '')), Number(prompt('Рік будівництва будинку?\n *Увага! Дані мають містити лише цифри', '')), String(prompt('Район знаходження квартири', '')), String(prompt('Опишіть особливості та переваги квартири', '')), Number(prompt('Вартість квартири в доларах\n *Увага! Дані мають містити лише цифри', '')));
        arrFlat.push(newFlat);
        arrFlat.forEach(function (flat) {
            flat.printDescription();
            flat.printAllInfo();
        });
        break;
    case 2:
        var delFlatIndex_1 = Number(prompt('Введіть номер з списку квартир, яку бажаєте видалити'));
        arrFlat.forEach(function (flat, index) {
            if (index == delFlatIndex_1 - 1) {
                arrFlat.splice(delFlatIndex_1 - 1, 1);
            }
            flat.printDescription();
        });
        break;
    case 3:
        alert(arrFlat.forEach(function (flat) {
            flat.printDescription();
            flat.printAllInfo();
        }));
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    default: alert('Бувай!');
}
