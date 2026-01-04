# React Unit Test

Проект создан для демонстрации и практики юнит-тестирования React-приложения с использованием Jest и React Testing Library.

## О проекте
Этот проект представляет собой простой React-app, созданный с помощью Create React App, с примерами юнит-тестов для компонентов и утилит. Основная цель — показать, как писать надежные и понятные тесты для React-компонентов.

## Запуск
Установка зависимостей
```bash
npm install
```
Запустить приложение (dev)
```bash
npm start
```
Запустить тесты
```bash
npm test
```
Тестовый раннер запустится в интерактивном режиме, показывая прохождение / падение тестов.

## Используемые технологии
Проект использует:
- React — UI-библиотека
- Jest — тестовый фреймворк для JavaScript
- React Testing Library — для тестирования React-компонентов

## Примеры тестов
Компонентный тест
```bash
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('рендерит кнопку с текстом', () => {
  render(<Button text="Click me" />);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});
```
Юнит-тест утилиты
```bash
import { sum } from '../utils/math';

test('сложение работает корректно', () => {
  expect(sum(2, 3)).toBe(5);
});
```
