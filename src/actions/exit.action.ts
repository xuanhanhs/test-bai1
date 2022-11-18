import { AbstractAction } from './abstract.action';

export class ExitAction extends AbstractAction {
  public async handle() {
    process.exit();
  }
}
