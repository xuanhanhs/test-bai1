import { Input } from '../commands';
import { AbstractAction } from './abstract.action';
import database from '../database';
import * as chalk from 'chalk';

export class AddAction extends AbstractAction {
  public async handle(inputs: Input[]) {
    try {
      const fullname = inputs.find((input) => input.name === 'fullname')?.value;
      const point = inputs.find((input) => input.name === 'point')?.value;
      this.validatePoint(point);

      await database('students').insert({
        fullname,
        point,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      console.log(
        chalk.green(
          `Successfully added student ${chalk.bold(fullname)} with ${chalk.bold(
            point,
          )} point`,
        ),
      );
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  private validatePoint(point: number) {
    const min = 1;
    const max = 5;

    if (!(point >= min && point <= max)) {
      throw new Error(`The point must be between ${min} and ${max}`);
    }
  }
}
