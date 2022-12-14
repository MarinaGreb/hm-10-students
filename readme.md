### 1.Описание работы проекта
В данном проекте реализована функция вычисления студента, получившего наилучший балл раньше всех студентов из своей группы, вывод лучших студентов группы и тест функции вычисления студента.
Алгоритм работы: 
- У каждых двух студентов одной группы сравнивается полученный балл "score"
- Балл и дата "date" лучшего студента фиксируется в массиве "bestStudentsNames"
- Если баллы совпадают, то сравниваются даты получения баллов
- Студент с лучшим баллом и самой ранней датой фиксируется в массиве "bestStudentsNames"

### 2. Запуск и настройка
Для запуска и настройки данного проекта были проделаны следующие операции:
- установлен node.js
- выполнена инициализация проекта (_npm init_)
- установлен пакет jest (_npm install - -save-dev jest_)
- отредактирован файл package.json для запуска из командной строки ("test": "jest")
- реализация функции и вывод в консоль в файле _successful_student.js_
- тестовые кейсы в файле _successful_student.test.js_
- запуск тестов осуществляется с помощью команды _npm run test_

### 3. Измерение покрытия
- Для подключения ввести в терминал команду _npm install --save-dev babel-plugin-istanbul_
- Для запуска теста с отображением покрытия ввести _npx jest --coverage_

В данном проекте все показатели покрытия = 100%:
- покрытие функций - была вызвана одна из одной функции
- покрытие операторов - все операторы были выполнены хотя бы 1 раз
- покрытие веток - все ветки были пройдены хотя бы 1 раз
- покрытие строк - все строки были пройдены хотя бы 1 раз

Для достижения полного покрыти была добавлена ещё одна группа: два студента из группы имеют одинаковые баллы и одинаковую дату.