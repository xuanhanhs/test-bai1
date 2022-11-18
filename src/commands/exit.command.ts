import { CommanderStatic } from 'commander';
import { AbstractCommand } from './abstract.command';

export class ExitCommand extends AbstractCommand {
  public load(program: CommanderStatic): void {
    program
      .command('exit')
      .alias('e')
      .description('Exit program')
      .action(async () => {
        await this.action.handle();
      });
  }
}
