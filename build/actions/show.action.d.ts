import { AbstractAction } from './abstract.action';
import { Input } from '../commands';
export declare class ShowAction extends AbstractAction {
    handle(inputs?: Input[], options?: Input[]): Promise<void>;
}
