import { Command, CommanderStatic } from 'commander';
import { AbstractCommand } from './abstract.command';
import { Input } from './command.input';

export class ShowCommand extends AbstractCommand {
  public load(program: CommanderStatic): void {
    program
      .command('show [point]')
      .alias('s')
      .description('Show list student')
      .option('-b, --by [by]', 'Sort by field name', 'id')
      .option(
        '-d, --direction [direction]',
        'Sort direction, asc or desc',
        'asc',
      )
      .action(async (point: number, command: Command) => {
        const inputs: Input[] = [];
        inputs.push({ name: 'point', value: point });

        const options: Input[] = [];
        options.push({ name: 'by', value: command.by });
        options.push({ name: 'direction', value: command.direction });

        await this.action.handle(inputs, options);
      });
  }
}
