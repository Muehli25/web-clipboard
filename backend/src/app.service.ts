import {Injectable, Logger} from '@nestjs/common';
import {SchedulerRegistry} from '@nestjs/schedule';
import {Transfer} from "./model/transfer.dto";

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);

    constructor(private schedulerRegistry: SchedulerRegistry) {
    }

    clipboard: string = ""
    token: number = 0

    timeOutName = "Delete_Clipboard_Timeout"

    getClipboard(token: number): Transfer {
        if (token === this.token) {
            let result = new Transfer(this.clipboard, this.token);
            this.deleteClipboard()
            return result
        }
        this.deleteClipboard()
        return new Transfer("", token);
    }

    setClipboard(clipboard: string): Transfer {
        this.clipboard = clipboard
        this.token = this.getRandomToken()
        // delete after 3 minutes if the clipboard is not retrieved.
        this.deleteTimeout(this.timeOutName)
        this.addTimeout(this.timeOutName, 180000)
        return new Transfer(this.clipboard, this.token);
    }

    deleteClipboard(): void {
        this.clipboard = ""
        this.token = 0
    }

    getRandomToken(): number {
        return Math.floor((Math.random() * 1000000) + 1);
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
