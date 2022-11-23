import { AbstractAction } from './abstract.action';
import database from '../database';
import * as Table from 'cli-table3';
import { Input } from '../commands';

export class ShowAction extends AbstractAction {
  public async handle(inputs?: Input[], options?: Input[]) {
    try {
      const leftMargin = '    ';
      const tableConfig = {
        head: ['id', 'fullname', 'point', 'createdAt', 'updatedAt'],
        chars: {
          'left': leftMargin.concat('│'),
          'top-left': leftMargin.concat('┌'),
          'bottom-left': leftMargin.concat('└'),
          'mid': '',
          'left-mid': '',
          'mid-mid': '',
          'right-mid': '',
        },
      };
      const table = new Table(tableConfig);

      const point = inputs?.find((input) => input.name === 'point')?.value || 1;

      const by = options?.find((option) => option.name === 'by')?.value;
      const direction = options?.find(
        (option) => option.name === 'direction',
      )?.value;

      const students = await database('students')
        .where('point', '>=', point)
        .select()
        .orderBy(by, direction);
      students.forEach((student: any) => {
        const { id, fullname, point, createdAt, updatedAt } = student;
        table.push([id, fullname, point, createdAt, updatedAt]);
      });

      console.log(table.toString());
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
