import {Injectable, Logger} from '@nestjs/common';
import {SchedulerRegistry} from '@nestjs/schedule';
import {Transfer} from "./model/transfer.dto";

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);

    constructor(private schedulerRegistry: SchedulerRegistry) {
    }

    clipboard: string = ""

    timeOutName = "Delete_Clipboard_Timeout"

    getClipboard(): Transfer {
        let result = new Transfer(this.clipboard);
        this.deleteClipboard()
        return result
    }

    setClipboard(clipboard: string): Transfer {
        this.clipboard = clipboard
        // delete after 3 mins if the clipboard is not retrieved.
        this.deleteTimeout(this.timeOutName)
        this.addTimeout(this.timeOutName, 180000)
        return new Transfer(this.clipboard);
    }

    deleteClipboard(): void {
        this.clipboard = ""
    }

    addTimeout(name: string, milliseconds: number) {
        const callback = () => {
            this.logger.log(`Timeout deleted!`);
            this.deleteTimeout(name)
            this.deleteClipboard()
        };

        const timeout = setTimeout(callback, milliseconds);
        this.schedulerRegistry.addTimeout(name, timeout);
    }

    deleteTimeout(name: string) {
        if (this.schedulerRegistry.doesExist("timeout", name)) {
            this.schedulerRegistry.deleteTimeout(name);
            this.logger.log(`Timeout ${name} deleted!`);
        }
    }
}
