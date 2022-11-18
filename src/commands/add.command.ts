import { CommanderStatic } from 'commander';
import { AbstractCommand } from './abstract.command';
import { Input } from './command.input';

export class AddCommand extends AbstractCommand {
  public load(program: CommanderStatic): void {
    program
      .command('add [fullname] [point]')
      .alias('a')
      .description('Add new student and point')
      .action(async (fullname: string, point: number) => {
        const inputs: Input[] = [];
        inputs.push({ name: 'fullname', value: fullname });
        inputs.push({ name: 'point', value: point });

        await this.action.handle(inputs);
      });
  }
}
