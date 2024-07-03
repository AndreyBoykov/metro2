/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: await bcrypt.hash('admin', 10),
        email: 'admin@admin',
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user1',
        password: await bcrypt.hash('user1', 10),
        email: 'user1@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Categories', [
      {
        category: 'Управление',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Механика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Questions', [
      {
        question:
          'Автоблокировка может быть дополнена устройствами внепоездного контроля скорости движения поездов, допускающими открытие светофора на разрешающее показание при:',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'БВ не восстанавливается на всем составе, на МФДУ сообщение "БВ отключен", действия машиниста:',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Какова максимальная допустимая величина разницы проката колес одной колесной пары?',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'При наличии на подвижном составе колесной пары с ползуном (выбоиной) на поверхности катания глубиной от 1 мм до 2.5 мм скорость движения должна быть:',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Answers', [
      {
        answer: 'неполном освобождении поездом блок участка за светофором',
        isCorrect: false,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer:
          'полном освобождении поездом блок участка между светофорами и защитного участка за следующим светофором',
        isCorrect: false,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'неполном освобождении поездом защитного участка за следующим светофором',
        isCorrect: true,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'полном освобождении поездом блок участка между светофорами',
        isCorrect: false,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'вызвать вспомогательный поезд.',
        isCorrect: false,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'в режиме ПВУ переключить БВ и ТП на всем составе',
        isCorrect: false,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer:
          'нажать повторно кнопку включения БВ, если БВ не восстановились перейти на резервное управление',
        isCorrect: true,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: '5мм',
        isCorrect: false,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: '3мм',
        isCorrect: true,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: '0.5мм',
        isCorrect: false,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: '0.7мм',
        isCorrect: false,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'не более 60 км/ч',
        isCorrect: false,
        question_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'не более 35 км/ч',
        isCorrect: false,
        question_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'не более 20 км/ч',
        isCorrect: true,
        question_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer: 'не более 15 км/ч',
        isCorrect: false,
        question_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
