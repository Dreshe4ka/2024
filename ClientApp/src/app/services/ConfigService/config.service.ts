import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    ru =
        {
            "startsWith": "Начинается с",
            "contains": "Содержит",
            "notContains": "Не содержит",
            "endsWith": "Заканчивается на",
            "equals": "Равно",
            "notEquals": "Не равно",
            "noFilter": "Без фильтров",
            "lt": "Меньше чем",
            "lte": "Меньше чем, либо равно",
            "gt": "Больше чем",
            "gte": "Больше чем, либо равно",
            "is": "является",
            "isNot": "не является",
            "before": "Перед",
            "after": "После",
            "dateIs": "Дата равна",
            "dateIsNot": "Дата не равна",
            "dateBefore": "Дата раньше, чем",
            "dateAfter": "Дата позже, чем",
            "clear": "Очистить",
            "apply": "Применить",
            "matchAll": "Совпадение по всем",
            "matchAny": "Совпадение по любым",
            "addRule": "Добавить фильтр",
            "removeRule": "Убрать фильтр",
            "accept": "Принять",
            "reject": "Отклонить",
            "choose": "Выбрать",
            "upload": "Загрузить",
            "cancel": "Отменить",
            "dayNames": ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            "dayNamesShort": ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            "dayNamesMin": ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            "monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            "monthNamesShort": ["Янв", "Фев", "Март", "Апр", "Май", "Июн", "Июл", "Авг", "Сент", "Окт", "Ноя", "Дек"],
            "dateFormat": "dd.mm.yy",
            "firstDayOfWeek": 0,
            "today": "Сегодня",
            "weekHeader": "нд",
            "weak": "слабый",
            "medium": "средний",
            "strong": "сильный",
            "passwordPrompt": "Введите пароль",
            "emptyMessage": "Не было найдено результатов",
            "emptyFilterMessage": "Не было найдено результатов"
        }
    constructor() { }
}