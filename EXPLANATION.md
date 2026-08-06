# SPA — важные технические моменты

## Для чего создавался проект

**Показать понимание внутреннего устройства SPA-фреймворков (React/Vue) на нативном JS.** 
Проект демонстрирует:
- Кастомный роутер (аналог React Router)
- Управление состоянием (аналог Redux/Zustand)
- Компонентный подход (аналог React-компонентов)
- Работу с DOM без библиотек

---

## Ключевой код

### 1. Роутер — динамические сегменты
```js
parseUrl(url) {
  const path = url.split('/');
  const [path, resource] = path; // resource = id для /product/123
  return { path, resource };
}

Суть: Разбиваем URL на части, чтобы достать динамический id и подставить в колбэк.
    
```

### 2. Переключение контента
        
```js
    setContentApp(pageName, view) {
        this.header.setSelectedItem(pageName);
        this.main.setContent(view);
    }

Суть: При переходе обновляется хедер (подсветка) и основной контент.
    
```

3. Очистка контента
```js
setContent(view) {
  const currentElement = this.elementCreator.getElement();
  while (currentElement.firstElementChild) {
    currentElement.innerHTML = '';
  }
  this.elementCreator.addInnerElement(view.getHTMLElement());
}

```
4. Сохранение состояния

```js
saveState() {
  const fields = Object.fromEntries(this.fields.entries());
  localStorage.setItem('spa', JSON.stringify(fields));
}
window.addEventListener('beforeunload', this.saveState.bind(this));

Суть: Все данные автоматически сохраняются перед закрытием страницы.
```

5. Фабрика DOM-элементов

```js
    createElement(params) {
    this.element = document.createElement(params.tag);
    this.element.textContent = params.textContent;
    params.classNames.forEach(c => this.element.classList.add(c));
        if (params.callback) {
            this.element.addEventListener('click', params.callback);
        }
    }

```


— Как работает роутинг?
"Слушаю события popstate и hashchange, разбираю URL, нахожу нужный роут и вызываю колбэк. Поддерживаются динамические сегменты типа product/{id}."

— Как обновляется контент?
"У меня есть MainView, который очищает свой DOM и вставляет новый компонент. Это как children в React Router."

— Как хранится состояние?
"Через класс State, который обёрнут над localStorage. Данные сохраняются автоматически при beforeunload."