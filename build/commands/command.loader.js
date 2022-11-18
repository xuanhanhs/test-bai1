"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLoader = void 0;
var chalk = require("chalk");
var actions_1 = require("../actions");
var ui_1 = require("../lib/ui");
var exit_command_1 = require("./exit.command");
var add_command_1 = require("./add.command");
var show_command_1 = require("./show.command");
var CommandLoader = /** @class */ (function () {
    function CommandLoader() {
    }
    CommandLoader.load = function (program) {
        new exit_command_1.ExitCommand(new actions_1.ExitAction()).load(program);
        new add_command_1.AddCommand(new actions_1.AddAction()).load(program);
        new show_command_1.ShowCommand(new actions_1.ShowAction()).load(program);
        this.handleInvalidCommand(program);
    };
    CommandLoader.handleInvalidCommand = function (program) {
        program.on('command:*', function () {
            console.error("\n".concat(ui_1.ERROR_PREFIX, " Invalid command: ").concat(chalk.red('%s')), program.args.join(' '));
            console.log("See ".concat(chalk.red('--help'), " for a list of available commands.\n"));
            process.exit(1);
        });
    };
    return CommandLoader;
}());
exports.CommandLoader = CommandLoader;
