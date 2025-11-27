# 📘 English Phrasal Verbs Trainer (Vite Version)

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react\&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-purple?logo=redux\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript\&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styles-blue?logo=css3\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github\&logoColor=white)

---

## 📘 English Phrasal Verbs Trainer

An interactive SPA for learning English phrasal verbs.
Built with **React + Redux Toolkit + Vite**, featuring smooth UI, animations, and progress persistence.

---

## 📸 Screenshots

### Desktop

<img src="https://github.com/91Helen/phrasal-verb-trainer/blob/main/desktop-app.png?raw=true" alt="Desktop Screenshot" width="450" />


## 🚀 About the Project

The application is developed with a focus on:

* clean and scalable architecture
* modern UI/UX
* readable and maintainable code
* proper state management
* modular structure
* easy future extension

---

## 🧠 Technologies

### 🔹 Frontend

* React 18
* React Hooks
* React Router
* Vite (bundler & dev server)
* Responsive CSS layout
* CSS animations & custom UI components

### 🔹 State Management

* **Redux Toolkit**
* **Redux Persist** (for progress saving)

### 🔹 Architecture

* Feature-based structure
* Modules: `verbs`, `trainer`, `progress`, `favorites`
* UI styles centralized via CSS variables

---

## 🎯 Functionality

### ✔ Training Modes

* multiple-choice translation
* input-based answers
* verb recall exercises
* next/previous navigation
* correct/incorrect answer highlighting
* training completion screen

### ✔ Statistics

Each training result stores:

* `id` — Date.now
* `status` — "correct" / "incorrect"
* `createdAt` — ISO timestamp

### ✔ Favorites

* add verbs to favorites
* train only favorite verbs

### ✔ Progress Persistence

All progress is saved and restored using Redux Persist.

---

## 📱 UI & UX

### ✔ Animated Burger Menu

Clean, smooth mobile navigation.

### ✔ Responsive Interface

User-friendly layout with attention to detail.

---

## 🏗 Folder Structure

```bash
src/
├─ app/
│  └─ store.jsx                     # Redux store
├─ components/
│  ├─ PhrasalVerbsTrainer.jsx       # Main app component
│  └─ HomePage.jsx                  # Home page
├─ data/
│  └─ data.jsx                      # Initial data (verbs and examples)
├─ features/
│  ├─ favorites/
│  │  ├─ Favorites.jsx              # Favorites component
│  │  └─ favoritesSlice.jsx         # Favorites logic
│  ├─ progress/
│  │  ├─ Statistics.jsx             # Statistics component
│  │  └─ progressSlice.jsx          # Statistics & history logic
│  ├─ trainer/
│  │  ├─ PhrasalVerbTask.jsx        # Training task component
│  │  ├─ Trainer.jsx                # Trainer component
│  │  ├─ TrainerContainer.jsx       # Trainer container
│  │  └─ trainerSlice.jsx           # Training logic
│  ├─ verbs/
│  │  ├─ VerbCard.jsx               # Verb card
│  │  ├─ VerbList.jsx               # Verbs list
│  │  └─ verbsSlice.jsx             # Verbs logic
├─ styles/
│  └─ index.css                     # Main styles & responsiveness
vite.config.js                      # Vite configuration
index.html                           # Root HTML file
```

---

## 📦 Installation

```bash
git clone <repo>
cd english-phrasal-verbs-trainer
npm install
npm run dev
```

### Build

```bash
npm run build
```

Production files will be generated in the **/dist** folder.

### Preview Production Build

```bash
npm run preview
```

---

## 👩‍💻 Skills Demonstrated

### Hard Skills

* Advanced React
* Redux Toolkit
* Architecture design
* UI/UX & responsive layout
* Clean modular code
* Animations
* Data persistence

### Soft Skills

* Ability to build projects from scratch
* UX-first thinking
* Readable code & documentation
* Project structuring

---

With ❤️, Elena Filatova — Frontend Developer

---

## 🌍 RU Version

### 📘 English Phrasal Verbs Trainer

Интерактивное приложение-тренажёр для изучения английских фразовых глаголов.
Создано на **React + Redux Toolkit + Vite** с современным UI, анимациями и сохранением прогресса.

---

## 🚀 О проекте

Приложение разработано с акцентом на:

* чистую архитектуру
* современный и аккуратный UI/UX
* читаемый код
* удобную поддержку и расширение
* грамотное управление состоянием

---

## 📸 Скриншот

<img src="https://github.com/91Helen/phrasal-verb-trainer/blob/main/mobile-app.png?raw=true" alt="Mobile Screenshot" width="250"/>

## 🧠 Технологии

### 🔹 Frontend

* React 18
* React Hooks
* React Router
* Адаптивная верстка CSS
* CSS-анимации и собственные UI-компоненты

### 🔹 Управление состоянием

* **Redux Toolkit**
* **Redux Persist** (сохранение прогресса)

### 🔹 Архитектура

* Feature-based структура
* Модули: `verbs`, `trainer`, `progress`, `favorites`
* UI-стили централизованы через CSS с переменными для цветов, теней и адаптивности

---

## 🎯 Функционал

### ✔ Режимы тренировки

* Выбор верного перевода
* Ввод ответа вручную
* Восстановление глагола в предложении
* Кнопки «Вперёд» / «Назад»
* Подсветка правильных и неправильных ответов
* Экран завершения тренировки

### ✔ Статистика

Каждое действие сохраняется с:

* `id` (Date.now)
* `status` ("correct" / "incorrect")
* `createdAt` (ISO-время ответа)

### ✔ Избранное

* Добавление глаголов в избранное
* Возможность тренироваться только с избранными глаголами

### ✔ Сохранение прогресса

Восстановление состояния через Redux Persist

---

## 📱 UI & UX

### ✔ Анимированное бургер-меню

Плавная мобильная анимация

### ✔ Адаптивный интерфейс

Чистый, аккуратный и удобный дизайн

---

## 🏗 Архитектура

### 🔹 Структура папок / Folder Structure

```bash
src/
├─ app/
│  └─ store.js                     # Redux store
├─ components/
│  ├─ PhrasalVerbsTrainer.jsx      # Основной компонент приложения
│  └─ HomePage.jsx                 # Домашняя страница
├─ data/
│  └─ data.js                       # Исходные данные (глаголы и примеры)
├─ features/
│  ├─ favorites/
│  │  ├─ Favorites.jsx              # Компонент избранного
│  │  └─ favoritesSlice.jsx         # Логика избранного
│  ├─ progress/
│  │  ├─ Statistics.jsx             # Компонент статистики
│  │  └─ progressSlice.jsx          # Логика статистики и истории
│  ├─ trainer/
│  │  ├─ PhrasalVerbTask.jsx        # Компонент задания тренажёра
│  │  ├─ Trainer.jsx                # Компонент тренажёра
│  │  ├─ TrainerContainer.jsx       # Контейнер тренажёра
│  │  └─ trainerSlice.js           # Логика тренировки
│  ├─ verbs/
│  │  ├─ VerbCard.jsx               # Карточка глагола
│  │  ├─ VerbList.jsx               # Список глаголов
│  │  └─ verbsSlice.js              # Логика глаголов
├─ styles/
│  └─ index.css                     # Основные стили и адаптивность
├─ App.jsx                            # Основной роутинг
└─ main.jsx                          # Точка входа приложения
```

## 📦 Установка

```bash
git clone <repo>
cd english-phrasal-verbs-trainer
npm install
npm run dev
```

---

## 👩‍💻 Навыки, демонстрируемые проектом

### Hard skills

* Уверенный React
* Redux Toolkit
* Проектирование архитектуры
* Грамотная работа с глобальным состоянием
* UX/UI дизайн
* Понимание жизненного цикла компонентов
* Чистый и поддерживаемый код

### Soft skills

* Создание продукта с нуля
* Продуманный UX
* Коммуникабельность (объяснение кода)
* Внимательность к деталям
* Логичная структура кода

  ---

   С ❤️, Филатова Елена — Фронтенд разработчик


