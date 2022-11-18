import * as chalk from 'chalk';
import { CommanderStatic } from 'commander';
import { ExitAction, AddAction, ShowAction } from '../actions';
import { ERROR_PREFIX } from '../lib/ui';
import { ExitCommand } from './exit.command';
import { AddCommand } from './add.command';
import { ShowCommand } from './show.command';

export class CommandLoader {
  public static load(program: CommanderStatic): void {
    new ExitCommand(new ExitAction()).load(program);
    new AddCommand(new AddAction()).load(program);
    new ShowCommand(new ShowAction()).load(program);

    this.handleInvalidCommand(program);
  }

  private static handleInvalidCommand(program: CommanderStatic) {
    program.on('command:*', () => {
      console.error(
        `\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
        program.args.join(' '),
      );
      console.log(
        `See ${chalk.red('--help')} for a list of available commands.\n`,
      );
      process.exit(1);
    });
  }
}
