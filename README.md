# AI Chat написанный на VUE 3 + TypeScript с использованием LM Studio

Автор чата: Иван Казаков! <a href="https://ikazakov.com/" target="_blank">Мой сайт</a>
Чат использует модели от <a href="https://huggingface.co/" target="_blank">Hugging Face</a>
Hugging Face - это огромная база бесплатных и доступных моделей каждому пользователю! Плюс имеется хорошее API разных Языков программирования! Тут хранатся модели таких компаний как Intel, Microsoft, Google, Open AI и другие!

# LM Studio

1) Установить LM Studio! <a href="https://lmstudio.ai/" target="_blank">LM Studio</a> Поддерживает: Linux, Windows, MacOS
2) Запустить приложение LM Studio с рабочего стола!
3) На странице `Home` выбрать интересующую вас модель с данными и скачать ее!
4) Во вкладке `Local Server` выбрать модель для работы сервера и нажать кнопку `Start Server`.

# Chat App

1) Клонировать репозиторий проекта себе на пк!
```bash
git clone https://github.com/IvanKazakov2352/AI-Chat.git
```
2) У вас должен быть предварительно установлен <a href="https://nodejs.org/" target="_blank">Node JS</a> и npm, <a href="https://pnpm.io/" target="_blank">pnpm</a>
3) Установить зависимости для приложения
```bash
pnpm install
```
4) После того как установились зависимости, можно запустить чат локально.
```bash
pnpm dev
```
5) После того как запустили проект! Чат станет доступен по адресу: http://localhost:3000/

# Дорожная карта

1) Добавить определение и выделение кода из общего текста!
2) Реализовать удаление сообщений из контекста общения!
3) Классификация фото и распознавание аудио файлов!