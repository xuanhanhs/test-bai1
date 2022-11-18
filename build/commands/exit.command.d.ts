import { CommanderStatic } from 'commander';
import { AbstractCommand } from './abstract.command';
export declare class ExitCommand extends AbstractCommand {
    load(program: CommanderStatic): void;
}
